/**
 * CeeFusion – CEE & NEET Full-Stack Preparation Platform Router & Controllers
 * Implements SPA routing, localStorage sync, profile verification, CEE Nepal 200 Qs Mock Test Engine,
 * 30-Question Chapter Quizzes with negative marking, and category-divided syllabus rendering.
 */

const SUPABASE_URL = 'https://rwfbinwbkdfekmxtcqpn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_1nbm8iOVOdxSVrdlqUxoOA_jXdmuOHo';
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) || null;

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // GLOBAL APPLICATION STATE
  // ==========================================================================
  let appState = {
    progress: {},        // { chapterId: { completed: false, quizScore: null } }
    mockTests: [],       // [ { id, date, score, correct, incorrect, unattempted, total, timeTaken, subjects: [] } ]
    studySchedule: [],   // [ { id, task, time, subject, done: false } ]
    scratchpad: "",      // Saved scratchpad text
  };

  // Live timed CEE Mock Exam active variables
  let activeExam = {
    questions: [],       // Holds exactly 200 questions
    currentIndex: 0,
    answers: {},         // { index: selectedOptionIndex }
    marked: {},          // { index: boolean } (Flagged for review)
    visited: {},         // { index: boolean }
    timeRemaining: 0,    // seconds
    totalDuration: 0,    // seconds
    timerInterval: null,
    subjectStats: {},    // Tracks behavioral metrics per subject category
  };

  // Active chapter quiz variables
  let activeQuiz = {
    chapterId: null,     // subjectKey-categoryKey-chapterKey
    subjectKey: null,
    categoryKey: null,
    chapterKey: null,
    questions: [],       // Holds exactly 30 questions compiled procedurally
    currentIndex: 0,
    answers: {},
    timeRemaining: 0,    // seconds (100 minutes)
    timerInterval: null,
    score: 0,
    correctCount: 0,
    incorrectCount: 0,
  };

  // Drilldown chapter state
  let activeDrilldown = {
    subjectKey: null,
    categoryKey: null,
    chapterKey: null,
  };

  // Category User-Friendly Names mapping
  const categoryNames = {
    // Physics
    mechanics: "Mechanics",
    thermodynamics: "Properties of Matter & Thermodynamics",
    waves: "Oscillations & Waves",
    electromagnetism: "Electromagnetism",
    optics: "Optics",
    modern_physics: "Modern Physics",
    // Chemistry
    physical: "Physical Chemistry",
    inorganic: "Inorganic Chemistry",
    organic: "Organic Chemistry",
    // Biology
    diversity_structure: "Diversity & Structure",
    cell_biology: "Cell Biology",
    plant_physiology: "Plant Physiology",
    human_physiology: "Human Physiology",
    reproduction_genetics: "Reproduction & Genetics",
    biotechnology_ecology: "Biotechnology & Ecology",
    // Mathematics
    algebra: "Algebra",
    trigonometry: "Trigonometry",
    geometry: "Coordinate Geometry"
  };

  // ==========================================================================
  // SIGN-IN & SESSION SECURITY LOCKS
  // ==========================================================================
  const authStatus = document.getElementById('auth-status');
  const isRecoveryRedirect = new URLSearchParams(window.location.search).get('recovery') === '1'
    || window.location.hash.includes('type=recovery');

  function setAuthStatus(message = '', type = 'info') {
    if (!authStatus) return;
    const styles = {
      info: 'border-blue-500/30 bg-blue-500/10 text-blue-200',
      success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200',
      warning: 'border-amber-500/30 bg-amber-500/10 text-amber-200',
      danger: 'border-red-500/30 bg-red-500/10 text-red-200'
    };
    authStatus.className = message
      ? `rounded-xl border px-3 py-2 text-xs font-semibold ${styles[type] || styles.info}`
      : 'hidden rounded-xl border px-3 py-2 text-xs font-semibold';
    authStatus.textContent = message;
  }

  function friendlyAuthError(error, fallback = 'Authentication failed. Please try again.') {
    if (!error) return fallback;
    if (error.name === 'AuthRetryableFetchError' || /failed to fetch/i.test(error.message || '')) {
      return 'The account service is temporarily unavailable. Please wait a minute and try again.';
    }
    return error.message || fallback;
  }

  function unlockWorkspace() {
    const overlay = document.getElementById('sign-in-screen');
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    setTimeout(() => overlay.classList.add('hidden'), 500);
    loadState();
    navigateTo('dashboard');
  }

  async function checkSession() {
    const overlay = document.getElementById('sign-in-screen');

    if (!supabaseClient) {
      setAuthStatus('The account service failed to load. Refresh the page or try again shortly.', 'danger');
      return;
    }

    let session;
    try {
      const result = await supabaseClient.auth.getSession();
      if (result.error) throw result.error;
      session = result.data.session;
      setAuthStatus();
    } catch (error) {
      console.error('Supabase session check failed:', error);
      overlay.classList.remove('hidden');
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';
      setAuthStatus(friendlyAuthError(error), 'danger');
      return;
    }

    if (session && isRecoveryRedirect) {
      overlay.classList.remove('hidden');
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';
      switchAuthMode('reset-update');
      return;
    }

    if (session) {
      overlay.classList.add('hidden');
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';

      const { data: profile } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .maybeSingle();

      updateUserProfileUI({ name: profile?.name || 'Student', email: session.user.email, targetExam: profile?.target_exam || 'cee' });

      loadState();
      navigateTo('dashboard');
    } else {
      overlay.classList.remove('hidden');
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';
    }
  }

  function updateUserProfileUI(profile) {
    const name = profile.name || "Guest User";
    const email = profile.email || "guest@mail.com";
    const exam = profile.targetExam || "cee";
    
    // Calculate initials
    const words = name.trim().split(/\s+/);
    let initials = "GU";
    if (words.length > 1) {
      initials = (words[0][0] + words[words.length - 1][0]).toUpperCase();
    } else if (words.length === 1 && words[0].length > 0) {
      initials = words[0][0].toUpperCase() + (words[0][1] || "").toUpperCase();
    }
    
    // Exam badge label mapping
    let examLabel = "CEE Nepal Aspirant";
    if (exam === "neet") {
      examLabel = "NEET Aspirant";
    } else if (exam === "both") {
      examLabel = "CEE & NEET Aspirant";
    }
    
    // Update Desktop Sidebar
    const userAvatarInitials = document.getElementById('user-avatar-initials');
    if (userAvatarInitials) userAvatarInitials.textContent = initials;
    const userDisplayName = document.getElementById('user-display-name');
    if (userDisplayName) userDisplayName.textContent = name;
    const userDisplayBadge = document.getElementById('user-display-badge');
    if (userDisplayBadge) {
      userDisplayBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ${examLabel}`;
    }
    
    // Update Mobile Drawer
    const mobileUserAvatarInitials = document.getElementById('mobile-user-avatar-initials');
    if (mobileUserAvatarInitials) mobileUserAvatarInitials.textContent = initials;
    const mobileUserDisplayName = document.getElementById('mobile-user-display-name');
    if (mobileUserDisplayName) mobileUserDisplayName.textContent = name;
    const mobileUserDisplayBadge = document.getElementById('mobile-user-display-badge');
    if (mobileUserDisplayBadge) {
      mobileUserDisplayBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ${examLabel}`;
    }
    
    // Update Mobile Header
    const mobileHeaderAvatar = document.getElementById('mobile-header-avatar');
    if (mobileHeaderAvatar) mobileHeaderAvatar.textContent = initials;
    
    // Update Dashboard Welcome text
    const welcomeUserName = document.getElementById('welcome-user-name');
    if (welcomeUserName) {
      welcomeUserName.textContent = words[0];
    }
  }

  // Helper for authentication error field styling
  function setFieldError(inputEl, errorEl, message) {
    if (inputEl) inputEl.style.borderColor = '#ef4444';
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
  }

  function resetFieldErrors() {
    ['signin-name', 'signin-email', 'signin-exam', 'signin-password', 'verification-code', 'new-password', 'confirm-password'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.borderColor = '';
    });
    ['error-signin-name', 'error-signin-email', 'error-signin-exam', 'error-signin-password', 'error-verification-code', 'error-new-password', 'error-confirm-password'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add('hidden');
    });
  }

  // Auth Tab Switching Logic
  const tabSignup = document.getElementById('auth-tab-signup');
  const tabLogin = document.getElementById('auth-tab-login');
  const tabsContainer = document.getElementById('auth-tabs-container');
  const modeInput = document.getElementById('auth-mode-input');
  const modalTitle = document.getElementById('auth-modal-title');
  const modalSub = document.getElementById('auth-modal-subtitle');
  const wrapperName = document.getElementById('wrapper-signin-name');
  const wrapperEmail = document.getElementById('wrapper-signin-email');
  const wrapperExam = document.getElementById('wrapper-signin-exam');
  const wrapperPassword = document.getElementById('wrapper-signin-password');
  const wrapperVerification = document.getElementById('wrapper-verification-code');
  const wrapperNewPassword = document.getElementById('wrapper-new-password');
  const wrapperConfirmPassword = document.getElementById('wrapper-confirm-password');
  const btnAuthSubmit = document.getElementById('btn-auth-submit');
  const btnForgotPassword = document.getElementById('btn-forgot-password');
  const btnBackToLogin = document.getElementById('btn-back-to-login');

  function setAuthBusy(isBusy, label = 'Please wait...') {
    if (!btnAuthSubmit) return;
    btnAuthSubmit.disabled = isBusy;
    btnAuthSubmit.classList.toggle('opacity-60', isBusy);
    btnAuthSubmit.classList.toggle('cursor-not-allowed', isBusy);
    if (isBusy) {
      btnAuthSubmit.dataset.previousHtml = btnAuthSubmit.innerHTML;
      btnAuthSubmit.dataset.previousMode = modeInput?.value || '';
      btnAuthSubmit.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin mr-1"></i> ${label}`;
    } else if (btnAuthSubmit.dataset.previousHtml) {
      if (btnAuthSubmit.dataset.previousMode === (modeInput?.value || '')) {
        btnAuthSubmit.innerHTML = btnAuthSubmit.dataset.previousHtml;
      }
      delete btnAuthSubmit.dataset.previousHtml;
      delete btnAuthSubmit.dataset.previousMode;
    }
  }

  function setAuthFieldVisibility(element, visible) {
    if (!element) return;
    element.classList.toggle('hidden', !visible);
    element.style.display = visible ? (element === tabsContainer ? 'flex' : 'block') : 'none';
  }

  function switchAuthMode(mode, options = {}) {
    resetFieldErrors();
    setAuthStatus(options.preserveStatus ? authStatus?.textContent || '' : '', options.statusType || 'info');
    if (modeInput) modeInput.value = mode;

    const isSignup = mode === 'signup';
    const isLogin = mode === 'login';
    const isVerify = mode === 'verify';
    const isResetRequest = mode === 'reset-request';
    const isResetUpdate = mode === 'reset-update';

    setAuthFieldVisibility(tabsContainer, isSignup || isLogin);
    setAuthFieldVisibility(wrapperName, isSignup);
    setAuthFieldVisibility(wrapperEmail, !isResetUpdate);
    setAuthFieldVisibility(wrapperExam, isSignup);
    setAuthFieldVisibility(wrapperPassword, isSignup || isLogin);
    setAuthFieldVisibility(wrapperVerification, isVerify);
    setAuthFieldVisibility(wrapperNewPassword, isResetUpdate);
    setAuthFieldVisibility(wrapperConfirmPassword, isResetUpdate);
    setAuthFieldVisibility(btnForgotPassword, isLogin);
    setAuthFieldVisibility(btnBackToLogin, isVerify || isResetRequest || isResetUpdate);

    if (tabSignup && tabLogin) {
      tabSignup.className = `flex-1 py-2 text-sm font-bold text-center border-b-2 transition-all ${isSignup ? 'text-brand-primary border-brand-primary' : 'text-gray-400 border-transparent hover:text-gray-200'}`;
      tabLogin.className = `flex-1 py-2 text-sm font-bold text-center border-b-2 transition-all ${isLogin ? 'text-brand-primary border-brand-primary' : 'text-gray-400 border-transparent hover:text-gray-200'}`;
    }

    const modeContent = {
      signup: ['Create CeeFusion Account', 'Initialize your student profile and unlock exam revisions.', '<i class="fa-solid fa-user-plus mr-1"></i> Create Account'],
      login: ['Log In to CeeFusion', 'Enter your credentials to access your saved progress.', '<i class="fa-solid fa-lock-open mr-1"></i> Log In'],
      verify: ['Verify Your Email', 'Use the confirmation link in your email, or enter its verification code below.', '<i class="fa-solid fa-shield-check mr-1"></i> Verify Email'],
      'reset-request': ['Reset Your Password', 'Enter your email and we will send you a secure reset link.', '<i class="fa-solid fa-envelope mr-1"></i> Email Reset Link'],
      'reset-update': ['Choose a New Password', 'Create a strong password for your CeeFusion account.', '<i class="fa-solid fa-key mr-1"></i> Update Password']
    }[mode];

    if (modeContent) {
      if (modalTitle) modalTitle.textContent = modeContent[0];
      if (modalSub) modalSub.textContent = modeContent[1];
      if (btnAuthSubmit) btnAuthSubmit.innerHTML = modeContent[2];
    }

    const emailInput = document.getElementById('signin-email');
    if (emailInput) {
      emailInput.readOnly = isVerify;
      if (isVerify && options.email) emailInput.value = options.email;
    }
  }

  if (tabSignup && tabLogin) {
    tabSignup.addEventListener('click', () => switchAuthMode('signup'));
    tabLogin.addEventListener('click', () => switchAuthMode('login'));
  }
  if (btnForgotPassword) btnForgotPassword.addEventListener('click', () => switchAuthMode('reset-request'));
  if (btnBackToLogin) btnBackToLogin.addEventListener('click', async () => {
    if (modeInput?.value === 'reset-update' && supabaseClient) await supabaseClient.auth.signOut({ scope: 'local' });
    window.history.replaceState({}, document.title, window.location.pathname);
    switchAuthMode('login');
  });

  // Bind Sign-In / Sign-Up submit validation
  const signinForm = document.getElementById('edupeak-signin-form');
  if (signinForm) {
    signinForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      resetFieldErrors();

      const mode = modeInput ? modeInput.value : 'signup';
      const nameInput = document.getElementById('signin-name');
      const emailInput = document.getElementById('signin-email');
      const examInput = document.getElementById('signin-exam');
      const passwordInput = document.getElementById('signin-password');
      const verificationInput = document.getElementById('verification-code');
      const newPasswordInput = document.getElementById('new-password');
      const confirmPasswordInput = document.getElementById('confirm-password');
      
      const errName = document.getElementById('error-signin-name');
      const errEmail = document.getElementById('error-signin-email');
      const errExam = document.getElementById('error-signin-exam');
      const errPassword = document.getElementById('error-signin-password');
      const errVerification = document.getElementById('error-verification-code');
      const errNewPassword = document.getElementById('error-new-password');
      const errConfirmPassword = document.getElementById('error-confirm-password');
      
      let valid = true;

      const emailVal = emailInput.value.trim();
      const passVal = passwordInput.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

      if (!supabaseClient) {
        setAuthStatus('The account service is unavailable. Refresh the page and try again.', 'danger');
        return;
      }

      if (mode === 'signup') {
        // 1. Full name validation: at least two words, each at least 2 chars
        const nameVal = nameInput.value.trim();
        const words = nameVal ? nameVal.split(/\s+/) : [];
        if (words.length < 2 || !words.every(w => w.length >= 2)) {
          if (valid) nameInput.focus();
          setFieldError(nameInput, errName, "Full name must contain at least two words (min 2 letters each).");
          valid = false;
        }

        // 2. Email validation
        if (!emailRegex.test(emailVal)) {
          if (valid) emailInput.focus();
          setFieldError(emailInput, errEmail, "Please enter a valid email address.");
          valid = false;
        }

        // 3. Target Exam
        if (!examInput.value) {
          if (valid) examInput.focus();
          setFieldError(examInput, errExam, "Please select your target exam.");
          valid = false;
        }

        // 4. Password validation: min 7 chars AND at least one number
        if (!passVal || passVal.length < 7) {
          if (valid) passwordInput.focus();
          setFieldError(passwordInput, errPassword, "Password must be at least 7 characters long.");
          valid = false;
        } else if (!/\d/.test(passVal)) {
          if (valid) passwordInput.focus();
          setFieldError(passwordInput, errPassword, "Password must contain at least one number.");
          valid = false;
        }

        if (valid) {
          if (!supabaseClient) {
            setAuthStatus('The account service is unavailable. Refresh the page and try again.', 'danger');
            return;
          }

          setAuthBusy(true, 'Creating account...');
          setAuthStatus();
          try {
            const { data, error } = await supabaseClient.auth.signUp({
              email: emailVal,
              password: passVal,
              options: {
                emailRedirectTo: `${window.location.origin}${window.location.pathname}`,
                data: {
                  name: nameVal,
                  target_exam: examInput.value
                }
              }
            });
            if (error) throw error;

            if (!data.session) {
              sessionStorage.setItem('pendingVerificationEmail', emailVal);
              signinForm.reset();
              switchAuthMode('verify', { email: emailVal });
              setAuthStatus('Account created. Open the verification email and follow its instructions.', 'success');
              showToast('A verification email was sent to you.', 'success');
              return;
            }

            updateUserProfileUI({ name: nameVal, email: emailVal, targetExam: examInput.value });
            unlockWorkspace();
            showToast("Account registered! Welcome, " + nameVal, "success");
            signinForm.reset();
          } catch (error) {
            console.error('Supabase sign-up failed:', error);
            const message = friendlyAuthError(error, 'Could not create your account.');
            setAuthStatus(message, 'danger');
            showToast(message, 'danger');
          } finally {
            setAuthBusy(false);
          }
        } else {
          showToast("Please check validation requirements.", "warning");
        }

      } else if (mode === 'verify') {
        const verificationCode = verificationInput.value.trim().replace(/\s+/g, '');
        const verificationEmail = emailVal || sessionStorage.getItem('pendingVerificationEmail') || '';

        if (!emailRegex.test(verificationEmail)) {
          setFieldError(emailInput, errEmail, 'Enter the email address used to create the account.');
          valid = false;
        }
        if (!/^\d{6,8}$/.test(verificationCode)) {
          setFieldError(verificationInput, errVerification, 'Enter the 6–8 digit code from your email.');
          valid = false;
        }

        if (valid) {
          setAuthBusy(true, 'Verifying...');
          setAuthStatus();
          try {
            const { data, error } = await supabaseClient.auth.verifyOtp({
              email: verificationEmail,
              token: verificationCode,
              type: 'email'
            });
            if (error) throw error;

            sessionStorage.removeItem('pendingVerificationEmail');
            const { data: profile } = await supabaseClient
              .from('profiles')
              .select('*')
              .eq('id', data.user.id)
              .maybeSingle();
            updateUserProfileUI({ name: profile?.name || 'Student', email: data.user.email, targetExam: profile?.target_exam || 'cee' });
            showToast('Email verified. Welcome to CeeFusion!', 'success');
            unlockWorkspace();
            signinForm.reset();
          } catch (error) {
            const message = friendlyAuthError(error, 'That verification code is invalid or expired.');
            setFieldError(verificationInput, errVerification, message);
            setAuthStatus(message, 'danger');
          } finally {
            setAuthBusy(false);
          }
        }

      } else if (mode === 'reset-request') {
        if (!emailRegex.test(emailVal)) {
          setFieldError(emailInput, errEmail, 'Please enter a valid email address.');
          valid = false;
        }

        if (valid) {
          setAuthBusy(true, 'Sending reset link...');
          setAuthStatus();
          try {
            const redirectTo = `${window.location.origin}${window.location.pathname}?recovery=1`;
            const { error } = await supabaseClient.auth.resetPasswordForEmail(emailVal, { redirectTo });
            if (error) throw error;
            setAuthStatus('If an account exists for that email, a secure password-reset link has been sent.', 'success');
            showToast('Check your email for the password-reset link.', 'success');
          } catch (error) {
            const message = friendlyAuthError(error, 'Could not send the reset email.');
            setAuthStatus(message, 'danger');
          } finally {
            setAuthBusy(false);
          }
        }

      } else if (mode === 'reset-update') {
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        if (newPassword.length < 8 || !/\d/.test(newPassword)) {
          setFieldError(newPasswordInput, errNewPassword, 'Use at least 8 characters and include a number.');
          valid = false;
        }
        if (confirmPassword !== newPassword) {
          setFieldError(confirmPasswordInput, errConfirmPassword, 'Passwords do not match.');
          valid = false;
        }

        if (valid) {
          setAuthBusy(true, 'Updating password...');
          setAuthStatus();
          try {
            const { error } = await supabaseClient.auth.updateUser({ password: newPassword });
            if (error) throw error;
            await supabaseClient.auth.signOut({ scope: 'local' });
            window.history.replaceState({}, document.title, window.location.pathname);
            signinForm.reset();
            switchAuthMode('login');
            setAuthStatus('Password updated successfully. You can now log in.', 'success');
            showToast('Your password has been updated.', 'success');
          } catch (error) {
            const message = friendlyAuthError(error, 'Could not update your password. Request a new reset link.');
            setAuthStatus(message, 'danger');
          } finally {
            setAuthBusy(false);
          }
        }

      } else {
        // LOGIN MODE
        if (!emailRegex.test(emailVal)) {
          if (valid) emailInput.focus();
          setFieldError(emailInput, errEmail, "Please enter a valid email address.");
          valid = false;
        }
        if (!passVal) {
          if (valid) passwordInput.focus();
          setFieldError(passwordInput, errPassword, "Please enter your password.");
          valid = false;
        }

        if (valid) {
          if (!supabaseClient) {
            setAuthStatus('The account service is unavailable. Refresh the page and try again.', 'danger');
            return;
          }

          setAuthBusy(true, 'Logging in...');
          setAuthStatus();
          try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
              email: emailVal,
              password: passVal
            });
            if (error) throw error;

            const { data: profile, error: profileError } = await supabaseClient
              .from('profiles')
              .select('*')
              .eq('id', data.user.id)
              .maybeSingle();

            if (profileError) console.warn('Profile could not be loaded:', profileError);
            updateUserProfileUI({ name: profile?.name || 'Student', email: data.user.email, targetExam: profile?.target_exam || 'cee' });
            unlockWorkspace();
            showToast("Welcome back, " + (profile?.name || 'Student'), "success");
            signinForm.reset();
          } catch (error) {
            console.error('Supabase login failed:', error);
            const message = friendlyAuthError(error, 'Incorrect email or password.');
            setFieldError(emailInput, errEmail, message);
            setAuthStatus(message, 'danger');
            showToast(message, 'warning');
          } finally {
            setAuthBusy(false);
          }
        } else {
          showToast("Login failed. Please check field errors.", "warning");
        }
      }
    });
  }

  // Bind Sign-Out buttons
  const signOutBtn = document.getElementById('btn-sign-out');
  const mobileSignOutBtn = document.getElementById('mobile-btn-sign-out');
  
  async function handleSignOut() {
    if (confirm("Are you sure you want to sign out? This locks the workspace.")) {
      await supabaseClient.auth.signOut();
      localStorage.removeItem('edupeak_fs_state');
      initializeDefaultState();
      
      const overlay = document.getElementById('sign-in-screen');
      overlay.classList.remove('hidden');
      overlay.offsetHeight; // force reflow
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';
      
      showToast("Signed out. Workspace locked.", "info");
      navigateTo('dashboard');
    }
  }
  if (signOutBtn) signOutBtn.addEventListener('click', handleSignOut);
  if (mobileSignOutBtn) mobileSignOutBtn.addEventListener('click', handleSignOut);

  // ==========================================================================
  // STATE PERSISTENCE & LOCALSTORAGE SYNC
  // ==========================================================================
  function loadState() {
    try {
      const saved = localStorage.getItem('edupeak_fs_state');
      if (saved) {
        appState = JSON.parse(saved);
        if (!appState.progress) appState.progress = {};
        if (!appState.mockTests) appState.mockTests = [];
        if (!appState.studySchedule) appState.studySchedule = [];
        if (!appState.scratchpad) appState.scratchpad = "";
      } else {
        initializeDefaultState();
      }
    } catch (e) {
      console.error("LocalStorage load error:", e);
      initializeDefaultState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem('edupeak_fs_state', JSON.stringify(appState));
    } catch (e) {
      console.error("LocalStorage save error:", e);
    }
  }

  function initializeDefaultState() {
    appState.progress = {};
    appState.mockTests = [];
    appState.scratchpad = "";

    // Sync progress tracking flags for all nested chapters in data.js
    Object.keys(window.eduPeakData).forEach(subKey => {
      if (subKey === 'mentalAgility') return;
      const categories = window.eduPeakData[subKey];
      Object.keys(categories).forEach(catKey => {
        const cat = categories[catKey];
        Object.keys(cat).forEach(chKey => {
          const chId = `${subKey}-${catKey}-${chKey}`;
          appState.progress[chId] = { completed: false, quizScore: null };
        });
      });
    });

    // Seed initial dummy attempt
    appState.mockTests = [
      {
        id: 101,
        date: "2026-05-28",
        score: 68.5,
        correct: 145,
        incorrect: 34,
        unattempted: 21,
        total: 200,
        timeTaken: "02:44:12",
        subjects: ["Physics", "Chemistry", "Biology", "MAT"]
      }
    ];

    saveState();
  }

  // ==========================================================================
  // TOAST NOTIFICATIONS
  // ==========================================================================
  function showToast(message, type = 'info') {
    const portal = document.getElementById('global-toast-portal');
    if (!portal) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let iconClass = 'fa-circle-info';
    if (type === 'success') iconClass = 'fa-circle-check';
    if (type === 'warning') iconClass = 'fa-circle-exclamation';
    if (type === 'danger') iconClass = 'fa-triangle-exclamation';

    toast.innerHTML = `
      <i class="fa-solid ${iconClass}"></i>
      <span>${message}</span>
    `;
    portal.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // ==========================================================================
  // SPA ROUTING SYSTEMS
  // ==========================================================================
  function navigateTo(routeId) {
    closeMobileDrawer();

    // Reset drilldown header states
    document.getElementById('drilldown-nav-header').style.display = 'none';
    document.getElementById('subject-main-syllabus-container').style.display = 'block';
    document.getElementById('chapter-drilldown-container').style.display = 'none';

    // Highlight active nav item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      if (item.getAttribute('data-route') === routeId) {
        item.classList.add('active');
        item.setAttribute('aria-current', 'page');
      } else {
        item.classList.remove('active');
        item.removeAttribute('aria-current');
      }
    });

    // Switch view sections
    const sections = document.querySelectorAll('.view-section');
    let targetSectionId = `view-${routeId}`;
    if (['physics', 'chemistry', 'biology', 'mathematics'].includes(routeId)) {
      targetSectionId = 'view-subject';
    }

    sections.forEach(sec => {
      if (sec.id === targetSectionId) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });

    // Render corresponding controllers
    if (routeId === 'dashboard') {
      renderDashboard();
    } else if (['physics', 'chemistry', 'biology', 'mathematics'].includes(routeId)) {
      renderSubjectView(routeId);
    } else if (routeId === 'mock-exam') {
      renderMockHistory();
    }

    const activeSec = document.querySelector('.view-section.active');
    if (activeSec) activeSec.scrollTop = 0;
  }

  // Bind Sidebar items
  const sidebarButtons = document.querySelectorAll('.nav-item');
  sidebarButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-route');
      navigateTo(target);
    });
  });

  // Mobile navigation drawer
  const hamburgerBtn = document.getElementById('hamburger-menu-btn');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerOverlay = document.getElementById('drawer-overlay');

  function openMobileDrawer() {
    drawerOverlay.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  }
  function closeMobileDrawer() {
    drawerOverlay.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  hamburgerBtn.addEventListener('click', openMobileDrawer);
  drawerCloseBtn.addEventListener('click', closeMobileDrawer);
  drawerOverlay.addEventListener('click', (e) => {
    if (e.target === drawerOverlay) closeMobileDrawer();
  });
  drawerOverlay.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', closeMobileDrawer);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) closeMobileDrawer();
  });

  // ==========================================================================
  // HOME / DASHBOARD SCREEN BUILDER
  // ==========================================================================
  function renderDashboard() {
    updateDashboardStats();
    renderDashboardSubjectProgress();
    renderDailySchedulerList();
  }

  function updateDashboardStats() {
    let totalChapters = 0;
    let completedChapters = 0;
    let quizScoreSum = 0;
    let quizScoreCount = 0;

    Object.keys(appState.progress).forEach(chId => {
      totalChapters++;
      const p = appState.progress[chId];
      if (p.completed) {
        completedChapters++;
      }
      if (p.quizScore !== null) {
        quizScoreSum += p.quizScore;
        quizScoreCount++;
      }
    });

    const overallPercent = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;
    const averageQuiz = quizScoreCount > 0 ? Math.round(quizScoreSum / quizScoreCount) : 0;
    const totalMocks = appState.mockTests ? appState.mockTests.length : 0;

    document.getElementById('stat-total-progress').textContent = `${overallPercent}%`;
    document.getElementById('stat-chapters-done').textContent = `${completedChapters}/${totalChapters}`;
    document.getElementById('stat-avg-score').textContent = `${averageQuiz}%`;
    document.getElementById('stat-exams-taken').textContent = totalMocks;
  }

  function renderDashboardSubjectProgress() {
    const container = document.getElementById('subject-wheel-container');
    if (!container) return;
    container.innerHTML = '';

    const subjects = [
      { key: 'physics', name: 'Physics', icon: 'fa-atom', color: '#06b6d4', desc: 'Mechanics, Electromagnetism, Waves & Modern Physics.' },
      { key: 'chemistry', name: 'Chemistry', icon: 'fa-flask', color: '#ec4899', desc: 'Physical, Organic, & Inorganic syllabus segments.' },
      { key: 'biology', name: 'Biology', icon: 'fa-leaf', color: '#10b981', desc: 'MEC CEE botany and zoology structural divisions.' },
      { key: 'mathematics', name: 'Mathematics', icon: 'fa-calculator', color: '#f59e0b', desc: 'Advanced algebraic and calculus concept maps.' }
    ];

    subjects.forEach(sub => {
      const subData = window.eduPeakData[sub.key];
      let subChapters = 0;
      let subDone = 0;

      Object.keys(subData).forEach(catKey => {
        const cat = subData[catKey];
        Object.keys(cat).forEach(chKey => {
          subChapters++;
          const chId = `${sub.key}-${catKey}-${chKey}`;
          if (appState.progress[chId] && appState.progress[chId].completed) {
            subDone++;
          }
        });
      });

      const percent = subChapters > 0 ? Math.round((subDone / subChapters) * 100) : 0;
      const circumference = 2 * Math.PI * 25; // 157
      const strokeOffset = circumference - (circumference * percent) / 100;

      const card = document.createElement('div');
      card.className = 'sub-progress-card cursor-pointer';
      card.setAttribute('data-subject', sub.key);
      card.style.borderLeft = `4px solid ${sub.color}`;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Study ${sub.name}. Progress is ${percent}% completed.`);

      card.innerHTML = `
        <div class="flex flex-col gap-2 max-w-[70%]">
          <span class="text-lg font-black text-white flex items-center gap-2.5 font-heading">
            <i class="fa-solid ${sub.icon}" style="color: ${sub.color};"></i> ${sub.name}
          </span>
          <span class="text-xs text-gray-400 font-semibold leading-relaxed">${sub.desc}</span>
          <span class="text-xs text-gray-300 font-bold flex items-center gap-1 mt-1">
            <span class="w-1.5 h-1.5 rounded-full" style="background: ${sub.color};"></span>
            ${subDone} of ${subChapters} Chapters Mastered
          </span>
        </div>
        
        <div class="progress-circle-wrapper flex-shrink-0" aria-hidden="true">
          <svg class="progress-circle-svg" viewBox="0 0 60 60">
            <circle class="progress-circle-bg" cx="30" cy="30" r="25" />
            <circle class="progress-circle-bar" cx="30" cy="30" r="25" 
                    stroke="${sub.color}" 
                    style="stroke-dashoffset: ${strokeOffset};" />
          </svg>
          <div class="progress-circle-text font-black" style="color: ${sub.color};">${percent}%</div>
        </div>
      `;

      card.addEventListener('click', () => navigateTo(sub.key));
      container.appendChild(card);
    });
  }

  // Dashboard quick exam trigger
  document.getElementById('btn-quick-mock-launch').addEventListener('click', () => {
    navigateTo('mock-exam');
  });

  // ==========================================================================
  // DAILY TIMELINE FOCUS SCHEDULER
  // ==========================================================================
  const schedBtn = document.getElementById('btn-generate-schedule');
  if (schedBtn) {
    schedBtn.addEventListener('click', buildDailySchedule);
  }

  function buildDailySchedule() {
    const focus = document.getElementById('sched-select-focus').value;
    appState.studySchedule = [];

    const slots = [
      { id: 1, time: "07:30 AM - 09:30 AM", label: "Session 1: Detailed Notes study" },
      { id: 2, time: "11:00 AM - 01:00 PM", label: "Session 2: Formula & Equation revision" },
      { id: 3, time: "03:30 PM - 05:30 PM", label: "Session 3: 30-Question Chapter Quiz" },
      { id: 4, time: "07:30 PM - 09:30 PM", label: "Session 4: CEE Mock Exam simulation" }
    ];

    const keys = ['physics', 'chemistry', 'biology', 'mathematics'];

    slots.forEach((slot, index) => {
      let subKey = focus;
      if (focus === 'all') {
        subKey = keys[index % keys.length];
      }

      const subData = window.eduPeakData[subKey];
      const catKeys = Object.keys(subData);
      const randCatKey = catKeys[Math.floor(Math.random() * catKeys.length)];
      const cat = subData[randCatKey];
      const chKeys = Object.keys(cat);
      const randChKey = chKeys[Math.floor(Math.random() * chKeys.length)];
      const chapter = cat[randChKey];

      let action = "";
      if (index === 0) {
        action = `Analyze 150+ word notes and visual diagrams for: ${chapter.name}`;
      } else if (index === 1) {
        action = `Practice centered equations and formulas for: ${chapter.name}`;
      } else if (index === 2) {
        action = `Complete 30-question interactive timer quiz for: ${chapter.name}`;
      } else {
        action = `Perform timed 200 MCQ Mock Exam segment involving ${subKey.toUpperCase()}`;
      }

      appState.studySchedule.push({
        id: slot.id,
        time: slot.time,
        task: action,
        subject: subKey,
        done: false
      });
    });

    saveState();
    renderDailySchedulerList();
    showToast("Today's focus revision timetable compiled!", "success");
  }

  function renderDailySchedulerList() {
    const listContainer = document.getElementById('planner-schedule-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    if (!appState.studySchedule || appState.studySchedule.length === 0) {
      listContainer.innerHTML = `
        <div class="text-center py-6 text-gray-500 text-sm">
          <i class="fa-solid fa-calendar-plus text-2xl mb-2 text-gray-600 block"></i>
          <span>No revision schedule compiled. Select focus to compile.</span>
        </div>
      `;
      return;
    }

    const subColors = {
      physics: '#06b6d4',
      chemistry: '#ec4899',
      biology: '#10b981',
      mathematics: '#f59e0b'
    };

    appState.studySchedule.forEach(slot => {
      const color = subColors[slot.subject] || '#874dff';
      const row = document.createElement('div');
      row.className = `schedule-row border-l-[4px] ${slot.done ? 'active' : ''}`;
      row.style.borderLeftColor = color;

      row.innerHTML = `
        <label class="checkbox-container select-none cursor-pointer" aria-label="Mark task done">
          <input type="checkbox" ${slot.done ? 'checked' : ''} data-slot-id="${slot.id}">
          <div class="checkbox-custom" style="border-radius: 50%;">
            <i class="fa-solid fa-check"></i>
          </div>
        </label>
        
        <div class="flex-grow flex flex-col ${slot.done ? 'line-through opacity-50' : 'opacity-100'} transition-all">
          <span class="text-xs font-extrabold ${slot.done ? 'text-gray-500' : 'text-gray-200'} leading-tight">${slot.task}</span>
          <span class="text-[0.68rem] text-gray-500 font-semibold mt-1 flex items-center gap-1">
            <i class="fa-regular fa-clock"></i> ${slot.time}
          </span>
        </div>
      `;

      const checkInput = row.querySelector('input');
      checkInput.addEventListener('change', (e) => {
        slot.done = e.target.checked;
        saveState();
        renderDailySchedulerList();
        updateDashboardStats();
      });

      listContainer.appendChild(row);
    });
  }

  // ==========================================================================
  // SUBJECT VIEW RENDERER (CATEGORY-DIVIDED MAPPING)
  // ==========================================================================
  function renderSubjectView(subjectKey) {
    const container = document.getElementById('subject-main-syllabus-container');
    if (!container) return;
    container.innerHTML = '';

    const subData = window.eduPeakData[subjectKey];
    if (!subData) return;

    const subColors = {
      physics: { color: '#06b6d4', icon: 'fa-atom', bgGlow: 'rgba(6, 182, 212, 0.12)' },
      chemistry: { color: '#ec4899', icon: 'fa-flask', bgGlow: 'rgba(236, 72, 153, 0.12)' },
      biology: { color: '#10b981', icon: 'fa-leaf', bgGlow: 'rgba(16, 185, 129, 0.12)' },
      mathematics: { color: '#f59e0b', icon: 'fa-calculator', bgGlow: 'rgba(245, 158, 11, 0.12)' }
    };
    const cMeta = subColors[subjectKey];

    // Subject Banner
    const banner = document.createElement('div');
    banner.className = 'subject-header-banner p-6 md:p-8 rounded-3xl flex items-center gap-6';
    banner.style.background = `linear-gradient(135deg, ${cMeta.bgGlow} 0%, rgba(9, 13, 22, 0.4) 100%)`;
    banner.style.borderColor = cMeta.color.replace(')', ', 0.15)');

    const subNameFormatted = subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1);
    banner.innerHTML = `
      <div class="subject-header-icon w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white flex-shrink-0" style="background: ${cMeta.color}; box-shadow: 0 0 20px ${cMeta.color}40;">
        <i class="fa-solid ${cMeta.icon}"></i>
      </div>
      <div class="subject-header-details">
        <h1 class="text-2xl md:text-3.5xl font-extrabold tracking-tight font-heading text-white">${subNameFormatted} Syllabus</h1>
        <p class="text-xs md:text-sm text-gray-400">Natively mapping all CEE/NEET Platform - Custom Visual Enhancement Styles categories.</p>
      </div>
    `;
    container.appendChild(banner);

    // Subject Progress Box
    let chCount = 0;
    let chDone = 0;
    Object.keys(subData).forEach(catKey => {
      const cat = subData[catKey];
      Object.keys(cat).forEach(chKey => {
        chCount++;
        const chId = `${subjectKey}-${catKey}-${chKey}`;
        if (appState.progress[chId] && appState.progress[chId].completed) {
          chDone++;
        }
      });
    });
    const subPercent = chCount > 0 ? Math.round((chDone / chCount) * 100) : 0;

    const progressBox = document.createElement('div');
    progressBox.className = 'glass-card p-5';
    progressBox.innerHTML = `
      <div class="flex justify-between items-center mb-2.5 font-extrabold text-xs md:text-sm">
        <span>Syllabus Coverage</span>
        <span style="color: ${cMeta.color};">${subPercent}% Mastered (${chDone}/${chCount} Chapters)</span>
      </div>
      <div class="quiz-progress-bar-bg" style="margin: 0; height: 8px;">
        <div class="quiz-progress-bar-filled" style="width: ${subPercent}%; background: ${cMeta.color};"></div>
      </div>
    `;
    container.appendChild(progressBox);

    // Render Chapters grouped by category
    const categoriesSection = document.createElement('section');
    categoriesSection.className = 'space-y-8';

    Object.keys(subData).forEach(catKey => {
      const cat = subData[catKey];
      const catName = categoryNames[catKey] || catKey;

      const catBox = document.createElement('div');
      catBox.className = 'space-y-4';

      catBox.innerHTML = `
        <h3 class="text-base font-black text-gray-300 uppercase tracking-wider flex items-center gap-2 border-l-[3px] pl-3" style="border-left-color: ${cMeta.color};">
          <span>${catName}</span>
        </h3>
      `;

      const chaptersGrid = document.createElement('div');
      chaptersGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

      Object.keys(cat).forEach(chKey => {
        const chapter = cat[chKey];
        const chId = `${subjectKey}-${catKey}-${chKey}`;
        const chProgress = appState.progress[chId] || { completed: false, quizScore: null };

        let tagHTML = "";
        const sampleTopics = chapter.formulas.slice(0, 2);
        sampleTopics.forEach(t => {
          tagHTML += `<span class="topic-tag text-[0.62rem] font-bold border border-white/5 py-1 px-2.5 rounded-full bg-white/2 truncate max-w-[130px] inline-block">${t}</span>`;
        });

        let scoreBadge = "";
        if (chProgress.quizScore !== null) {
          const bg = chProgress.quizScore >= 80 ? 'badge-success' : (chProgress.quizScore >= 45 ? 'badge-warning' : 'badge-danger');
          scoreBadge = `<span class="badge ${bg} text-[0.65rem] py-0.5 px-2">Quiz: ${chProgress.quizScore}%</span>`;
        }

        const card = document.createElement('article');
        card.className = 'chapter-card p-6 flex flex-col justify-between gap-5 cursor-pointer';
        card.setAttribute('data-subject', subjectKey);
        card.innerHTML = `
          <div class="flex justify-between items-start gap-2">
            <div class="space-y-1.5 flex-grow">
              <span class="badge badge-info text-[0.62rem] py-0.5 px-2.5 font-bold uppercase tracking-wider">Chapter</span>
              <h4 class="text-base md:text-lg font-black leading-snug text-white font-heading min-h-[2.8rem] line-clamp-2">${chapter.name}</h4>
            </div>
            ${chProgress.completed ? `<i class="fa-solid fa-circle-check text-brand-success text-lg flex-shrink-0 mt-1"></i>` : ''}
          </div>
          
          <div class="flex flex-wrap gap-1.5 min-h-[32px] items-center">
            ${tagHTML}
          </div>
          
          <div class="flex justify-between items-center border-t border-white/5 pt-4 mt-auto gap-2">
            <label class="checkbox-container cursor-pointer select-none text-xs font-extrabold min-h-[36px] flex items-center">
              <input type="checkbox" ${chProgress.completed ? 'checked' : ''} data-chapter-id="${chId}">
              <div class="checkbox-custom">
                <i class="fa-solid fa-check"></i>
              </div>
              <span>Mastered</span>
            </label>
            
            <div class="flex items-center gap-2">
              ${scoreBadge}
              <button class="btn-card-launch bg-[#161c2a] border border-white/10 hover:bg-brand-primary text-xs font-black py-2 px-3.5 rounded-xl flex items-center gap-1.5 text-white transition-all btn-study-chapter min-h-[38px]">
                Study <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        `;

        // Checkbox Mastered toggle
        const checkInput = card.querySelector('input[type="checkbox"]');
        checkInput.addEventListener('change', (e) => {
          const checked = e.target.checked;
          if (!appState.progress[chId]) appState.progress[chId] = { completed: false, quizScore: null };
          appState.progress[chId].completed = checked;
          saveState();
          renderSubjectView(subjectKey);
          updateDashboardStats();
          showToast(`Chapter "${chapter.name}" marked as ${checked ? 'completed' : 'incomplete'}.`, "info");
        });

        // Study launch
        const studyBtn = card.querySelector('.btn-study-chapter');
        studyBtn.addEventListener('click', () => {
          openThreePanelChapter(subjectKey, catKey, chKey);
        });

        chaptersGrid.appendChild(card);
      });

      catBox.appendChild(chaptersGrid);
      categoriesSection.appendChild(catBox);
    });

    container.appendChild(categoriesSection);
  }

  // ==========================================================================
  // DYNAMIC THREE-PANEL CONCEPT HUB NOTES GENERATOR
  // ==========================================================================
  function generateChapterNotes(subjectKey, categoryKey, chapterKey) {
    const subject = subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1);
    const category = categoryNames[categoryKey] || categoryKey;
    const chapter = window.eduPeakData[subjectKey]?.[categoryKey]?.[chapterKey];
    if (!chapter) return '';

    const subColors = {
      physics: '#06b6d4',
      chemistry: '#ec4899',
      biology: '#10b981',
      mathematics: '#f59e0b'
    };
    const color = subColors[subjectKey] || '#874dff';

    const svgDiagram = `
      <div class="w-full h-36 rounded-2xl bg-white/2 border border-white/5 relative overflow-hidden flex items-center justify-center select-none" aria-hidden="true">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5"></div>
        <svg class="w-full h-full text-cyan-400/20" viewBox="0 0 100 50">
          <circle cx="50" cy="25" r="15" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 2" />
          <path d="M10,25 Q50,5 90,25" fill="none" stroke="currentColor" stroke-width="0.5" />
          <path d="M10,25 Q50,45 90,25" fill="none" stroke="currentColor" stroke-width="0.5" />
          <line x1="50" y1="10" x2="50" y2="40" stroke="currentColor" stroke-width="0.5" />
        </svg>
        <div class="absolute text-[0.65rem] font-bold tracking-widest text-cyan-400/70 uppercase flex items-center gap-1.5"><i class="fa-solid fa-microscope"></i> Concept Structural Model</div>
      </div>
    `;

    if (chapter.notes) {
      const sourcedText = (chapter.notes.sourced && chapter.notes.sourced !== 'generated') 
        ? chapter.notes.sourced 
        : `Comprehensive syllabus coverage for CEE/NEET ${subject} (${category}). Focus on core equations, physical definitions, and edge cases.`;
      
      return `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <!-- Card 1: Theoretical Foundation -->
          <div class="glass-card p-5 space-y-3 border-t-2" style="border-top-color: #06b6d4;">
            <div class="flex items-center justify-between border-b border-white/5 pb-2.5">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> 1. Theoretical Foundation
              </h4>
              <span class="text-[0.62rem] text-cyan-400 font-mono font-semibold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">THEORY</span>
            </div>
            <p class="text-xs md:text-sm text-gray-300 leading-relaxed font-normal">
              ${chapter.notes.theoretical}
            </p>
          </div>
          
          <!-- Card 2: Key Framework & Derivations -->
          <div class="glass-card p-5 space-y-3 border-t-2" style="border-top-color: #874dff;">
            <div class="flex items-center justify-between border-b border-white/5 pb-2.5">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-brand-primary"></span> 2. Key Framework & Derivations
              </h4>
              <span class="text-[0.62rem] text-violet-400 font-mono font-semibold bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">FRAMEWORK</span>
            </div>
            <p class="text-xs md:text-sm text-gray-300 leading-relaxed font-normal">
              ${chapter.notes.framework}
            </p>
          </div>
          
          <!-- Card 3: MEC Exam Strategy & Common Traps -->
          <div class="glass-card p-5 space-y-3 border-t-2" style="border-top-color: #f59e0b;">
            <div class="flex items-center justify-between border-b border-white/5 pb-2.5">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span> 3. MEC Exam Strategy & Traps
              </h4>
              <span class="text-[0.62rem] text-amber-400 font-mono font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">HIGH-YIELD</span>
            </div>
            <p class="text-xs md:text-sm text-gray-300 leading-relaxed font-normal">
              ${chapter.notes.strategy}
            </p>
          </div>
          
          <!-- Card 4: High-Yield Reference / Diagram -->
          <div class="glass-card p-5 space-y-3 border-t-2" style="border-top-color: #10b981;">
            <div class="flex items-center justify-between border-b border-white/5 pb-2.5">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> 4. Textbook Reference & Model
              </h4>
              <span class="text-[0.62rem] text-emerald-400 font-mono font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">CONCEPT MODEL</span>
            </div>
            <p class="text-xs md:text-sm text-gray-300 leading-relaxed font-normal mb-2">
              ${sourcedText}
            </p>
            ${svgDiagram}
          </div>
        </div>
      `;
    }

    const name = chapter.name;
    const formulas = chapter.formulas;
    let formulasExplanation = "";
    if (formulas && formulas.length > 0) {
      formulasExplanation = ` Core governing relationship: <b>${formulas[0]}</b>. Secondary analytical relation: <b>${formulas[1] || formulas[0]}</b>.`;
    }

    return `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="glass-card p-5 space-y-3 border-t-2 border-cyan-500">
          <h4 class="text-sm font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">1. Theoretical Foundation</h4>
          <p class="text-xs md:text-sm text-gray-300 leading-relaxed">
            ${name} is a key topic in CEE ${subject} (${category}). Focus on fundamental definitions, microscopic models, and system properties.
          </p>
        </div>
        
        <div class="glass-card p-5 space-y-3 border-t-2 border-violet-500">
          <h4 class="text-sm font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">2. Key Framework & Derivations</h4>
          <p class="text-xs md:text-sm text-gray-300 leading-relaxed">
            ${formulasExplanation} Maintain SI units, sign conventions, and dimensional consistency across multi-step calculations.
          </p>
        </div>
        
        <div class="glass-card p-5 space-y-3 border-t-2 border-amber-500 md:col-span-2">
          <h4 class="text-sm font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">3. MEC Exam Strategy & Common Traps</h4>
          <p class="text-xs md:text-sm text-gray-300 leading-relaxed">
            Verify unit prefixes (micro/nano) and watch out for CEE -0.25 negative marking on speculative numerical guesses.
          </p>
        </div>
      </div>
    `;
  }

  function openThreePanelChapter(subjectKey, categoryKey, chapterKey) {
    activeDrilldown.subjectKey = subjectKey;
    activeDrilldown.categoryKey = categoryKey;
    activeDrilldown.chapterKey = chapterKey;

    document.getElementById('subject-main-syllabus-container').style.display = 'none';
    document.getElementById('drilldown-nav-header').style.display = 'block';

    const container = document.getElementById('chapter-drilldown-container');
    container.style.display = 'block';
    container.innerHTML = '';

    const subColors = {
      physics: '#06b6d4',
      chemistry: '#ec4899',
      biology: '#10b981',
      mathematics: '#f59e0b'
    };
    const color = subColors[subjectKey] || '#874dff';
    const subName = subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1);
    const catName = categoryNames[categoryKey] || categoryKey;
    const chapter = window.eduPeakData[subjectKey][categoryKey][chapterKey];

    const chId = `${subjectKey}-${categoryKey}-${chapterKey}`;
    const chProgress = appState.progress[chId] || { completed: false, quizScore: null };
    
    let quizProgressText = "Not attempted yet";
    let quizColorClass = "text-gray-400";
    if (chProgress.quizScore !== null) {
      quizProgressText = `Max Score: ${chProgress.quizScore}%`;
      quizColorClass = chProgress.quizScore >= 60 ? "text-emerald-400 font-bold" : "text-brand-warning font-bold";
    }

    // Top-to-bottom layout wrapper
    const layout = document.createElement('div');
    layout.className = 'max-w-6xl mx-auto space-y-8 pb-12';

    // --------------------------------------------------------------------------
    // 1. HERO HEADER SECTION (TOP BANNER & PROMINENT CTA)
    // --------------------------------------------------------------------------
    const heroCard = document.createElement('div');
    heroCard.className = 'glass-card p-6 md:p-8 space-y-6 relative overflow-hidden border-l-4 shadow-2xl';
    heroCard.style.borderLeftColor = color;

    const isCompleted = chProgress.completed;

    heroCard.innerHTML = `
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-6">
        <div class="space-y-2">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="badge text-[0.68rem] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-white" style="background-color: ${color}22; border: 1px solid ${color}44; color: ${color};">
              <i class="fa-solid fa-graduation-cap mr-1"></i> ${subName} &bull; ${catName}
            </span>
            <span class="badge badge-info text-[0.65rem] px-2 py-0.5 rounded flex items-center gap-1">
              <i class="fa-solid fa-book-open-reader"></i> Standard Syllabus
            </span>
          </div>
          <h1 class="text-2xl md:text-4xl font-black text-white font-heading tracking-tight leading-tight">${chapter.name}</h1>
          <p class="text-xs md:text-sm text-gray-400">Complete theoretical notes, key governing equations, and a 30-question CEE/NEET practice quiz.</p>
        </div>

        <!-- Mastery Checkbox Toggle -->
        <button id="btn-toggle-chapter-mastery" class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all select-none flex-shrink-0 text-xs font-bold ${
          isCompleted 
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20' 
            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
        }">
          <i class="${isCompleted ? 'fa-solid fa-circle-check text-base text-emerald-400' : 'fa-regular fa-circle text-base text-gray-500'}"></i>
          <span>${isCompleted ? 'Chapter Mastered' : 'Mark as Mastered'}</span>
        </button>
      </div>

      <!-- High-Contrast CTA & Quick Stats Bar -->
      <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
        <div class="flex items-center gap-3 flex-wrap">
          <div class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-200">
            <i class="fa-solid fa-list-check text-brand-primary text-sm"></i>
            <span><b>30</b> MCQs</span>
          </div>

          <div class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-200">
            <i class="fa-solid fa-clock text-amber-400 text-sm"></i>
            <span><b>100</b> Mins</span>
          </div>

          <div class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-200">
            <i class="fa-solid fa-shield-halved text-brand-danger text-sm"></i>
            <span><b>+1.0</b> / <b>-0.25</b> Marking</span>
          </div>

          <div class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold ${quizColorClass}">
            <i class="fa-solid fa-trophy text-amber-400 text-sm"></i>
            <span>${quizProgressText}</span>
          </div>
        </div>

        <!-- Prominent Start Quiz CTA Button -->
        <button id="btn-start-chapter-quiz-30" class="btn btn-primary px-8 py-4 text-sm md:text-base font-black bg-gradient-to-r from-brand-primary via-indigo-600 to-cyan-500 shadow-[0_4px_24px_rgba(135,77,255,0.4)] hover:shadow-[0_6px_28px_rgba(135,77,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-white rounded-xl flex-shrink-0 cursor-pointer">
          <i class="fa-solid fa-rocket text-base md:text-lg animate-bounce"></i>
          <span>Start Revision Quiz</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </button>
      </div>
    `;
    layout.appendChild(heroCard);

    // --------------------------------------------------------------------------
    // 2. CHAPTER COURSE NOTES SECTION (FULL WIDTH)
    // --------------------------------------------------------------------------
    const notesSection = document.createElement('div');
    notesSection.className = 'space-y-4';
    notesSection.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
        <h3 class="text-lg md:text-xl font-black text-white font-heading flex items-center gap-2.5">
          <i class="fa-solid fa-book-open" style="color: ${color};"></i>
          <span>Chapter Course Notes</span>
        </h3>
        <span class="badge text-[0.68rem] px-3 py-1 rounded-full font-bold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center gap-1.5 self-start sm:self-auto">
          <i class="fa-solid fa-shield-check"></i> Textbook-Sourced Syllabus
        </span>
      </div>
      
      <div>
        ${generateChapterNotes(subjectKey, categoryKey, chapterKey)}
      </div>
    `;
    layout.appendChild(notesSection);

    const supplement = window.CEE_ADVANCED_CONTENT?.[subjectKey + '/' + categoryKey + '/' + chapterKey];
    if (supplement) {
      const extra = document.createElement('section');
      extra.className = 'glass-card p-5 space-y-4 advanced-practice';
      const title = document.createElement('h3');
      title.className = 'text-lg font-bold text-white';
      title.textContent = 'Extended notes & worked CEE-style practice';
      extra.appendChild(title);
      const note = document.createElement('p');
      note.className = 'text-sm text-gray-300 leading-relaxed';
      note.textContent = supplement.note;
      extra.appendChild(note);
      const label = document.createElement('p');
      label.className = 'text-xs text-cyan-300';
      label.textContent = 'Original practice: intermediate and advanced. These additions are not verified past-paper questions.';
      extra.appendChild(label);
      supplement.questions.forEach((q, i) => {
        const problem = document.createElement('article');
        problem.className = 'border border-white/10 rounded-xl p-4 space-y-3';
        const prompt = document.createElement('p');
        prompt.className = 'text-sm font-semibold text-white';
        prompt.textContent = (i + 1) + '. ' + (q.difficulty === 'M' ? '[Intermediate] ' : '[Advanced] ') + q.question;
        problem.appendChild(prompt);
        q.options.forEach((option, index) => {
          const line = document.createElement('p');
          line.className = 'text-sm text-gray-300';
          line.textContent = String.fromCharCode(65 + index) + '. ' + option;
          problem.appendChild(line);
        });
        const solution = document.createElement('details');
        const reveal = document.createElement('summary');
        reveal.className = 'text-sm text-cyan-300 cursor-pointer py-2';
        reveal.textContent = 'Reveal answer & worked solution';
        const answer = document.createElement('p');
        answer.className = 'text-sm text-emerald-200 leading-relaxed';
        answer.textContent = 'Answer: ' + String.fromCharCode(65 + q.correct) + '. ' + q.options[q.correct] + '. ' + q.explanation;
        solution.append(reveal, answer); problem.appendChild(solution); extra.appendChild(problem);
      });
      const reference = document.createElement('a');
      reference.href = supplement.reference[1]; reference.target = '_blank'; reference.rel = 'noopener noreferrer';
      reference.className = 'text-xs text-cyan-300 underline block';
      reference.textContent = supplement.reference[0]; extra.appendChild(reference);
      const challenge = document.createElement('button');
      challenge.className = 'btn btn-primary py-3 px-5';
      challenge.textContent = 'Start chapter challenge practice';
      challenge.addEventListener('click', () => launch30QuestionQuiz(subjectKey, categoryKey, chapterKey, true));
      extra.appendChild(challenge);
      const help = document.createElement('p'); help.className = 'text-xs text-gray-400';
      help.textContent = 'Timed chapter practice with worked answers. Challenge attempts do not change chapter-mastery scores.';
      extra.appendChild(help); layout.appendChild(extra);
    }


    // --------------------------------------------------------------------------
    // 3. KEY FORMULAS SECTION (FULL WIDTH GRID)
    // --------------------------------------------------------------------------
    const formulasSection = document.createElement('div');
    formulasSection.className = 'space-y-4';

    let formulasGridHTML = "";
    if (chapter.formulas && chapter.formulas.length > 0) {
      chapter.formulas.forEach((f, idx) => {
        formulasGridHTML += `
          <div class="flex flex-col gap-2 p-4 bg-[#111625]/80 rounded-2xl border border-white/5 shadow-inner group relative cursor-pointer hover:border-brand-primary/40 hover:bg-[#111625] transition-all" title="Double click to copy equation">
            <div class="flex items-center justify-between">
              <span class="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                <i class="fa-solid fa-square-root-variable" style="color: ${color};"></i> Formula #${idx + 1}
              </span>
              <span class="text-[0.62rem] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <i class="fa-regular fa-copy"></i> Copy
              </span>
            </div>
            <span class="text-sm md:text-base font-black font-mono tracking-wide text-center text-white my-1 select-all group-hover:text-cyan-300 transition-colors">${f}</span>
          </div>
        `;
      });
    } else {
      formulasGridHTML = `<div class="col-span-full p-6 glass-card text-center text-xs text-gray-400">No formula list indexed for this chapter.</div>`;
    }

    formulasSection.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
        <h3 class="text-lg md:text-xl font-black text-white font-heading flex items-center gap-2.5">
          <i class="fa-solid fa-calculator" style="color: ${color};"></i>
          <span>Key Formulas & Governing Equations</span>
        </h3>
        <span class="text-xs text-gray-400 font-medium">Double-click any box to copy equation</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${formulasGridHTML}
      </div>
    `;
    layout.appendChild(formulasSection);

    container.appendChild(layout);

    // Bind Quiz Start button
    document.getElementById('btn-start-chapter-quiz-30').addEventListener('click', () => {
      launch30QuestionQuiz(subjectKey, categoryKey, chapterKey);
    });

    // Bind Mastery Toggle button
    document.getElementById('btn-toggle-chapter-mastery').addEventListener('click', () => {
      const currentStatus = !!(appState.progress[chId] && appState.progress[chId].completed);
      const newStatus = !currentStatus;
      
      if (!appState.progress[chId]) appState.progress[chId] = {};
      appState.progress[chId].completed = newStatus;
      saveAppState();

      // Re-render chapter drilldown to update UI
      openThreePanelChapter(subjectKey, categoryKey, chapterKey);
    });
  }

  // Back trigger to subjects view
  document.getElementById('btn-back-to-subject').addEventListener('click', () => {
    document.getElementById('drilldown-nav-header').style.display = 'none';
    document.getElementById('chapter-drilldown-container').style.display = 'none';
    document.getElementById('subject-main-syllabus-container').style.display = 'block';
    renderSubjectView(activeDrilldown.subjectKey);
  });

  // ==========================================================================
  // PROCEDURAL QUESTION COMPILER (DYNAMIC GENERATION OF 30 MCQS PER CHAPTER)
  // ==========================================================================
  const LETTERS_MAP = ['A', 'B', 'C', 'D'];
  function ensureQuestionDataStructure(q) {
    if (!q) return q;
    if (q.correct !== undefined && typeof q.correct === 'number') {
      q.correctAnswer = LETTERS_MAP[q.correct] || 'A';
    } else if (typeof q.correctAnswer === 'string') {
      const idx = LETTERS_MAP.indexOf(q.correctAnswer.toUpperCase());
      q.correct = idx !== -1 ? idx : 0;
      q.correctAnswer = q.correctAnswer.toUpperCase();
    } else {
      q.correct = 0;
      q.correctAnswer = 'A';
    }
    return q;
  }

  /**
   * Shuffles a question's options array in place and remaps q.correct /
   * q.correctAnswer to the new position of the correct option. This runs
   * fresh every time a quiz/exam is compiled (not baked into data.js /
   * questions.js), so option order — and therefore the correct answer's
   * A/B/C/D position — is randomized on every load and every retake,
   * even for questions authored with a fixed correct index (e.g. 0/"A").
   */
  function shuffleQuestionOptions(q) {
    if (!q || !Array.isArray(q.options) || q.options.length < 2) return q;
    ensureQuestionDataStructure(q);

    const correctOptionText = q.options[q.correct];
    const indices = q.options.map((_, i) => i);

    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    q.options = indices.map(i => q.options[i]);
    q.correct = q.options.indexOf(correctOptionText);
    q.correctAnswer = LETTERS_MAP[q.correct] || 'A';

    return q;
  }

  function compile30Questions(subjectKey, categoryKey, chapterKey) {
    const subData = window.eduPeakData[subjectKey];
    const category = subData[categoryKey];
    const chapter = category[chapterKey];
    
    if (!chapter.quiz) chapter.quiz = [];
    if (chapter.quiz.length >= 30) {
      chapter.quiz.forEach(ensureQuestionDataStructure);
      return chapter.quiz;
    }
    
    const bankQuestions = (window.EDUPEAK_QUESTION_BANK?.[subjectKey] || []).filter(q => q.chapter === chapter.name);
    const seenQuestions = new Set(chapter.quiz.map(q => q.question));
    const compiled = [...chapter.quiz, ...bankQuestions.filter(q => !seenQuestions.has(q.question)).map(q => ({ ...q, options: [...q.options] }))].slice(0, 30);
    const name = chapter.name;
    const formulas = chapter.formulas || ["Basic relation"];
    const f0 = formulas[0] || "Basic relation";
    const f1 = formulas[1] || formulas[0] || "Basic relation";
    const f2 = formulas[2] || formulas[0] || "Basic relation";
    const catName = categoryNames[categoryKey] || categoryKey;
    const subject = subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1);
    
    let qId = compiled.length + 1;

    // Archetype generator templates
    const archetypes = [
      (i) => ({
        id: i,
        type: "Conceptual",
        question: `Which of the following equations representing a core relationship is directly studied in "${name}"?`,
        options: [`${f0}`, `F = m * c^2 * ${i}`, `PV = nRT * ${i}`, `E_n = -13.6 * ${i} eV`],
        correct: 0,
        correctAnswer: "A",
        explanation: `The primary equation representing the physical model for "${name}" is: ${f0}.`
      }),
      (i) => ({
        id: i,
        type: "Numerical",
        question: `In a CEE exam numerical context for "${name}", if the main parameter of expression '${f0}' is scaled by a factor of 2, how will the output be affected?`,
        options: ["It is scaled by a factor of 2", "It increases by a factor of 4", "It scales down to 0.5", "It remains constant"],
        correct: 0,
        correctAnswer: "A",
        explanation: `The equation '${f0}' demonstrates direct linear proportionality, so scaling the variable by 2 doubles the outcome.`
      }),
      (i) => ({
        id: i,
        type: "Conceptual",
        question: `To which specific division of the entrance exam syllabus is "${name}" categorized?`,
        options: [`${catName}`, "Applied Dynamics", "Introductory Biochemistry", "Analytical Calculus"],
        correct: 0,
        correctAnswer: "A",
        explanation: `In standard CEE mock outlines, "${name}" is grouped under ${catName}.`
      }),
      (i) => ({
        id: i,
        type: "Conceptual",
        question: `Which of the following assertions is scientifically CORRECT regarding the concepts of "${name}"?`,
        options: [
          `The values conform to physical conservation principles modeled by ${f0}.`,
          `The formulas are purely theoretical and are never tested numerically.`,
          `The relation ${f0} only applies in static empty vacuums.`,
          `The constants are variable and fluctuate during the cardiac cycle.`
        ],
        correct: 0,
        correctAnswer: "A",
        explanation: `The quantitative framework for "${name}" relies on the conservation laws modeled by: ${f0}.`
      }),
      (i) => ({
        id: i,
        type: "Conceptual",
        question: `When practicing questions in "${name}", what is a common pitfall that leads to negative marking (-0.25)?`,
        options: [
          "Failing to convert initial values to standard SI units",
          "Confusing the positive and negative signs of the equation",
          "Overlooking critical boundary limits of constants",
          "All of the above"
        ],
        correct: 3,
        correctAnswer: "D",
        explanation: `Exam metrics show students commonly lose marks in "${name}" due to SI unit issues, sign errors, and formula boundaries.`
      }),
      (i) => ({
        id: i,
        type: "Numerical",
        question: `Consider the relation '${f1}' in the syllabus of "${name}". If the physical system boundary is expanded, which of the following is true?`,
        options: [
          "The system shifts to counteract the external stress.",
          "The variables immediately diverge to infinity.",
          "The constants scale up by a factor of 100.",
          "The system shuts down due to feedback loops."
        ],
        correct: 0,
        correctAnswer: "A",
        explanation: `Equation '${f1}' governs system equilibria. Changing boundary states shifts parameters to restore stability.`
      }),
      (i) => ({
        id: i,
        type: "Conceptual",
        question: `Why is committing the formula sheet of "${name}" to memory considered highly useful for CEE preparation?`,
        options: [
          "Because questions directly target numerical ratios and application of these equations.",
          "Because calculators are permitted during the CEE test session.",
          "Because questions are purely qualitative and do not require calculations.",
          "Because the chapter carries 50% weightage in the final blueprint."
        ],
        correct: 0,
        correctAnswer: "A",
        explanation: `Exam analysis shows questions in "${name}" are highly structured and resolve quickly by applying equations like: ${f0}.`
      }),
      (i) => ({
        id: i,
        type: "Numerical",
        question: `Using the formula '${f2}' for "${name}", if the initial variable measures ${i * 2} units and the scaling factor is 0.5, what is the output?`,
        options: [
          `Exactly ${(i * 2 * 0.5).toFixed(1)} units`,
          `Exactly ${(i * 2 + 10).toFixed(1)} units`,
          `Exactly ${(i * 2 - 5).toFixed(1)} units`,
          `Zero units`
        ],
        correct: 0,
        correctAnswer: "A",
        explanation: `Substituting the values into the equation '${f2}' yields: ${i * 2} * 0.5 = ${(i * 2 * 0.5).toFixed(1)} units.`
      }),
      (i) => ({
        id: i,
        type: "Conceptual",
        question: `Which of the following best defines the conceptual significance of the expression '${f0}' in "${name}"?`,
        options: [
          "It represents a unified model for solving CEE entrance numericals.",
          "It is a newly introduced formula with no past questions.",
          "It only applies to ideal scenarios and has no clinical significance.",
          "It has been rendered obsolete by modern computing algorithms."
        ],
        correct: 0,
        correctAnswer: "A",
        explanation: `The relation defined by '${f0}' constitutes a core standard syllabus milestone in ${subject} - ${catName}.`
      }),
      (i) => ({
        id: i,
        type: "Conceptual",
        question: `To optimize the performance score on the timed revision quiz for "${name}", an aspirant must prioritize:`,
        options: [
          "Reviewing equations, understanding variables, and analyzing concept diagrams",
          "Attempting the quiz immediately without reading the concept notes",
          "Selecting options randomly to speed up timer execution",
          "Skipping all numerical questions and focusing only on definitions"
        ],
        correct: 0,
        correctAnswer: "A",
        explanation: `The ideal prep path for "${name}" involves studying the formulas, concept notes, and doing practice quizzes.`
      })
    ];

    while (compiled.length < 30) {
      const idx = (compiled.length - chapter.quiz.length) % archetypes.length;
      const generator = archetypes[idx];
      compiled.push(generator(qId++));
    }

    compiled.forEach(ensureQuestionDataStructure);
    return compiled;
  }

  // ==========================================================================
  // TIMED QUIZ CONTROLLER (30 QUESTIONS, 100 MINUTES, NEGATIVE PENALTY)
  // ==========================================================================
  function launch30QuestionQuiz(subjectKey, categoryKey, chapterKey, challengeMode = false) {
    const chapter = window.eduPeakData[subjectKey][categoryKey][chapterKey];
    if (!chapter) return;

    activeQuiz.chapterId = `${subjectKey}-${categoryKey}-${chapterKey}`;
    activeQuiz.subjectKey = subjectKey;
    activeQuiz.categoryKey = categoryKey;
    activeQuiz.chapterKey = chapterKey;
    // Clone the compiled pool (it may be a cached array shared across attempts)
    // and shuffle each question's option order fresh for this attempt/retake,
    // so the correct answer's A/B/C/D position isn't fixed by the source data.
    activeQuiz.challengeMode = challengeMode;
    const challengePool = (window.EDUPEAK_QUESTION_BANK?.[subjectKey] || []).filter(q => q.chapter === chapter.name).map(q => formatRealQ(q, subjectKey));
    const quizPool = challengeMode ? shuffleArray(challengePool) : compile30Questions(subjectKey, categoryKey, chapterKey);
    activeQuiz.questions = quizPool
      .map(q => shuffleQuestionOptions({ ...q, options: [...q.options] }));
    activeQuiz.currentIndex = 0;
    activeQuiz.answers = {};
    activeQuiz.score = 0;
    activeQuiz.correctCount = 0;
    activeQuiz.incorrectCount = 0;
    activeQuiz.timeRemaining = challengeMode ? activeQuiz.questions.length * 90 : 100 * 60; // 100 minutes
    activeQuiz.submitted = false;

    navigateTo('quiz-simulator');

    if (activeQuiz.timerInterval) clearInterval(activeQuiz.timerInterval);
    activeQuiz.timerInterval = setInterval(() => {
      activeQuiz.timeRemaining--;
      if (activeQuiz.timeRemaining <= 0) {
        clearInterval(activeQuiz.timerInterval);
        submitChapterQuizForGrading(true);
      }
    }, 1000);

    renderActive30QQuizQuestion();
  }

  function renderActive30QQuizQuestion() {
    const consoleBox = document.getElementById('quiz-interactive-console');
    if (!consoleBox) return;
    consoleBox.innerHTML = '';

    const currentQ = ensureQuestionDataStructure(activeQuiz.questions[activeQuiz.currentIndex]);
    const progressPercent = Math.round((activeQuiz.currentIndex / activeQuiz.questions.length) * 100);

    const mins = Math.floor(activeQuiz.timeRemaining / 60);
    const secs = activeQuiz.timeRemaining % 60;
    const timeString = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    let optionsHTML = "";
    const letters = ['A', 'B', 'C', 'D'];
    const hasChosen = activeQuiz.answers[activeQuiz.currentIndex] !== undefined;

    currentQ.options.forEach((opt, index) => {
      let optionClass = "";
      let iconHTML = "";

      if (hasChosen) {
        const userChoice = activeQuiz.answers[activeQuiz.currentIndex];
        if (index === currentQ.correct) {
          optionClass = "correct";
          iconHTML = `<i class="fa-solid fa-circle-check option-result-icon"></i>`;
        } else if (index === userChoice) {
          optionClass = "incorrect";
          iconHTML = `<i class="fa-solid fa-circle-xmark option-result-icon"></i>`;
        }
      }

      optionsHTML += `
        <button class="quiz-option ${optionClass}" data-option-index="${index}" ${hasChosen ? 'disabled' : ''}>
          <span class="flex items-center">
            <span class="option-letter">${letters[index]}</span>
            <span>${opt}</span>
          </span>
          ${iconHTML}
        </button>
      `;
    });

    let explanationHTML = "";
    if (hasChosen) {
      explanationHTML = `
        <div class="quiz-explanation-box">
          <div class="quiz-explanation-title">
            <i class="fa-solid fa-circle-info"></i>
            <span>Solution Breakdown</span>
          </div>
          <p class="quiz-explanation-text">${currentQ.explanation}</p>
        </div>
      `;
    }

    const isLast = activeQuiz.currentIndex === activeQuiz.questions.length - 1;
    let actionBtnHTML = "";
    if (hasChosen) {
      if (isLast) {
        actionBtnHTML = `<button class="btn btn-danger py-2.5 px-6 font-bold" id="btn-quiz-submit"><i class="fa-solid fa-flag-checkered"></i> Submit Quiz</button>`;
      } else {
        actionBtnHTML = `<button class="btn btn-primary py-2.5 px-6 font-bold" id="btn-quiz-next">Next <i class="fa-solid fa-angle-right"></i></button>`;
      }
    }

    let paletteHTML = "";
    activeQuiz.questions.forEach((qObj, idx) => {
      ensureQuestionDataStructure(qObj);
      const isAns = activeQuiz.answers[idx] !== undefined;
      let palClass = "bg-slate-800 border-white/5 text-gray-500";
      
      if (idx === activeQuiz.currentIndex) {
        palClass = "bg-brand-primary border-brand-primary text-white font-extrabold ring-2 ring-white/20";
      } else if (isAns) {
        const uAns = activeQuiz.answers[idx];
        if (uAns === qObj.correct) {
          palClass = "bg-emerald-500/20 border-emerald-500/40 text-emerald-400 font-bold";
        } else {
          palClass = "bg-red-500/20 border-red-500/40 text-red-400 font-bold";
        }
      }

      paletteHTML += `
        <button class="w-8 h-8 rounded-lg border text-xs font-heading flex items-center justify-center transition-all ${palClass}" data-goto-index="${idx}">
          ${idx + 1}
        </button>
      `;
    });

    const quizBox = document.createElement('div');
    quizBox.className = "space-y-6";
    quizBox.innerHTML = `
      <div class="flex justify-between items-center bg-[#0c1220] p-4 rounded-2xl border border-white/5">
        <div class="flex items-center gap-2 font-mono font-bold text-brand-warning">
          <i class="fa-regular fa-clock"></i> <span>${timeString}</span>
        </div>
        <span class="badge badge-primary text-[0.62rem]">Chapter Quiz</span>
        <span class="text-xs font-black text-gray-400">Score: ${activeQuiz.score.toFixed(2)}</span>
      </div>

      <div class="quiz-progress-bar-bg" style="height: 6px; margin: 0;">
        <div class="quiz-progress-bar-filled" style="width: ${progressPercent}%;"></div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div class="lg:col-span-2 space-y-6">
          <div class="space-y-1">
            <span class="text-xs font-bold text-brand-primary uppercase tracking-wider">${currentQ.type} Question ${activeQuiz.currentIndex + 1} of ${activeQuiz.questions.length}</span>
            <h3 class="text-lg md:text-xl font-extrabold text-gray-200 leading-snug">${currentQ.question}</h3>
          </div>
          <div class="quiz-options-list flex flex-col gap-3">
            ${optionsHTML}
          </div>
          ${explanationHTML}
        </div>
        
        <div class="glass-card p-4 space-y-4">
          <h4 class="text-xs font-black text-gray-200 uppercase tracking-widest font-heading border-b border-white/5 pb-2">Questions Grid</h4>
          <div class="grid grid-cols-5 gap-2 justify-items-center">
            ${paletteHTML}
          </div>
        </div>
      </div>
      
      <div class="flex justify-between items-center border-t border-white/5 pt-4 mt-6">
        <button class="btn btn-secondary py-2 px-5 text-xs font-bold" id="btn-quiz-prev" ${activeQuiz.currentIndex === 0 ? 'disabled' : ''}>
          <i class="fa-solid fa-angle-left"></i> Previous
        </button>
        ${actionBtnHTML}
      </div>
    `;

    consoleBox.appendChild(quizBox);

    // Bind choices
    const optionButtons = quizBox.querySelectorAll('.quiz-option');
    optionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const oIdx = parseInt(btn.getAttribute('data-option-index'));
        activeQuiz.answers[activeQuiz.currentIndex] = oIdx;
        
        if (oIdx === currentQ.correct) {
          activeQuiz.score += 1.0;
          activeQuiz.correctCount++;
        } else {
          activeQuiz.score -= 0.25;
          activeQuiz.incorrectCount++;
        }

        renderActive30QQuizQuestion();
      });
    });

    // Navigation triggers
    const prevBtn = quizBox.querySelector('#btn-quiz-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (activeQuiz.currentIndex > 0) {
          activeQuiz.currentIndex--;
          renderActive30QQuizQuestion();
        }
      });
    }

    const nextBtn = quizBox.querySelector('#btn-quiz-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (activeQuiz.currentIndex < activeQuiz.questions.length - 1) {
          activeQuiz.currentIndex++;
          renderActive30QQuizQuestion();
        }
      });
    }

    const submitBtn = quizBox.querySelector('#btn-quiz-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        submitChapterQuizForGrading();
      });
    }

    const palButtons = quizBox.querySelectorAll('[data-goto-index]');
    palButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        activeQuiz.currentIndex = parseInt(btn.getAttribute('data-goto-index'));
        renderActive30QQuizQuestion();
      });
    });
  }

  function submitChapterQuizForGrading(forced = false) {
    if (activeQuiz.timerInterval) clearInterval(activeQuiz.timerInterval);
    activeQuiz.submitted = true;

    const attemptedCount = activeQuiz.correctCount + activeQuiz.incorrectCount;
    const accuracy = attemptedCount > 0 ? Math.round((activeQuiz.correctCount / attemptedCount) * 100) : 0;
    const finalDisplayScore = Math.max(0, activeQuiz.score);
    const scorePercentage = Math.round((finalDisplayScore / activeQuiz.questions.length) * 100);

    if (!activeQuiz.challengeMode) {
    if (!appState.progress[activeQuiz.chapterId]) {
      appState.progress[activeQuiz.chapterId] = { completed: false, quizScore: null };
    }
    
    const previousMax = appState.progress[activeQuiz.chapterId].quizScore;
    if (previousMax === null || scorePercentage > previousMax) {
      appState.progress[activeQuiz.chapterId].quizScore = scorePercentage;
    }

    if (scorePercentage >= 50) {
      appState.progress[activeQuiz.chapterId].completed = true;
    }

    }
    saveState();
    updateDashboardStats();

    const consoleBox = document.getElementById('quiz-interactive-console');
    if (!consoleBox) return;
    consoleBox.innerHTML = '';

    const passed = scorePercentage >= 50;

    const results = document.createElement('div');
    results.className = "text-center space-y-6 max-w-xl mx-auto py-4";
    results.innerHTML = `
      <div class="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-3xl shadow-inner ${passed ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-amber-500/10 border border-amber-500/20 text-brand-warning'}">
        <i class="fa-solid ${passed ? 'fa-trophy' : 'fa-circle-exclamation'} animate-bounce"></i>
      </div>
      
      <div class="space-y-1">
        <h2 class="text-xl md:text-2xl font-black font-heading text-white">${passed ? 'Mastery Verified!' : 'Practice Recommended'}</h2>
        <p class="text-xs text-gray-500">Timer evaluation finalized incorporating MEC marking rules.</p>
      </div>

      <div class="text-4xl md:text-5xl font-black font-heading tracking-tight" style="color: ${passed ? '#10b981' : '#f59e0b'};">
        ${activeQuiz.score.toFixed(2)} <span class="text-xs text-gray-500 font-normal">/ ${activeQuiz.questions.length}.0</span>
      </div>
      <span class="badge ${passed ? 'badge-success' : 'badge-warning'} text-[0.62rem]">${passed ? 'PASSED' : 'RETRY'}</span>
      
      <div class="bg-white/2 rounded-2xl border border-white/5 overflow-hidden">
        <div class="flex justify-between p-3.5 border-b border-white/5 text-xs font-semibold text-gray-400">
          <span>Correct Answers</span>
          <span class="text-white">${activeQuiz.correctCount}</span>
        </div>
        <div class="flex justify-between p-3.5 border-b border-white/5 text-xs font-semibold text-gray-400">
          <span>Incorrect Penalties</span>
          <span class="text-brand-danger">${activeQuiz.incorrectCount}</span>
        </div>
        <div class="flex justify-between p-3.5 text-xs font-semibold text-gray-400">
          <span>Accuracy Rate</span>
          <span class="text-brand-info font-black">${accuracy}%</span>
        </div>
      </div>
      
      <div class="flex gap-3 justify-center">
        <button class="btn btn-secondary py-2.5 px-6 font-bold" id="btn-quiz-retry-grade" style="flex:1;">
          <i class="fa-solid fa-arrows-rotate"></i> Retry Quiz
        </button>
        <button class="btn btn-primary bg-gradient-to-r from-brand-primary to-indigo-600 shadow-[0_4px_12px_rgba(135,77,255,0.15)] font-bold py-2.5 px-6" id="btn-quiz-exit-grade" style="flex:1;">
          Study Workspace
        </button>
      </div>
    `;

    consoleBox.appendChild(results);

    document.getElementById('btn-quiz-retry-grade').addEventListener('click', () => {
      launch30QuestionQuiz(activeQuiz.subjectKey, activeQuiz.categoryKey, activeQuiz.chapterKey, activeQuiz.challengeMode);
    });

    document.getElementById('btn-quiz-exit-grade').addEventListener('click', () => {
      navigateTo(activeQuiz.subjectKey);
      openThreePanelChapter(activeQuiz.subjectKey, activeQuiz.categoryKey, activeQuiz.chapterKey);
    });
  }

  document.getElementById('btn-exit-quiz-immediate').addEventListener('click', () => {
    if (activeQuiz.timerInterval) clearInterval(activeQuiz.timerInterval);
    navigateTo(activeQuiz.subjectKey);
    openThreePanelChapter(activeQuiz.subjectKey, activeQuiz.categoryKey, activeQuiz.chapterKey);
  });

  // ==========================================================================
  // MEC NEPAL CEE MOCK EXAM ENGINE (200 QUESTIONS, 3 HOURS)
  // ==========================================================================
  function renderMockHistory() {
    const tableContainer = document.getElementById('mock-history-container');
    if (!tableContainer) return;
    tableContainer.innerHTML = '';

    if (!appState.mockTests || appState.mockTests.length === 0) {
      tableContainer.innerHTML = `
        <div class="text-center py-8 text-gray-500 text-sm">
          <i class="fa-solid fa-list-check text-2xl mb-2 text-gray-600 block"></i>
          <span>No historical mock exam reports found. Start a new session.</span>
        </div>
      `;
      return;
    }

    let rowsHTML = "";
    [...appState.mockTests].reverse().forEach(attempt => {
      const scoreColor = attempt.score >= 50 ? 'text-emerald-400' : 'text-brand-danger';
      const subBadges = attempt.subjects.map(s => `<span class="badge badge-info text-[0.58rem] py-0 px-2.5">${s}</span>`).join(' ');

      rowsHTML += `
        <tr class="border-b border-white/5 hover:bg-white/1 font-semibold text-xs md:text-sm">
          <td class="py-4 px-3">${attempt.date}</td>
          <td class="py-4 px-3">${subBadges}</td>
          <td class="py-4 px-3 font-mono">${attempt.correct}/${attempt.total}</td>
          <td class="py-4 px-3 text-[0.72rem] text-brand-danger font-mono font-bold">-${(attempt.incorrect * 0.25).toFixed(2)}</td>
          <td class="py-4 px-3 text-base font-black ${scoreColor}">${attempt.score.toFixed(2)}%</td>
          <td class="py-4 px-3"><i class="fa-regular fa-clock"></i> ${attempt.timeTaken}</td>
        </tr>
      `;
    });

    tableContainer.innerHTML = `
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="border-b border-white/5 text-[0.7rem] uppercase tracking-wider text-gray-500">
            <th class="py-3 px-3">Date</th>
            <th class="py-3 px-3">Blueprint</th>
            <th class="py-3 px-3">Correct</th>
            <th class="py-3 px-3">Penalty</th>
            <th class="py-3 px-3">CEE Score</th>
            <th class="py-3 px-3">Time Spent</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHTML}
        </tbody>
      </table>
    `;
  }

  const mockStartBtn = document.getElementById('btn-start-mock-simulation');
  if (mockStartBtn) {
    mockStartBtn.addEventListener('click', launchCEEMockExamSimulation);
  }

  function launchCEEMockExamSimulation() {
    closeMobileDrawer();            /* ✅ ADD THIS LINE */
    compileCEE200QuestionQueue();

    if (activeExam.questions.length !== 200) {
      showToast("Could not pool exactly 200 blueprint questions.", "danger");
      return;
    }

    activeExam.currentIndex = 0;
    activeExam.answers = {};
    activeExam.marked = {};
    activeExam.visited = { 0: true };
    activeExam.totalDuration = 3 * 3600;
    activeExam.timeRemaining = 3 * 3600;
    
    activeExam.subjectStats = {
      physics: { attempted: 0, correct: 0, total: 50 },
      chemistry: { attempted: 0, correct: 0, total: 50 },
      biology: { attempted: 0, correct: 0, total: 80 },
      mentalAgility: { attempted: 0, correct: 0, total: 20 }
    };

    launchCEEMockTimer();

    const workspace = document.getElementById('mock-exam-simulation-workspace');
    workspace.style.display = 'flex';

    renderLiveMockQuestion();
    renderPaletteSidebarGrid();

    showToast("Timed 200 MCQ CEE Mock Exam has started!", "success");
  }

  function compileSubjectQuestionPool(subjectKey) {
    const sub = window.eduPeakData[subjectKey];
    let pool = [];

    Object.keys(sub).forEach(catKey => {
      const cat = sub[catKey];
      Object.keys(cat).forEach(chKey => {
        const compiled30 = compile30Questions(subjectKey, catKey, chKey);
        compiled30.forEach(q => {
          pool.push({
            subject: subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1),
            question: q.question,
            options: q.options,
            correct: q.correct,
            explanation: q.explanation,
            chapterName: cat[chKey].name,
            chapterKey: chKey,
            categoryKey: catKey
          });
        });
      });
    });

    return pool;
  }

  /**
   * Converts a real bank question object into the exam question format.
   */
  /**
   * Converts a real bank question object into the exam question format.
   */
  function formatRealQ(q, subKey) {
    const formatted = {
      subject:     q.subject,
      type:        q.subject,
      subKey:      subKey,
      question:    q.question,
      options:     q.options,
      correct:     q.correct !== undefined ? q.correct : 0,
      explanation: q.explanation,
      chapterName: q.chapter || q.subject,
      difficulty:  q.difficulty || 'M',
      id:          q.id
    };
    return ensureQuestionDataStructure(formatted);
  }

  /**
   * Pulls questions from EDUPEAK_QUESTION_BANK (real exam Qs), shuffles,
   * and if needed pads with template-generated questions to hit the target count.
   * Enforces 40% Medium / 60% Hard ratio.
   */
  function compileRealSubjectPool(subKey, targetCount) {
    const QB = window.EDUPEAK_QUESTION_BANK;
    const bankKey = subKey; // 'physics' | 'chemistry' | 'biology' | 'mentalAgility'

    let realPool = [];
    if (QB && QB[bankKey] && QB[bankKey].length) {
      realPool = shuffleArray([...QB[bankKey]]).map(q => formatRealQ(q, subKey));
    }

    // If we have enough real questions, enforce 40M/60H split from them
    const mediumTarget = Math.round(targetCount * 0.4);
    const hardTarget   = targetCount - mediumTarget;

    const medium = realPool.filter(q => q.difficulty === 'M');
    const hard   = realPool.filter(q => q.difficulty === 'H');

    let selected = [
      ...medium.slice(0, mediumTarget),
      ...hard.slice(0, hardTarget)
    ];

    // Pad with remaining questions if one category runs out
    if (selected.length < targetCount) {
      const remaining = realPool.filter(q => !selected.includes(q));
      selected = [...selected, ...remaining.slice(0, targetCount - selected.length)];
    }

    // If real bank still short, pad with template-generated questions
    if (selected.length < targetCount && subKey !== 'mentalAgility') {
      const templatePool = compileSubjectQuestionPool(subKey);
      const padQs = shuffleArray(templatePool).slice(0, targetCount - selected.length).map(q => ({
        ...q, type: subKey.charAt(0).toUpperCase() + subKey.slice(1), subKey, difficulty: 'M'
      }));
      selected = [...selected, ...padQs];
    }

    return selected.slice(0, targetCount);
  }

  function compileCEE200QuestionQueue() {
    activeExam.questions = [];

    const finalPhysics   = compileRealSubjectPool('physics',   50);
    const finalChemistry = compileRealSubjectPool('chemistry', 50);
    const finalBiology   = compileRealSubjectPool('biology',   80);

    // Mental Agility: use real bank (20 Qs) + pad from old eduPeakData if needed
    const QB = window.EDUPEAK_QUESTION_BANK;
    let matPool = [];
    if (QB && QB.mentalAgility && QB.mentalAgility.length) {
      matPool = shuffleArray([...QB.mentalAgility]).map(q => formatRealQ(q, 'mentalAgility'));
    }
    // Pad from legacy data if needed
    const legacyMAT = window.eduPeakData.mentalAgility || [];
    let matIndex = 0;
    while (matPool.length < 20 && legacyMAT.length > 0) {
      const baseline = legacyMAT[matIndex % legacyMAT.length];
      matPool.push(ensureQuestionDataStructure({
        subject: 'Mental Agility', type: 'Mental Agility', subKey: 'mentalAgility',
        question: baseline.question, options: [...baseline.options],
        correct: baseline.correct, explanation: baseline.explanation,
        chapterName: 'Logical Reasoning', difficulty: 'M'
      }));
      matIndex++;
    }
    const finalMAT = matPool.slice(0, 20);

    activeExam.questions = [
      ...finalPhysics.map(q   => ensureQuestionDataStructure({ ...q, type: 'Physics',        subKey: 'physics'       })),
      ...finalChemistry.map(q => ensureQuestionDataStructure({ ...q, type: 'Chemistry',      subKey: 'chemistry'     })),
      ...finalBiology.map(q   => ensureQuestionDataStructure({ ...q, type: 'Biology',        subKey: 'biology'       })),
      ...finalMAT.map(q       => ensureQuestionDataStructure({ ...q, type: 'Mental Agility', subKey: 'mentalAgility' }))
    ];

    // Shuffle each question's option order fresh for this exam attempt, so
    // the correct answer's A/B/C/D position is randomized every time the
    // mock exam is launched/retaken, regardless of how it's positioned
    // in the source question bank.
    activeExam.questions = activeExam.questions.map(q =>
      shuffleQuestionOptions({ ...q, options: [...q.options] })
    );
  }

  function launchCEEMockTimer() {
    if (activeExam.timerInterval) clearInterval(activeExam.timerInterval);
    const timeDisplay = document.getElementById('exam-time-string');
    const timerBox = document.getElementById('exam-live-countdown-timer');
    timerBox.classList.remove('warning');

    activeExam.timerInterval = setInterval(() => {
      activeExam.timeRemaining--;

      const hrs = Math.floor(activeExam.timeRemaining / 3600);
      const mins = Math.floor((activeExam.timeRemaining % 3600) / 60);
      const secs = activeExam.timeRemaining % 60;

      timeDisplay.textContent = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

      if (activeExam.timeRemaining < 600) {
        timerBox.classList.add('warning');
      }

      if (activeExam.timeRemaining <= 0) {
        clearInterval(activeExam.timerInterval);
        submitMockExamForCEEGrading(true);
      }
    }, 1000);
  }

  function renderLiveMockQuestion() {
    const qSub = document.getElementById('exam-live-q-subject');
    const qIndex = document.getElementById('exam-live-q-index');
    const qContent = document.getElementById('exam-live-q-content');
    const optionsBox = document.getElementById('exam-live-options-container');

    const currentQ = ensureQuestionDataStructure(activeExam.questions[activeExam.currentIndex]);
    
    const subColors = {
      physics: '#06b6d4',
      chemistry: '#ec4899',
      biology: '#10b981',
      mentalAgility: '#eab308'
    };
    const color = subColors[currentQ.subKey] || '#874dff';

    qSub.textContent = currentQ.type;
    qSub.style.color = color;
    qIndex.textContent = `Question ${activeExam.currentIndex + 1} of 200`;
    qContent.textContent = currentQ.question;

    optionsBox.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    const hasAnswered = activeExam.answers[activeExam.currentIndex] !== undefined;
    const userAnswer = activeExam.answers[activeExam.currentIndex];

    currentQ.options.forEach((opt, index) => {
      const selected = userAnswer === index;

      let stateClass = '';
      let iconHTML = '';

      if (hasAnswered) {
        if (index === currentQ.correct) {
          stateClass = 'correct';
          iconHTML = `<i class="fa-solid fa-circle-check mock-option-result-icon"></i>`;
        } else if (selected) {
          stateClass = 'incorrect';
          iconHTML = `<i class="fa-solid fa-circle-xmark mock-option-result-icon"></i>`;
        }
      } else if (selected) {
        stateClass = 'selected';
      }

      const optBtn = document.createElement('button');
      optBtn.className = `mock-option ${stateClass}`;
      optBtn.disabled = hasAnswered;
      optBtn.innerHTML = `
        <span style="display:flex;align-items:center;flex:1;">
          <span class="mock-option-letter">${letters[index]}</span>
          <span>${opt}</span>
        </span>
        ${iconHTML}
      `;

      if (!hasAnswered) {
        optBtn.addEventListener('click', () => {
          activeExam.answers[activeExam.currentIndex] = index;
          activeExam.visited[activeExam.currentIndex] = true;
          renderLiveMockQuestion();
          renderPaletteSidebarGrid();
        });
      }

      optionsBox.appendChild(optBtn);
    });

    // Show explanation if answered
    if (hasAnswered && currentQ.explanation) {
      const explanationBox = document.createElement('div');
      explanationBox.className = 'mock-explanation-box';
      explanationBox.innerHTML = `
        <div class="mock-explanation-header">
          <i class="fa-solid fa-lightbulb"></i>
          <span>Solution & Explanation</span>
        </div>
        <p class="mock-explanation-text">${currentQ.explanation}</p>
      `;
      optionsBox.parentElement.appendChild(explanationBox);
    }
    document.getElementById('btn-exam-prev-q').disabled = activeExam.currentIndex === 0;

    const nextBtn = document.getElementById('btn-exam-next-q');
    if (activeExam.currentIndex === activeExam.questions.length - 1) {
      nextBtn.innerHTML = `Submit Exam <i class="fa-solid fa-flag-checkered"></i>`;
      nextBtn.classList.remove('btn-primary');
      nextBtn.classList.add('btn-danger');
    } else {
      nextBtn.innerHTML = `Save & Next <i class="fa-solid fa-angle-right"></i>`;
      nextBtn.classList.add('btn-primary');
      nextBtn.classList.remove('btn-danger');
    }

    const flagBtn = document.getElementById('btn-exam-mark-review');
    if (activeExam.marked[activeExam.currentIndex]) {
      flagBtn.style.background = 'rgba(245, 158, 11, 0.18)';
      flagBtn.style.borderColor = '#f59e0b';
    } else {
      flagBtn.style.background = '';
      flagBtn.style.borderColor = '';
    }
  }

  document.getElementById('btn-exam-prev-q').addEventListener('click', () => {
    if (activeExam.currentIndex > 0) {
      activeExam.currentIndex--;
      activeExam.visited[activeExam.currentIndex] = true;
      renderLiveMockQuestion();
      renderPaletteSidebarGrid();
    }
  });

  document.getElementById('btn-exam-next-q').addEventListener('click', () => {
    if (activeExam.currentIndex === activeExam.questions.length - 1) {
      triggerSubmissionConfirmOverlay();
    } else {
      activeExam.currentIndex++;
      activeExam.visited[activeExam.currentIndex] = true;
      renderLiveMockQuestion();
      renderPaletteSidebarGrid();
    }
  });

  document.getElementById('btn-exam-mark-review').addEventListener('click', () => {
    activeExam.marked[activeExam.currentIndex] = !activeExam.marked[activeExam.currentIndex];
    renderLiveMockQuestion();
    renderPaletteSidebarGrid();
  });

  document.getElementById('btn-exam-clear-ans').addEventListener('click', () => {
    delete activeExam.answers[activeExam.currentIndex];
    renderLiveMockQuestion();
    renderPaletteSidebarGrid();
  });

  function openMobilePalette() {
    const sidebar = document.getElementById('mock-palette-sidebar');
    const overlay = document.getElementById('mock-palette-overlay');
    if (sidebar) sidebar.classList.add('mobile-open');
    if (overlay) overlay.classList.add('active');
  }

  function closeMobilePalette() {
    const sidebar = document.getElementById('mock-palette-sidebar');
    const overlay = document.getElementById('mock-palette-overlay');
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (overlay) overlay.classList.remove('active');
  }

  const togglePalBtn = document.getElementById('btn-toggle-mobile-palette');
  if (togglePalBtn) {
    togglePalBtn.addEventListener('click', openMobilePalette);
  }

  const closePalBtn = document.getElementById('btn-close-mobile-palette');
  if (closePalBtn) {
    closePalBtn.addEventListener('click', closeMobilePalette);
  }

  const palOverlay = document.getElementById('mock-palette-overlay');
  if (palOverlay) {
    palOverlay.addEventListener('click', closeMobilePalette);
  }

  function renderPaletteSidebarGrid() {
    const grid = document.getElementById('exam-live-palette-grid');
    if (!grid) return;
    grid.innerHTML = '';

    activeExam.questions.forEach((_, index) => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = index + 1;

      let stateClass = "unvisited";
      const isAnswered = activeExam.answers[index] !== undefined;
      const isMarked = activeExam.marked[index];
      const isVisited = activeExam.visited[index];

      if (isMarked) {
        stateClass = "marked";
      } else if (isAnswered) {
        stateClass = "answered";
      } else if (isVisited) {
        stateClass = "visited-unanswered";
      }

      btn.classList.add(stateClass);
      if (index === activeExam.currentIndex) {
        btn.classList.add('active');
      }

      btn.addEventListener('click', () => {
        activeExam.currentIndex = index;
        activeExam.visited[index] = true;
        renderLiveMockQuestion();
        renderPaletteSidebarGrid();
        closeMobilePalette();
      });

      grid.appendChild(btn);
    });
  }

  function triggerSubmissionConfirmOverlay() {
    closeMobilePalette();
    const overlay = document.getElementById('mock-submission-confirm-overlay');
    let answered = 0;
    let skipped = 0;
    let marked = 0;

    activeExam.questions.forEach((_, index) => {
      if (activeExam.marked[index]) {
        marked++;
      } else if (activeExam.answers[index] !== undefined) {
        answered++;
      } else {
        skipped++;
      }
    });

    document.getElementById('confirm-stat-answered').textContent = answered;
    document.getElementById('confirm-stat-skipped').textContent = skipped;
    document.getElementById('confirm-stat-marked').textContent = marked;

    overlay.style.display = 'flex';
  }

  document.getElementById('btn-exam-submit-trigger').addEventListener('click', triggerSubmissionConfirmOverlay);

  document.getElementById('btn-confirm-return-exam').addEventListener('click', () => {
    document.getElementById('mock-submission-confirm-overlay').style.display = 'none';
  });

  document.getElementById('btn-confirm-submit-exam').addEventListener('click', () => {
    document.getElementById('mock-submission-confirm-overlay').style.display = 'none';
    submitMockExamForCEEGrading();
  });

  function submitMockExamForCEEGrading(forced = false) {
    if (activeExam.timerInterval) clearInterval(activeExam.timerInterval);

    document.getElementById('mock-exam-simulation-workspace').style.display = 'none';

    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;
    const total = 200;

    activeExam.questions.forEach((q, index) => {
      const choice = activeExam.answers[index];
      
      if (choice !== undefined) {
        activeExam.subjectStats[q.subKey].attempted++;
        if (choice === q.correct) {
          correct++;
          activeExam.subjectStats[q.subKey].correct++;
        } else {
          incorrect++;
        }
      } else {
        unattempted++;
      }
    });

    // Score incorporating negative marking penalty (-0.25)
    const finalScore = correct * 1.0 - incorrect * 0.25;
    const finalDisplayScore = Math.max(0, finalScore);
    const percentageScore = (finalDisplayScore / total) * 100;

    const elapsed = activeExam.totalDuration - activeExam.timeRemaining;
    const hrs = Math.floor(elapsed / 3600);
    const mins = Math.floor((elapsed % 3600) / 60);
    const secs = elapsed % 60;
    const timeSpentString = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const newAttempt = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      score: percentageScore,
      correct: correct,
      incorrect: incorrect,
      unattempted: unattempted,
      total: total,
      timeTaken: timeSpentString,
      subjects: ["Physics", "Chemistry", "Biology", "MAT"]
    };

    appState.mockTests.push(newAttempt);
    saveState();
    updateDashboardStats();
    renderMockResultsAnalysisDashboard(newAttempt);

    showToast("CEE Mock Exam graded successfully!", "success");
  }

  function renderMockResultsAnalysisDashboard(attempt) {
    navigateTo('mock-exam');
    document.getElementById('mock-setup-console').style.display = 'none';

    const analysisPanel = document.getElementById('mock-results-analysis');
    analysisPanel.style.display = 'flex';
    analysisPanel.innerHTML = '';

    const passed = attempt.score >= 50;

    // Header Card
    const header = document.createElement('div');
    header.className = 'glass-card p-6 md:p-8 rounded-3xl flex items-center gap-6';
    header.style.background = passed
      ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(9, 13, 22, 0.5) 100%)'
      : 'linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(9, 13, 22, 0.5) 100%)';
    header.style.borderColor = passed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)';

    header.innerHTML = `
      <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white flex-shrink-0" style="background: ${passed ? '#10b981' : '#ef4444'};">
        <i class="fa-solid ${passed ? 'fa-medal' : 'fa-triangle-exclamation'}"></i>
      </div>
      <div class="subject-header-details space-y-1">
        <span class="badge ${passed ? 'badge-success' : 'badge-danger'} text-[0.62rem]">${passed ? 'Passable' : 'Underprepared'}</span>
        <h2 class="text-2xl md:text-3.5xl font-extrabold tracking-tight font-heading text-white">Score: ${attempt.score.toFixed(2)}%</h2>
        <p class="text-xs md:text-sm text-gray-400">Total Marks: ${(attempt.correct * 1.0 - attempt.incorrect * 0.25).toFixed(2)} / 200.0 &bull; Time spent: ${attempt.timeTaken}</p>
      </div>
    `;
    analysisPanel.appendChild(header);

    const columns = document.createElement('div');
    columns.className = 'grid grid-cols-1 lg:grid-cols-3 gap-8 items-start';

    // Left sidebar analytics
    const leftPanel = document.createElement('div');
    leftPanel.className = 'space-y-6 lg:col-span-1';

    const analyticsCard = document.createElement('div');
    analyticsCard.className = 'glass-card p-5 space-y-5';
    
    let barsHTML = "";
    const colors = { physics: '#06b6d4', chemistry: '#ec4899', biology: '#10b981', mentalAgility: '#eab308' };
    const names = { physics: 'Physics', chemistry: 'Chemistry', biology: 'Biology', mentalAgility: 'MAT' };

    Object.keys(activeExam.subjectStats).forEach(sKey => {
      const stats = activeExam.subjectStats[sKey];
      const percent = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
      const color = colors[sKey];

      barsHTML += `
        <div class="perf-bar-row">
          <div class="perf-bar-label text-xs font-bold flex justify-between">
            <span>${names[sKey]}</span>
            <span style="color: ${color};">${percent}% (${stats.correct}/${stats.total})</span>
          </div>
          <div class="perf-bar-track bg-white/2 h-2.5 rounded-full overflow-hidden mt-1">
            <div class="perf-bar-fill h-full rounded-full" style="width: ${percent}%; background: ${color};"></div>
          </div>
        </div>
      `;
    });

    analyticsCard.innerHTML = `
      <div class="glass-card-header border-b border-white/5 pb-3">
        <h3 class="text-base font-extrabold text-white">CEE Subject Analysis</h3>
        <i class="fa-solid fa-chart-line text-brand-primary"></i>
      </div>
      <div class="space-y-4">
        ${barsHTML}
      </div>
    `;
    leftPanel.appendChild(analyticsCard);

    // Dynamic weak areas recommendations
    const recsCard = document.createElement('div');
    recsCard.className = 'glass-card p-5 space-y-4';

    let chapterDoubts = {};
    activeExam.questions.forEach((q, index) => {
      const choice = activeExam.answers[index];
      if (choice !== undefined && choice !== q.correct) {
        if (q.chapterName) {
          chapterDoubts[q.chapterName] = (chapterDoubts[q.chapterName] || 0) + 1;
        }
      }
    });

    let recsHTML = "";
    const sortedDoubts = Object.keys(chapterDoubts).sort((a,b) => chapterDoubts[b] - chapterDoubts[a]);
    
    if (sortedDoubts.length > 0) {
      sortedDoubts.slice(0, 3).forEach(chName => {
        recsHTML += `
          <div class="flex gap-3 items-center p-3 bg-white/2 rounded-xl border border-white/5">
            <i class="fa-solid fa-triangle-exclamation text-brand-warning text-sm"></i>
            <div class="flex flex-col">
              <span class="text-xs font-bold text-gray-200">${chName}</span>
              <span class="text-[0.65rem] text-gray-500 font-semibold">Missed chapters in CEE Simulator</span>
            </div>
          </div>
        `;
      });
    } else {
      recsHTML = `
        <div class="text-center py-4 text-xs text-gray-500 font-semibold">
          <i class="fa-solid fa-trophy text-brand-success text-lg block mb-1"></i> Perfect evaluation! No weak spots found.
        </div>
      `;
    }

    recsCard.innerHTML = `
      <div class="glass-card-header border-b border-white/5 pb-3">
        <h3 class="text-base font-extrabold text-white">Adaptive Recommendations</h3>
        <i class="fa-solid fa-brain text-brand-info animate-pulse"></i>
      </div>
      <p class="text-[0.7rem] text-gray-500 font-semibold">Study focus guidelines determined by mock errors:</p>
      <div class="space-y-3">
        ${recsHTML}
      </div>
      <button class="btn btn-primary w-full bg-gradient-to-r from-brand-primary to-indigo-600 shadow-[0_4px_12px_rgba(135,77,255,0.15)] font-bold py-2.5 px-4 text-xs mt-3" id="btn-results-back-mock">
        <i class="fa-solid fa-arrow-left mr-1"></i> Return Dashboard
      </button>
    `;
    leftPanel.appendChild(recsCard);
    columns.appendChild(leftPanel);

    // Right solutions board
    const rightPanel = document.createElement('div');
    rightPanel.className = 'glass-card p-5 space-y-6 lg:col-span-2';

    let solutionItemsHTML = "";
    const letters = ['A', 'B', 'C', 'D'];

    activeExam.questions.forEach((q, index) => {
      const choice = activeExam.answers[index];
      const isCorrect = choice === q.correct;
      const isSkipped = choice === undefined;

      let itemClass = isCorrect ? 'border-l-[4px] border-l-emerald-500' : (isSkipped ? 'border-l-[4px] border-l-gray-600' : 'border-l-[4px] border-l-red-500');
      let badgeHTML = isCorrect
        ? `<span class="badge badge-success text-[0.58rem] py-0 px-2">Correct</span>`
        : (isSkipped ? `<span class="badge bg-slate-800 border-white/5 text-gray-400 text-[0.58rem] py-0 px-2">Skipped</span>` : `<span class="badge badge-danger text-[0.58rem] py-0 px-2">Incorrect</span>`);

      let choicesHTML = "";
      q.options.forEach((opt, oIdx) => {
        let optClass = "bg-white/1 border-white/5 text-gray-400";
        if (oIdx === q.correct) {
          optClass = "border-emerald-500/30 text-emerald-400 bg-emerald-500/5";
        } else if (oIdx === choice) {
          optClass = "border-red-500/30 text-red-400 bg-red-500/5";
        }

        choicesHTML += `
          <div class="p-2.5 rounded-lg border text-xs font-semibold ${optClass}">${letters[oIdx]}. ${opt}</div>
        `;
      });

      solutionItemsHTML += `
        <div class="p-4 rounded-xl border border-white/5 bg-white/1 flex flex-col gap-3.5 ${itemClass}">
          <div class="flex justify-between items-center text-[0.65rem] font-bold text-gray-500">
            <span>Question ${index + 1} &bull; ${q.type}</span>
            ${badgeHTML}
          </div>
          <h4 class="text-sm font-extrabold text-gray-200 leading-snug">${q.question}</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${choicesHTML}
          </div>
          <div class="p-3 bg-white/2 rounded-lg border border-white/5 space-y-1 mt-1">
            <span class="text-[0.65rem] font-bold text-brand-info uppercase tracking-wider block"><i class="fa-solid fa-circle-info"></i> Solution Breakdown</span>
            <p class="text-[0.72rem] text-gray-400 leading-relaxed font-semibold">${q.explanation}</p>
          </div>
        </div>
      `;
    });

    rightPanel.innerHTML = `
      <div class="glass-card-header border-b border-white/5 pb-3">
        <h3 class="text-base font-extrabold text-white">Full Explanation Key</h3>
        <i class="fa-solid fa-list-check text-brand-info"></i>
      </div>
      <p class="text-[0.7rem] text-gray-500 font-semibold mb-2">Explanations and steps for all 200 Mock Exam questions.</p>
      
      <div class="space-y-6 max-h-[500px] overflow-y-auto pr-1">
        ${solutionItemsHTML}
      </div>
    `;
    columns.appendChild(rightPanel);
    analysisPanel.appendChild(columns);

    document.getElementById('btn-results-back-mock').addEventListener('click', () => {
      document.getElementById('mock-results-analysis').style.display = 'none';
      document.getElementById('mock-setup-console').style.display = 'block';
      renderMockHistory();
    });
  }

  // ==========================================================================
  // REVISION SCRATCHPAD + AI ASSISTANT (shared "+" FAB panel)
  // ==========================================================================
  const fab = document.getElementById('scratchpad-trigger-fab');
  const panel = document.getElementById('scratchpad-utility-panel');
  const panelClose = document.getElementById('scratchpad-close-btn');
  const textarea = document.getElementById('scratchpad-writing-area');

  const tabAssistant = document.getElementById('utility-tab-assistant');
  const tabNotes = document.getElementById('utility-tab-notes');
  const paneAssistant = document.getElementById('utility-pane-assistant');
  const paneNotes = document.getElementById('utility-pane-notes');

  function switchUtilityTab(target) {
    const isAssistant = target === 'assistant';
    tabAssistant.classList.toggle('active', isAssistant);
    tabNotes.classList.toggle('active', !isAssistant);
    tabAssistant.setAttribute('aria-selected', isAssistant ? 'true' : 'false');
    tabNotes.setAttribute('aria-selected', !isAssistant ? 'true' : 'false');
    paneAssistant.classList.toggle('hidden', !isAssistant);
    paneNotes.classList.toggle('hidden', isAssistant);
    if (isAssistant) {
      refreshAssistantContext();
      document.getElementById('assistant-input').focus();
    } else {
      textarea.focus();
    }
  }

  tabAssistant.addEventListener('click', () => switchUtilityTab('assistant'));
  tabNotes.addEventListener('click', () => switchUtilityTab('notes'));

  fab.addEventListener('click', () => {
    const isShowing = panel.style.display === 'flex';
    if (isShowing) {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'flex';
      textarea.value = appState.scratchpad;
      switchUtilityTab('assistant');
      if (assistantMessages.length === 0) {
        renderAssistantWelcomeMessage();
      }
    }
  });

  panelClose.addEventListener('click', () => {
    panel.style.display = 'none';
  });

  textarea.addEventListener('input', (e) => {
    appState.scratchpad = e.target.value;
    saveState();
  });

  // --------------------------------------------------------------------
  // AI ASSISTANT MODULE
  //
  // Gemini is called only through the authenticated Supabase Edge Function.
  // The GEMINI_API_KEY remains encrypted in Supabase and is never exposed here.
  const ASSISTANT_API_ENDPOINT = SUPABASE_URL + '/functions/v1/course-chat';

  let assistantMessages = []; // { role: 'user' | 'assistant' | 'system', content: string }
  let assistantIsLoading = false;

  const assistantMessagesEl = document.getElementById('assistant-messages');
  const assistantForm = document.getElementById('assistant-input-form');
  const assistantInput = document.getElementById('assistant-input');
  const assistantSendBtn = document.getElementById('assistant-send-btn');
  const assistantContextChip = document.getElementById('assistant-context-chip');
  const assistantContextChipLabel = document.getElementById('assistant-context-chip-label');

  const SITE_HELP_CONTEXT = `
CeeFusion is a CEE Nepal / NEET entrance exam preparation platform. Key facts to use when answering general "how do I use this site" questions:
- Subjects covered: Physics, Chemistry, Biology, Mathematics — each broken into categories and chapters, accessible from the left sidebar.
- Each chapter has a 3-panel Study Workspace: Concept Notes, Equations Index, and a 30-question Revision Quiz (100-minute timer).
- The CEE Mock Exam is a 200-question timed simulation (3 hours): Physics 50, Chemistry 50, Biology 80, Mental Agility (MAT) 20.
- Marking scheme: +1.0 for a correct answer, -0.25 negative marking for an incorrect answer, 0 for unattempted.
- The Question Selection Grid (right sidebar during an exam/quiz) lets students jump to any question; colors indicate Unvisited, Answered, Skipped, and Flagged.
- Students can Flag a question for review, Clear their answer, and navigate with Previous/Save & Next.
- Progress (chapters mastered, quiz scores, mock exam history) is tracked on the Dashboard.
- The Scratchpad (Notes tab in this same panel) is for jotting formulas/notes during timed sessions.
`.trim();

  const ASSISTANT_STOP_WORDS = new Set([
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'can', 'do', 'does', 'explain',
    'for', 'from', 'how', 'i', 'in', 'is', 'it', 'me', 'of', 'on', 'or', 'please',
    'the', 'this', 'to', 'what', 'when', 'where', 'which', 'why', 'with', 'you'
  ]);

  function getAssistantSearchTerms(text) {
    return [...new Set(String(text || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .split(/\s+/)
      .filter(term => term.length > 1 && !ASSISTANT_STOP_WORDS.has(term)))]
      .slice(0, 24);
  }

  function scoreAssistantText(text, terms) {
    const haystack = String(text || '').toLowerCase();
    return terms.reduce((score, term) => {
      const occurrences = haystack.split(term).length - 1;
      return score + Math.min(occurrences, 4);
    }, 0);
  }

  /**
   * Selects the most relevant CeeFusion notes and authored practice questions.
   * This keeps Gemini grounded without sending the entire 85-chapter course on
   * every request.
   */
  function buildCourseAssistantContext(userText, questionCtx) {
    const queryText = [
      userText,
      questionCtx?.question,
      questionCtx?.options?.join(' '),
      activeDrilldown?.subjectKey,
      activeDrilldown?.categoryKey,
      activeDrilldown?.chapterKey
    ].filter(Boolean).join(' ');
    const terms = getAssistantSearchTerms(queryText);
    const chapterMatches = [];

    Object.entries(window.eduPeakData || {}).forEach(([subjectKey, categories]) => {
      Object.entries(categories || {}).forEach(([categoryKey, chapters]) => {
        Object.entries(chapters || {}).forEach(([chapterKey, chapter]) => {
          const notes = chapter.notes || {};
          const searchable = [
            subjectKey, categoryKey, chapterKey, chapter.name,
            notes.theoretical, notes.framework, notes.strategy,
            ...(chapter.formulas || [])
          ].filter(Boolean).join(' ');
          let score = scoreAssistantText(searchable, terms);
          if (activeDrilldown?.subjectKey === subjectKey
              && activeDrilldown?.categoryKey === categoryKey
              && activeDrilldown?.chapterKey === chapterKey) score += 20;
          if (score > 0) {
            chapterMatches.push({
              score,
              subject: subjectKey,
              category: categoryKey,
              chapter: chapter.name || chapterKey,
              notes: {
                theoretical: notes.theoretical || '',
                framework: notes.framework || '',
                strategy: notes.strategy || ''
              },
              formulas: (chapter.formulas || []).slice(0, 10)
            });
          }
        });
      });
    });

    const questionMatches = [];
    Object.entries(window.EDUPEAK_QUESTION_BANK || {}).forEach(([subjectKey, questions]) => {
      (questions || []).forEach(question => {
        const searchable = [
          subjectKey, question.chapter, question.question,
          ...(question.options || []), question.explanation
        ].filter(Boolean).join(' ');
        const score = scoreAssistantText(searchable, terms);
        if (score > 1) {
          questionMatches.push({
            score,
            id: question.id,
            subject: question.subject || subjectKey,
            chapter: question.chapter,
            question: question.question,
            options: question.options,
            correct: Number.isInteger(question.correct) ? question.options?.[question.correct] : null,
            explanation: question.explanation || ''
          });
        }
      });
    });

    return {
      chapters: chapterMatches.sort((a, b) => b.score - a.score).slice(0, 4)
        .map(({ score, ...chapter }) => chapter),
      practiceQuestions: questionMatches.sort((a, b) => b.score - a.score).slice(0, 4)
        .map(({ score, ...question }) => question)
    };
  }

  /**
   * Builds the current-question context (if the user is viewing a quiz/
   * exam question right now) to inject into the assistant automatically,
   * so the user never has to retype the question. Returns null when
   * there's no active question in view.
   */
  function getCurrentQuestionContext() {
    const quizView = document.getElementById('view-quiz-simulator');
    if (activeQuiz && Array.isArray(activeQuiz.questions) && activeQuiz.questions.length > 0
        && quizView && quizView.classList.contains('active')) {
      const q = activeQuiz.questions[activeQuiz.currentIndex];
      if (q) {
        return {
          source: 'Chapter Quiz',
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer || LETTERS_MAP[q.correct],
          explanation: q.explanation || null
        };
      }
    }
    const examWorkspace = document.getElementById('mock-exam-simulation-workspace');
    if (activeExam && Array.isArray(activeExam.questions) && activeExam.questions.length > 0
        && examWorkspace && examWorkspace.style.display === 'flex') {
      const q = activeExam.questions[activeExam.currentIndex];
      if (q) {
        return {
          source: 'CEE Mock Exam',
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer || LETTERS_MAP[q.correct],
          explanation: q.explanation || null
        };
      }
    }
    return null;
  }

  function refreshAssistantContext() {
    const ctx = getCurrentQuestionContext();
    if (ctx) {
      assistantContextChip.classList.remove('hidden');
      assistantContextChipLabel.textContent = `Viewing: ${ctx.source} question`;
      assistantInput.placeholder = 'Ask about this question...';
    } else {
      assistantContextChip.classList.add('hidden');
      assistantInput.placeholder = 'Ask about this question or the site...';
    }
  }

  function renderAssistantWelcomeMessage() {
    appendAssistantMessage('system', "Hi! I’m your CeeFusion study tutor. Ask for a clear explanation, a worked example, or a revision plan. Open a chapter or quiz and I’ll use its study material to help.");
  }

  function appendAssistantMessage(role, text) {
    assistantMessages.push({ role, content: text });
    const bubble = document.createElement('div');
    const roleClass = role === 'user' ? 'assistant-msg-user'
      : role === 'system' ? 'assistant-msg-system'
      : role === 'error' ? 'assistant-msg-error'
      : 'assistant-msg-bot';
    bubble.className = `assistant-msg ${roleClass}`;
    bubble.textContent = text;
    assistantMessagesEl.appendChild(bubble);
    assistantMessagesEl.scrollTop = assistantMessagesEl.scrollHeight;
    return bubble;
  }

  function appendAssistantTypingIndicator() {
    const bubble = document.createElement('div');
    bubble.className = 'assistant-msg assistant-msg-bot assistant-typing-bubble';
    bubble.innerHTML = `<span class="assistant-typing-dots"><span></span><span></span><span></span></span>`;
    assistantMessagesEl.appendChild(bubble);
    assistantMessagesEl.scrollTop = assistantMessagesEl.scrollHeight;
    return bubble;
  }

  /**
   * Sends the conversation and the most relevant course material to the
   * authenticated Supabase Edge Function. The function calls Gemini and
   * returns { reply: string }.
   */
  async function sendAssistantMessage(userText, retry = false) {
    if (assistantIsLoading) return;
    assistantMessagesEl.querySelectorAll('.assistant-retry').forEach(button => button.remove());
    if (!retry) appendAssistantMessage('user', userText);
    assistantInput.value = '';
    assistantIsLoading = true;
    assistantSendBtn.disabled = true;
    assistantInput.disabled = true;
    assistantMessagesEl.setAttribute('aria-busy', 'true');
    const typingBubble = appendAssistantTypingIndicator();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60000);
    try {
      if (!supabaseClient) throw new Error('The tutor is unavailable. Please refresh the page and try again.');
      const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();
      if (sessionError || !sessionData.session) throw new Error('Please log in to use your study tutor.');
      const questionContext = getCurrentQuestionContext();
      const response = await fetch(ASSISTANT_API_ENDPOINT, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': 'Bearer ' + sessionData.session.access_token
        },
        body: JSON.stringify({
          messages: assistantMessages.filter(m => m.role === 'user' || m.role === 'assistant').slice(-10),
          context: {
            site: SITE_HELP_CONTEXT,
            currentQuestion: questionContext,
            course: buildCourseAssistantContext(userText, questionContext)
          }
        })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const messages = {
          401: 'Your session has expired. Please log in again.',
          429: 'The tutor is busy or its usage limit has been reached. Please try again shortly.',
          503: 'The tutor is temporarily unavailable. Please try again shortly.',
          502: 'The AI service could not answer right now. Please try again shortly.'
        };
        throw new Error(messages[response.status] || 'Your question could not be sent. Please try again.');
      }
      if (typeof data.reply !== 'string' || !data.reply.trim()) throw new Error('The tutor returned an empty answer. Please try again.');
      appendAssistantMessage('assistant', data.reply);
    } catch (error) {
      const message = error.name === 'AbortError' ? 'The tutor took too long to respond. Please try again.'
        : error instanceof TypeError ? 'Connection lost. Check your internet connection and try again.' : error.message;
      const bubble = appendAssistantMessage('error', message);
      const retryButton = document.createElement('button');
      retryButton.type = 'button';
      retryButton.className = 'assistant-retry';
      retryButton.textContent = 'Try again';
      retryButton.addEventListener('click', () => { if (!assistantIsLoading) { bubble.remove(); sendAssistantMessage(userText, true); } });
      bubble.appendChild(retryButton);
    } finally {
      clearTimeout(timeout);
      typingBubble.remove();
      assistantIsLoading = false;
      assistantSendBtn.disabled = false;
      assistantInput.disabled = false;
      assistantMessagesEl.setAttribute('aria-busy', 'false');
      assistantMessagesEl.scrollTop = assistantMessagesEl.scrollHeight;
      if (panel.style.display === 'flex') assistantInput.focus();
    }
  }

  document.querySelectorAll('[data-tutor-prompt]').forEach(button => {
    button.addEventListener('click', () => {
      if (!assistantIsLoading) sendAssistantMessage(button.dataset.tutorPrompt);
    });
  });

  assistantForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = assistantInput.value.trim();
    if (!text || assistantIsLoading) return;
    sendAssistantMessage(text);
  });

  // ==========================================================================
  // CONTACT FORM FIELD VALIDATION
  // ==========================================================================
  const form = document.getElementById('edupeak-contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name');
      const email = document.getElementById('contact-email');
      const msg = document.getElementById('contact-message');
      
      let valid = true;

      // Resets
      [name, email, msg].forEach(f => f.style.borderColor = '');

      if (name.value.trim().length < 3) {
        name.focus();
        name.style.borderColor = '#ef4444';
        valid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        if (valid) email.focus();
        email.style.borderColor = '#ef4444';
        valid = false;
      }

      if (msg.value.trim().length < 10) {
        if (valid) msg.focus();
        msg.style.borderColor = '#ef4444';
        valid = false;
      }

      if (valid) {
        showToast("Message successfully sent to Austin, TX support center!", "success");
        form.reset();
      } else {
        showToast("Details are incorrect. Try again.", "warning");
      }
    });
  }

  // FAQs Accordions
  const faqsList = document.querySelectorAll('.faq-row');
  faqsList.forEach(row => {
    const header = row.querySelector('.faq-summary');
    header.addEventListener('click', () => {
      const opened = row.classList.contains('open');
      faqsList.forEach(f => f.classList.remove('open'));
      if (!opened) row.classList.add('open');
    });
  });

  // ==========================================================================
  // HELPER ALGORITHMS
  // ==========================================================================
  function shuffleArray(array) {
    const clone = [...array];
    for (let i = clone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (panel.style.display === 'flex') panel.style.display = 'none';
      closeMobileDrawer();
    }
  });

  // Restore an unfinished email-verification screen after a refresh.
  const pendingVerificationEmail = sessionStorage.getItem('pendingVerificationEmail');
  if (pendingVerificationEmail && !isRecoveryRedirect) {
    switchAuthMode('verify', { email: pendingVerificationEmail });
  } else if (!isRecoveryRedirect) {
    switchAuthMode('signup');
  }

  if (supabaseClient) {
    supabaseClient.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') switchAuthMode('reset-update');
    });
  }

  // Run security lock check
  checkSession();

});
