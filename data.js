/**
 * EduPeak CEE/NEET Preparation Platform - Global Seed Data
 * Maps the complete 84-chapter CEE syllabus nested under subjects and category divisions.
 * Schema structure: eduPeakData[subject][category][chapterKey] = { name, formulas, quiz }
 */

window.eduPeakData = {
  physics: {
    mechanics: {
      units: {
        name: "Units, Dimensions, & Vectors",
        notes: {
          theoretical: "Units and dimensions form the analytical foundation for physical equations and measurements. Vector algebra provides the necessary directional toolset for kinematics, forces, and multi-dimensional field systems in medical and engineering physics.",
          framework: "Dimensional homogeneity mandates equal dimensions across added or equated terms. Vector dot products evaluate projection and scalar work, while cross products compute perpendicular vectors for torque and angular momentum.",
          strategy: "Use dimensional analysis to eliminate wrong choices rapidly in CEE MCQs. Be extra cautious with dimensionless parameters like strain, angle, and relative density."
        },
        formulas: ["Dimension of G = [M^-1 L^3 T^-2]", "A . B = AB cos(θ)", "A x B = AB sin(θ) n_hat"],
        quiz: []
      },
      kinematics: {
        name: "Kinematics",
        notes: {
          theoretical: "Kinematics describes the motion of bodies without considering the forces causing it. Velocity, acceleration, and displacement-time relationships are studied using differential calculus and graphical analysis.",
          framework: "Under uniform acceleration, uniform kinematic equations (v = u + at, s = ut + 0.5at²) govern translational paths. Slope of displacement-time graphs yields velocity, while area under velocity-time graphs yields displacement.",
          strategy: "Pay strict attention to sign conventions in vertical motion under gravity. At peak height, vertical velocity becomes zero while acceleration remains constant at -g."
        },
        formulas: ["v = u + at", "s = ut + 0.5at^2", "v^2 = u^2 + 2as"],
        quiz: []
      },
      projectile: {
        name: "Projectile & Circular Motion",
        notes: {
          theoretical: "Projectile motion is a 2D motion under constant downward gravitational acceleration with zero horizontal acceleration. Circular motion involves continuous velocity direction change governed by centripetal forces.",
          framework: "Horizontal range R = (u² sin 2θ)/g, Maximum Height H = (u² sin² θ)/2g, Time of Flight T = (2u sin θ)/g. In uniform circular motion, centripetal acceleration is a_c = v²/r directed towards the center.",
          strategy: "Maximum range occurs at 45° angle of projection. Note that complimentary angles of projection (θ and 90°-θ) yield identical horizontal ranges for equal initial speeds."
        },
        formulas: ["Range = u^2 sin(2θ) / g", "T = 2u sin(θ) / g", "a_c = v^2 / r"],
        quiz: []
      },
      newton: {
        name: "Newton’s Laws of Motion",
        notes: {
          theoretical: "Newton's Laws of Motion establish the dynamics of translational systems, defining momentum, force, inertia, and impulse. Friction acts as a self-adjusting reaction force opposing relative surface motion.",
          framework: "Net Force F = dp/dt = ma. Static friction f_s ≤ μ_s N adjusts up to maximum limiting friction, after which kinetic friction f_k = μ_k N takes over during sliding motion.",
          strategy: "Always draw free-body diagrams (FBD) isolating individual components. In pulley-block systems, write net force equations along the direction of accelerated motion."
        },
        formulas: ["F = dp/dt = ma", "f_k = μ_k * N", "p = mv"],
        quiz: []
      },
      work: {
        name: "Work, Energy, & Power",
        notes: {
          theoretical: "Work is the scalar product of force and displacement. Energy is the capacity to perform work, conserved in isolated systems according to the fundamental Work-Energy Theorem and Conservation of Mechanical Energy.",
          framework: "W = ∫ F · dr. Work-Energy Theorem states W_net = ΔKE = KE_f - KE_i. Power is the time rate of doing work P = dW/dt = F · v.",
          strategy: "Check whether forces are conservative (path independent like gravity) or non-conservative (path dependent like friction). Mechanical energy is conserved only under conservative forces."
        },
        formulas: ["W = F . d", "KE = 0.5mv^2", "P = dW/dt = F . v"],
        quiz: []
      },
      rotational: {
        name: "Rotational Motion",
        notes: {
          theoretical: "Rotational dynamics parallels linear motion through moment of inertia (rotational inertia), angular velocity, angular acceleration, torque, and conservation of angular momentum.",
          framework: "Torque τ = I α, Angular Momentum L = I ω. Parallel Axis Theorem: I = I_cm + Md². Kinetic Energy of rolling body = ½ m v² (1 + k²/R²).",
          strategy: "Remember standard moment of inertia values for ring (MR²), disc (½MR²), and solid sphere (2/5 MR²). In pure rolling without slipping, bottom contact point velocity is zero."
        },
        formulas: ["τ = I * α", "L = I * ω", "KE_rot = 0.5 * I * ω^2"],
        quiz: []
      },
      gravitation: {
        name: "Gravitation",
        notes: {
          theoretical: "Newton's Law of Universal Gravitation governs mutual attraction between massive bodies. Kepler's laws describe planetary orbital mechanics in elliptical paths around stellar foci.",
          framework: "F = G M m / r². Gravitational potential V = -GM/r. Escape velocity v_e = √(2GM/R) = √(2gR), while orbital speed for near-Earth satellites is v_o = √(gR).",
          strategy: "Gravitational acceleration g decreases both with height h (g' ≈ g(1 - 2h/R)) and depth d (g' = g(1 - d/R)). Escape velocity is independent of the mass of the projected body."
        },
        formulas: ["F = G * M * m / r^2", "g = G * M / R^2", "v_escape = sqrt(2GM/R)"],
        quiz: []
      }
    },
    thermodynamics: {
      solids: {
        name: "Solids & Fluids",
        notes: {
          theoretical: "Solids exhibit elastic behavior under deforming forces according to Hooke's Law. Fluids exert hydrostatic pressure and follow Archimedes' principle, Pascal's law, and Bernoulli's energy theorem.",
          framework: "Young's Modulus Y = (F/A) / (ΔL/L). Hydrostatic pressure P = P_0 + ρgh. Bernoulli's Equation: P + ½ρv² + ρgh = Constant.",
          strategy: "Terminal velocity of a spherical body falling in a viscous fluid scales as the square of its radius (v_t ∝ r²). Ensure viscosity vs surface tension formulas are kept distinct."
        },
        formulas: ["Young's Modulus Y = (F/A) / (ΔL/L)", "Pressure P = ρgh", "Continuity Equation A1 * v1 = A2 * v2"],
        quiz: []
      },
      thermal: {
        name: "Thermal Properties",
        notes: {
          theoretical: "Thermal properties cover expansion of materials, calorimetry, latent heat of phase transitions, and heat transfer via conduction, convection, and blackbody radiation.",
          framework: "Heat transfer ΔQ = m c ΔT. Linear expansion ΔL = L_0 α ΔT. Stefan-Boltzmann Law for blackbody radiation: P = σ A T⁴. Wien's Displacement Law: λ_max T = b.",
          strategy: "In calorimetry, total heat lost by hotter bodies equals total heat gained by colder bodies. Remember water reaches peak density at 4°C due to anomalous expansion."
        },
        formulas: ["ΔQ = mcΔT", "L = Q/m", "Thermal Expansion ΔL = L_0 * α * ΔT"],
        quiz: []
      },
      thermodynamics: {
        name: "Thermodynamics (Laws & Heat Engines)",
        notes: {
          theoretical: "Chemical Thermodynamics studies heat and work changes during reactions, enthalpy of formation, Hess's Law, entropy, and Gibbs Free Energy criteria for reaction spontaneity.",
          framework: "First Law ΔU = q + w. Enthalpy ΔH = ΔU + Δn_g RT. Gibbs Free Energy ΔG = ΔH - TΔS. Spontaneity requires ΔG < 0.",
          strategy: "Exothermic reactions with increasing entropy (ΔH < 0, ΔS > 0) are spontaneously favorable at all temperatures."
        },
        notes: {
          theoretical: "Thermodynamics governs energy transformations among work, heat, and internal energy. The First Law states energy conservation, while the Second Law establishes entropy directionality and heat engine limits.",
          framework: "First Law: dQ = dU + dW. Work done in isothermal process W = nRT ln(V_f/V_i). Carnot Engine efficiency η = 1 - T_c/T_h.",
          strategy: "For adiabatic processes, P V^γ = Constant and dQ = 0, so dU = -dW. In cyclic processes, net change in internal energy ΔU is zero."
        },
        formulas: ["dQ = dU + dW", "W = PΔV", "Efficiency η = 1 - T_c / T_h"],
        quiz: []
      },
      kinetic: {
        name: "Kinetic Theory of Gases",
        notes: {
          theoretical: "Kinetic Theory of Gases explains macroscopic thermodynamic properties (pressure, temperature) from microscopic collisions of ideal gas molecules.",
          framework: "Ideal Gas Law: PV = nRT. Root-mean-square speed v_rms = √(3RT/M). Average kinetic energy per molecule = (f/2) k_B T, where f is degrees of freedom.",
          strategy: "Monoatomic gases have f = 3 (γ = 5/3), diatomic gases have f = 5 at room temp (γ = 7/5). Note that temperature is a direct measure of average molecular kinetic energy."
        },
        formulas: ["PV = nRT", "v_rms = sqrt(3RT/M)", "KE_avg = 1.5 * k_B * T"],
        quiz: []
      }
    },
    waves: {
      shm: {
        name: "Simple Harmonic Motion (SHM)",
        notes: {
          theoretical: "Simple Harmonic Motion (SHM) is a periodic oscillatory motion where restoring force is directly proportional to displacement and directed towards the equilibrium position.",
          framework: "Equation of motion: d²x/dt² + ω²x = 0. Displacement x(t) = A sin(ωt + φ). Velocity v = ω √(A² - x²). Simple pendulum period T = 2π √(L/g).",
          strategy: "At maximum displacement (amplitude), kinetic energy is zero while potential energy is maximum. At equilibrium position (x=0), velocity is maximum."
        },
        formulas: ["x(t) = A sin(ωt + φ)", "v = ω * sqrt(A^2 - x^2)", "T = 2π * sqrt(m/k)"],
        quiz: []
      },
      sound: {
        name: "Wave Motion and Sound",
        notes: {
          theoretical: "Sound is a mechanical longitudinal wave requiring a physical medium for propagation. It exhibits wave superposition, interference, standing waves, beats, and the Doppler effect.",
          framework: "Wave speed v = f λ. Speed of sound in gas v = √(γRT/M). Beat frequency f_beat = |f1 - f2|. Doppler apparent frequency f' = f (v ± v_o) / (v ∓ v_s).",
          strategy: "In open organ pipes, all harmonics (1st, 2nd, 3rd...) are present. In closed organ pipes, only odd harmonics (1st, 3rd, 5th...) exist."
        },
        formulas: ["v = f * λ", "v_sound = sqrt(γRT/M)", "Doppler Effect f' = f * (v ± v_o) / (v ∓ v_s)"],
        quiz: []
      }
    },
    electromagnetism: {
      electrostatics: {
        name: "Electrostatics",
        notes: {
          theoretical: "Electrostatics investigates static electric charges, Coulomb forces, electric fields, and electric flux as quantified by Gauss's Law in free space and dielectric media.",
          framework: "Coulomb's Law F = k q1 q2 / r². Electric Field E = F/q. Gauss's Law: ∮ E · dA = Q_enclosed / ε_0.",
          strategy: "Electric field inside a hollow conducting sphere is strictly zero. Electric potential remains constant throughout the interior volume equal to its surface value."
        },
        formulas: ["F = k * q1 * q2 / r^2", "E = k * q / r^2", "Gauss's Law Φ = Q_enclosed / ε_0"],
        quiz: []
      },
      potential: {
        name: "Potential & Capacitance",
        notes: {
          theoretical: "Electric potential represents potential energy per unit charge. Capacitors store electrostatic energy in electric fields between isolated conductors separated by dielectrics.",
          framework: "Electric potential V = k q / r. Parallel plate capacitance C = ε_0 A / d. Stored electrostatic energy U = ½ C V² = ½ Q² / C.",
          strategy: "Inserting a dielectric slab of constant K with battery connected keeps voltage V constant while increasing capacitance to KC and stored energy to KU."
        },
        formulas: ["V = k * q / r", "C = Q/V", "U = 0.5 * C * V^2"],
        quiz: []
      },
      current: {
        name: "Current Electricity",
        notes: {
          theoretical: "Current electricity deals with charge transport in electrical conductors governed by Ohm's Law, Kirchhoff's Circuit Laws, Wheatstone bridges, and potentiometer measurements.",
          framework: "Current density J = I/A = n e v_d. Ohm's Law V = IR. Equivalent resistance in series R_s = Σ R_i, in parallel 1/R_p = Σ (1/R_i).",
          strategy: "In Kirchhoff's Loop Rule (KVL), moving in the direction of current across a resistor results in a potential drop (-IR). Potentiometer measures emf without drawing current."
        },
        formulas: ["V = I * R", "R = ρ * L / A", "P = I^2 * R = V^2 / R"],
        quiz: []
      },
      magnetism: {
        name: "Moving Charges & Magnetism",
        notes: {
          theoretical: "Moving charges and electric currents generate magnetic fields governed by Biot-Savart Law and Ampere's Circuital Law. Magnetic Lorentz forces act on moving charges in external fields.",
          framework: "Lorentz Force F = q(E + v × B). Biot-Savart Law dB = (μ_0 / 4π) (I dl × r̂ / r²). Magnetic field of long straight wire B = μ_0 I / (2πr).",
          strategy: "A charged particle entering a uniform magnetic field perpendicularly executes circular motion with radius r = mv / (qB) and frequency f = qB / (2πm)."
        },
        formulas: ["F_magnetic = q(v x B)", "B = μ_0 * I / (2πr)", "B_solenoid = μ_0 * n * I"],
        quiz: []
      },
      emi: {
        name: "Electromagnetic Induction (EMI)",
        notes: {
          theoretical: "Electromagnetic Induction (EMI) details the generation of electromotive force (EMF) by changing magnetic flux through a closed circuit according to Faraday's and Lenz's laws.",
          framework: "Faraday's Law: EMF = -dΦ/dt where magnetic flux Φ = B · A. Self-induced EMF = -L (dI/dt). Energy stored in inductor U = ½ L I².",
          strategy: "Lenz's Law mandates that the direction of induced EMF always opposes the change in magnetic flux that produced it (conservation of energy)."
        },
        formulas: ["EMF = -dΦ/dt", "Φ_magnetic = B . A", "Self Induced EMF = -L * dI/dt"],
        quiz: []
      },
      ac: {
        name: "Alternating Current (AC)",
        notes: {
          theoretical: "Alternating Current (AC) involves sinusoidally time-varying voltages and currents across resistive, inductive, and capacitive circuit elements and resonant LCR networks.",
          framework: "Impedance Z = √[R² + (X_L - X_C)²]. Resonance frequency f_r = 1 / (2π √(LC)). Average power P_avg = V_rms I_rms cos φ.",
          strategy: "At resonance, X_L = X_C, impedance Z is purely resistive (minimum Z = R), current is maximum, and the power factor cos φ = 1."
        },
        formulas: ["Z = sqrt(R^2 + (X_L - X_C)^2)", "Power P_avg = V_rms * I_rms * cos(φ)", "f_resonance = 1 / (2π * sqrt(LC))"],
        quiz: []
      },
      em_waves: {
        name: "EM Waves",
        notes: {
          theoretical: "Electromagnetic waves are transverse coupled oscillations of electric and magnetic fields propagating through space at the speed of light without requiring a material medium.",
          framework: "Speed of light c = 1 / √(μ_0 ε_0) = E_0 / B_0. Energy density u = ½ ε_0 E² + ½ (B² / μ_0). Poynting vector S = (1/μ_0) (E × B).",
          strategy: "EM waves carry both energy and momentum. Radio waves have the longest wavelength while Gamma rays have the highest frequency and energy."
        },
        formulas: ["c = E_0 / B_0 = 1 / sqrt(μ_0 * ε_0)", "Energy density u = ε_0 * E^2"],
        quiz: []
      }
    },
    optics: {
      ray: {
        name: "Ray Optics & Optical Instruments",
        notes: {
          theoretical: "Ray optics studies light propagation along straight paths, reflection from spherical mirrors, refraction across plane/spherical boundaries, prisms, and optical instruments like microscopes.",
          framework: "Mirror formula 1/f = 1/v + 1/u. Lens Maker's Formula 1/f = (n - 1)(1/R1 - 1/R2). Refractive Index n = c/v = sin i / sin r.",
          strategy: "Follow Cartesian sign conventions strictly: distances measured in the direction of incident light are positive, opposite are negative. Focal length of convex lens is positive, concave is negative."
        },
        formulas: ["1/f = 1/v + 1/u", "Refractive Index n = c/v", "Lens Maker's Formula 1/f = (n - 1)(1/R1 - 1/R2)"],
        quiz: []
      },
      wave: {
        name: "Wave Optics",
        notes: {
          theoretical: "Wave optics analyzes light as electromagnetic waves, explaining interference (Young's Double Slit Experiment), diffraction through apertures, and polarization (Brewster's Law).",
          framework: "Fringe width w = D λ / d. Constructive interference path diff Δx = nλ, destructive Δx = (2n-1)λ/2. Brewster's Law n = tan i_p.",
          strategy: "In YDSE, if the setup is immersed in a liquid of refractive index n, the fringe width decreases to w' = w / n."
        },
        formulas: ["Fringe Width w = D * λ / d", "Brewster's Law n = tan(i_p)", "Path Difference Δx = d sin(θ)"],
        quiz: []
      }
    },
    modern_physics: {
      dual_nature: {
        name: "Dual Nature of Matter",
        notes: {
          theoretical: "Dual nature establishes light and matter as possessing both wave and particle characteristics. Einstein's photoelectric effect demonstrates photon quantization, while de Broglie hypothesis attributes wavelength to matter.",
          framework: "Photoelectric Equation K_max = hf - φ_0 = e V_stopping. De Broglie wavelength λ = h / p = h / √(2mE).",
          strategy: "Photoelectric current depends solely on incident light intensity, whereas maximum kinetic energy of emitted photoelectrons depends strictly on frequency."
        },
        formulas: ["E = h * f", " Einstein Photoelectric K_max = hf - φ_0", "λ_deBroglie = h / p"],
        quiz: []
      },
      atoms: {
        name: "Atoms and Nuclei",
        notes: {
          theoretical: "Atomic and nuclear physics details Bohr's quantized atomic model, hydrogen spectral lines, nuclear binding energy, mass defect, and laws of radioactive decay.",
          framework: "Bohr radius r_n = 0.529 n² / Z Å. Energy levels E_n = -13.6 Z² / n² eV. Radioactive decay law N(t) = N_0 e^(-λt). Half-life T_half = 0.693 / λ.",
          strategy: "Binding energy per nucleon is maximum for Iron (Fe-56 ≈ 8.8 MeV), making it the most stable nucleus. Fission and fusion release energy by moving towards higher BE/nucleon."
        },
        formulas: ["R = R_0 * A^(1/3)", "Half Life T_half = ln(2) / λ", "E = Δm * c^2"],
        quiz: []
      },
      semiconductors: {
        name: "Semiconductor Electronics",
        notes: {
          theoretical: "Semiconductor electronics studies intrinsic and extrinsic (p-type, n-type) materials, p-n junction diodes, rectifiers, zener diodes, and logic gate truth tables.",
          framework: "Carrier concentration n_e n_h = n_i². Conductance σ = e (n_e μ_e + n_h μ_h). Diode equation and Zener voltage regulation under reverse breakdown.",
          strategy: "In forward bias, p-n junction depletion layer width decreases and barrier height drops. Zener diode is operated in reverse breakdown mode for voltage stabilization."
        },
        formulas: ["Conductivity σ = e * (n_e * μ_e + n_h * μ_h)", "Diode Equation I = I_0 * (e^(eV/ηkT) - 1)"],
        quiz: []
      }
    }
  },
  chemistry: {
    physical: {
      mole: {
        name: "Mole Concept",
        notes: {
          theoretical: "The Mole Concept is the stoichiometry quantitative foundation of chemistry, relating atomic mass, molar mass, Avogadro's number, concentration units, and empirical formulas.",
          framework: "Moles n = mass / Molar Mass = N / N_A = V(STP) / 22.4 L. Molarity M = moles / V(L), Normality N = M × n-factor.",
          strategy: "Always identify the limiting reagent first by calculating moles divided by stoichiometric coefficients in balanced chemical equations."
        },
        formulas: ["Moles = Mass / Molar_Mass", "Molarity = Moles / Volume(L)", "Normality = Equivalents / Volume(L)"],
        quiz: []
      },
      atom: {
        name: "Structure of Atom",
        notes: {
          theoretical: "Atomic Structure traces quantum atomic development from Rutherford and Bohr to Quantum Mechanics, covering quantum numbers, orbital shapes, Aufbau principle, and Pauli exclusion.",
          framework: "Hydrogen spectral lines 1/λ = R Z² (1/n1² - 1/n2²). Heisenberg Uncertainty Principle Δx Δp ≥ h / (4π). De Broglie wavelength λ = h / mv.",
          strategy: "Remember chromium (3d⁵ 4s¹) and copper (3d¹⁰ 4s¹) electronic configuration anomalies due to extra stability of half-filled and fully-filled d-subshells."
        },
        formulas: ["E_n = -13.6 / n^2 eV", "λ = h / mv", "Uncertainty Principle Δx * Δp >= h / 4π"],
        quiz: []
      },
      states: {
        name: "States of Matter",
        notes: {
          theoretical: "States of matter analyzes ideal and real gas behaviors, gas laws (Boyle, Charles, Graham), liquid surface tension, viscosity, and real gas deviation (Van der Waals equation).",
          framework: "Ideal Gas Equation PV = nRT. Graham's Diffusion Law r1/r2 = √(M2/M1). Van der Waals Equation (P + an²/V²)(V - nb) = nRT.",
          strategy: "Real gases behave most ideally at high temperature and low pressure. Van der Waals constant 'a' measures intermolecular attraction, 'b' measures molecular co-volume."
        },
        formulas: ["PV = nRT", "Graham's Law r1/r2 = sqrt(M2/M1)", "Van der Waals (P + an^2/V^2)(V - nb) = nRT"],
        quiz: []
      },
      thermodynamics: {
        name: "Chemical Thermodynamics",
        formulas: ["ΔH = ΔU + PΔV", "ΔG = ΔH - TΔS", "Entropy ΔS = q_rev / T"],
        quiz: []
      },
      equilibrium: {
        name: "Chemical & Ionic Equilibrium",
        notes: {
          theoretical: "Equilibrium covers dynamic chemical equilibria (Le Chatelier's Principle, Kp & Kc) and ionic equilibria in aqueous solutions (pH, buffers, hydrolysis, solubility product Ksp).",
          framework: "Kp = Kc (RT)^Δng. pH = -log[H+]. Buffer Henderson-Hasselbalch equation pH = pKa + log([Salt]/[Acid]). Precipitation occurs when Ionic Product > Ksp.",
          strategy: "Adding an inert gas at constant volume has no effect on equilibrium position. At constant pressure, inert gas addition shifts equilibrium toward greater gas moles."
        },
        formulas: ["K_p = K_c(RT)^Δn", "pH = -log[H+]", "Henderson pH = pKa + log([Salt]/[Acid])"],
        quiz: []
      },
      redox: {
        name: "Redox Reactions",
        notes: {
          theoretical: "Redox chemistry involves electron transfer reactions, oxidation numbers, balancing half-reactions in acidic and basic media, and electrochemical titrations.",
          framework: "Oxidation state rules. Balancing by ion-electron method. Equivalent weight = Molar Mass / (change in oxidation number per mole).",
          strategy: "Fluorine always exhibits -1 oxidation state in compounds. Oxygen is -2 except in peroxides (-1), superoxides (-1/2), and OF₂ (+2)."
        },
        formulas: ["Oxidation Number balance", "E_cell = E_cathode - E_anode"],
        quiz: []
      },
      electrochemistry: {
        name: "Electrochemistry",
        notes: {
          theoretical: "Electrochemistry bridges chemical energy and electrical work in galvanic and electrolytic cells, governed by Nernst equation, standard potentials, and Faraday's laws of electrolysis.",
          framework: "Nernst Equation E_cell = E°_cell - (0.0591/n) log Q. Faraday's First Law W = Z I t. Equivalent Conductivity Λ_eq = (κ × 1000) / N.",
          strategy: "E°_cell is an intensive property and does not depend on stoichiometric coefficients. ΔG° = -n F E°_cell is extensive."
        },
        formulas: ["Nernst Equation E = E_0 - (0.0591/n)*log(Q)", "Faraday's Law W = Z * I * t"],
        quiz: []
      },
      kinetics: {
        name: "Chemical Kinetics",
        notes: {
          theoretical: "Chemical Kinetics investigates reaction rates, order and molecularity, integrated rate laws, half-life periods, collision theory, and Arrhenius activation energy.",
          framework: "Zero order t_half = [A]_0 / 2k. First order t_half = 0.693 / k. Arrhenius Equation k = A e^(-Ea/RT) or log(k2/k1) = (Ea/2.303R) (1/T1 - 1/T2).",
          strategy: "Half-life of a first-order reaction is completely independent of the initial reactant concentration."
        },
        formulas: ["Rate = k[A]^x [B]^y", "Arrhenius Equation k = A * e^(-E_a / RT)", "First Order t_half = 0.693 / k"],
        quiz: []
      },
      surface: {
        name: "Surface Chemistry",
        notes: {
          theoretical: "Surface Chemistry deals with adsorption phenomena (physisorption vs chemisorption), catalysis mechanisms, and colloidal solutions (Tyndall effect, coagulation, Hardy-Schulze rule).",
          framework: "Freundlich Adsorption Isotherm x/m = k P^(1/n). Hardy-Schulze Rule: Flocculation power ∝ (Coagulating ion valency)⁴.",
          strategy: "Physisorption involves weak Van der Waals forces, is reversible, and forms multimolecular layers. Chemisorption forms irreversible unimolecular chemical bonds."
        },
        formulas: ["Freundlich Adsorption x/m = k * P^(1/n)"],
        quiz: []
      }
    },
    inorganic: {
      periodicity: {
        name: "Periodicity",
        notes: {
          theoretical: "Periodic Table classification details periodic trends in atomic/ionic radii, ionization enthalpy, electron gain enthalpy, electronegativity (Pauling scale), and effective nuclear charge.",
          framework: "Slater's Rules Z_eff = Z - S. Ionization Energy trend anomalies (IE1 of N > O due to half-filled p³ stability, IE1 of Be > B due to s² stability).",
          strategy: "Chlorine has higher negative electron gain enthalpy than Fluorine due to smaller inter-electronic repulsions in Chlorine's larger 3p subshell."
        },
        formulas: ["Z_effective = Z - S", "Electronegativity = (IE + EA) / 5.6"],
        quiz: []
      },
      bonding: {
        name: "Chemical Bonding & Molecular Structure",
        notes: {
          theoretical: "Chemical Bonding explains ionic, covalent, and metallic bonds using VSEPR theory, hybridization (sp, sp2, sp3, sp3d, sp3d2), Molecular Orbital Theory (MOT), and hydrogen bonding.",
          framework: "Bond Order = ½ (N_b - N_a). Dipole moment μ = q × d. Formal Charge = V - L - ½ B.",
          strategy: "Species with fractional bond orders are paramagnetic. O₂ is paramagnetic with bond order 2 due to 2 unpaired electrons in antibonding π*2p orbitals."
        },
        formulas: ["Bond Order = 0.5 * (N_b - N_a)", "Formal Charge = V - L - 0.5*B"],
        quiz: []
      },
      s_block: {
        name: "s-Block Elements",
        notes: {
          theoretical: "s-Block Elements covers Alkali (Group 1) and Alkaline Earth (Group 2) metals, anomalous lithium/beryllium behavior, diagonal relationships, and industrial compounds (NaOH, Na₂CO₃, CaO).",
          framework: "Hydration enthalpy ∝ 1 / ionic radius. Flame test colorations (Li red, Na yellow, K violet, Ca brick red, Sr crimson, Ba apple green).",
          strategy: "Thermal stability of carbonates, nitrates, and sulfates of Group 1 and 2 increases down the group as cation polarizability decreases."
        },
        formulas: ["Hydration Energy ∝ 1/Radius", "Thermal Stability of Carbonates increases down the group"],
        quiz: []
      },
      p_block: {
        name: "p-Block Elements",
        notes: {
          theoretical: "p-Block Elements explores Groups 13 to 18, covering inert pair effect, allotropy (carbon, phosphorus, sulfur), oxyacids of N, P, S, halogens, and interhalogen chemistry.",
          framework: "Inert pair effect causes lower oxidation states (+1 in Group 13, +2 in Group 14, +3 in Group 15) to become increasingly stable down the group.",
          strategy: "Acidic strength of halogen oxoacids increases with higher oxidation state of central halogen atom (HClO < HClO₂ < HClO₃ < HClO₄)."
        },
        formulas: ["Inert Pair Effect stability increases down the group", "Acidic strength: HF < HCl < HBr < HI"],
        quiz: []
      },
      d_f_block: {
        name: "d- and f-Block Elements",
        notes: {
          theoretical: "d- and f-Block Elements focuses on transition metal properties (variable oxidation states, catalytic behavior, colored ions, complex formation) and lanthanoid/actinoid contraction.",
          framework: "Spin-only magnetic moment μ = √(n(n+2)) BM. Lanthanoid contraction causes almost identical atomic radii for 4d and 5d series pairs (Zr-Hf, Nb-Ta).",
          strategy: "Sc³⁺ and Zn²⁺ compounds are diamagnetic and colorless because they have empty (d⁰) or fully filled (d¹⁰) d-subshells respectively."
        },
        formulas: ["Magnetic Moment μ = sqrt(n(n+2)) BM", "Lanthanoid Contraction causes size similarity in 4d & 5d"],
        quiz: []
      },
      coordination: {
        name: "Coordination Compounds",
        notes: {
          theoretical: "Chemical Coordination covers endocrine glands (Hypothalamus, Pituitary, Thyroid, Adrenal, Pancreas, Parathyroid) and molecular mechanisms of peptide vs steroid hormones.",
          framework: "Hypothalamus-Pituitary portal axis. Insulin lowers blood glucose; Glucagon raises it. Parathyroid hormone PTH increases blood Ca²⁺ whereas Calcitonin lowers it.",
          strategy: "Peptide hormones (insulin, glucagon) bind cell-surface receptors generating secondary messengers (cAMP, IP3), whereas steroid hormones enter target cells directly to regulate gene expression."
        },
        notes: {
          theoretical: "Coordination Compounds studies IUPAC nomenclature, Werner's coordination theory, isomerism (structural & stereoisomerism), Crystal Field Theory (CFT), and spectrochemical series.",
          framework: "Effective Atomic Number EAN = Z - ON + 2(CN). CFT Splitting Energy Δ_o (Octahedral vs Tetrahedral Δ_t = 4/9 Δ_o).",
          strategy: "Strong field ligands (CN⁻, CO, ethylenediamine) cause pairing of d-electrons leading to low-spin inner orbital complexes."
        },
        formulas: ["CFSE = -0.4 * t2g * Δo + 0.6 * eg * Δo", "Effective Atomic Number EAN = Z - ON + 2 * CN"],
        quiz: []
      }
    },
    organic: {
      principles: {
        name: "Basic Principles & Techniques",
        notes: {
          theoretical: "Basic Principles of Organic Chemistry covers IUPAC nomenclature, electronic effects (Inductive, Resonance, Hyperconjugation, Electromeric), reaction intermediates, and stereochemistry.",
          framework: "Carbocation stability: 3° > 2° > 1° > CH₃⁺ (stabilized by hyperconjugation and +I effect). Carbanion stability: CH₃⁻ > 1° > 2° > 3°.",
          strategy: "Resonance stabilization outweighs inductive effect except in halogens, where the -I effect dominates over +R for net electron withdrawal."
        },
        formulas: ["Inductive, Resonance, and Electromeric Effects", "Carbocation stability: 3° > 2° > 1° > Methyl"],
        quiz: []
      },
      hydrocarbons: {
        name: "Hydrocarbons",
        notes: {
          theoretical: "Hydrocarbons covers preparation and reactions of Alkanes (Wurtz, free radical substitution), Alkenes (electrophilic addition, Markovnikov rule, ozonolysis), Alkynes, and Aromaticity (Hückel 4n+2 rule).",
          framework: "Markovnikov addition: electrophile H+ adds to the carbon with more hydrogen atoms. Anti-Markovnikov addition occurs in peroxide-catalyzed HBr addition.",
          strategy: "Ozonolysis cleaves double/triple bonds to form aldehydes/ketones. Count total π-electrons to check Hückel 4n+2 rule for aromaticity."
        },
        formulas: ["Wurtz Reaction: 2R-X + 2Na -> R-R + 2NaX", "Markovnikov's addition rules"],
        quiz: []
      },
      haloalkanes: {
        name: "Haloalkanes & Haloarenes",
        notes: {
          theoretical: "Haloalkanes and Haloarenes details nucleophilic substitution mechanisms (SN1 vs SN2), elimination reactions (Saytzeff rule), Grignard reagents, and environmental effects of CFCs.",
          framework: "SN1 mechanism: 2 steps, carbocation intermediate, racemization, rate ∝ [R-X] (3° > 2° > 1°). SN2 mechanism: 1 step, Walden inversion, rate ∝ [R-X][Nu⁻] (1° > 2° > 3°).",
          strategy: "Polar protic solvents (H₂O, EtOH) favor SN1 by stabilizing carbocation intermediates, whereas polar aprotic solvents (acetone, DMSO) favor SN2."
        },
        formulas: ["SN1 rate ∝ [Substrate]", "SN2 rate ∝ [Substrate][Nucleophile]"],
        quiz: []
      },
      alcohols: {
        name: "Alcohols, Phenols, & Ethers",
        notes: {
          theoretical: "Alcohols, Phenols, and Ethers covers hydration, oxidation, Lucas test distinction, acidic nature of phenols due to phenoxide resonance, Reimer-Tiemann, and Williamson ether synthesis.",
          framework: "Lucas Test (ZnCl₂/HCl): 3° alcohols react instantly (turbidity), 2° in 5 mins, 1° do not react at room temp. Phenol acidity boosted by electron-withdrawing groups (-NO₂).",
          strategy: "Williamson Ether Synthesis yields best results when reacting primary alkyl halides with sodium alkoxides to avoid competing E2 elimination."
        },
        formulas: ["Lucas Test: 3° Alcohols react instantly", "Phenol acidity due to resonance stabilization"],
        quiz: []
      },
      carbonyls: {
        name: "Aldehydes, Ketones, & Carboxylic Acids",
        notes: {
          theoretical: "Aldehydes, Ketones, and Carboxylic Acids explores nucleophilic addition reactions, Aldol condensation, Cannizzaro reaction, Tollens/Fehling tests, and acidic strength of carboxylic acids.",
          framework: "Aldol condensation requires α-hydrogens on carbonyl. Cannizzaro reaction occurs in aldehydes lacking α-hydrogens (e.g., HCHO, PhCHO) under concentrated NaOH.",
          strategy: "Tollens' reagent (silver mirror test) oxidizes both aliphatic and aromatic aldehydes, whereas Fehling's solution oxidizes only aliphatic aldehydes."
        },
        formulas: ["Aldol Condensation: α-hydrogen requirement", "Cannizzaro Reaction: no α-hydrogen"],
        quiz: []
      },
      amines: {
        name: "Amines",
        notes: {
          theoretical: "Amines details preparation (Hoffmann bromamide degradation, Gabriel phthalimide synthesis), basicity order in aqueous/gas phases, Hinsberg test separation, and diazonium salt reactions.",
          framework: "Hinsberg reagent (benzenesulfonyl chloride) reacts with 1° amine to give alkali-soluble product, 2° amine product insoluble in alkali, 3° amine does not react.",
          strategy: "Aqueous basicity order for methyl-substituted amines: 2° (231) > 1° > 3° > NH₃. For ethyl-substituted amines: 2° (213) > 3° > 1° > NH₃."
        },
        formulas: ["Hinsberg Test: separates 1°, 2°, 3° Amines", "Basicity: aliphatic > ammonia > aromatic amines"],
        quiz: []
      },
      biomolecules: {
        name: "Biomolecules",
        notes: {
          theoretical: "Biomolecules details structure and biochemical roles of carbohydrates, lipids, proteins, nucleic acids, and enzyme action mechanisms (Michaelis-Menten kinetics).",
          framework: "Enzyme catalytic speed: Michaelis constant Km is the substrate concentration at ½ Vmax. Competitive inhibitors increase Km without changing Vmax.",
          strategy: "Competitive inhibition (e.g., Malonate inhibiting Succinate Dehydrogenase) can be overcome by increasing substrate concentration."
        },
        notes: {
          theoretical: "Biomolecules details structure and functions of Carbohydrates (glucose, fructose, Haworth projections), Proteins (amino acids, peptide bonds, denaturation), Nucleic Acids (DNA, RNA), and Enzymes.",
          framework: "Isoelectric point pH_I = (pKa1 + pKa2) / 2 for amino acids. DNA double helix base pairing: Adenine-Thymine (2 H-bonds), Guanine-Cytosine (3 H-bonds).",
          strategy: "Glucose and Fructose are functional isomers. Denaturation destroys secondary and tertiary protein structures while leaving primary peptide sequence intact."
        },
        formulas: ["Isoelectric point of amino acids pH_I = (pKa1 + pKa2)/2"],
        quiz: []
      },
      polymers: {
        name: "Polymers & Everyday Chemistry",
        notes: {
          theoretical: "Polymers and Everyday Chemistry explores classification of polymers (addition vs condensation, elastomers, thermoplastics, thermosetting), synthetic rubbers, and drugs (antipyretics, antibiotics).",
          framework: "Monomer pairings: Nylon-6,6 (Hexamethylenediamine + Adipic acid), Terylene (Ethylene glycol + Terephthalic acid), Bakelite (Phenol + Formaldehyde).",
          strategy: "Thermosetting polymers (Bakelite, Melamine) form heavily cross-linked 3D networks that cannot be remolded or softened upon heating."
        },
        formulas: ["Monomer units identification", "Thermosetting vs Thermoplastic polymers"],
        quiz: []
      }
    }
  },
  biology: {
    diversity_structure: {
      classification: {
        name: "Biological Classification",
        notes: {
          theoretical: "Biological Classification analyzes Whittaker's Five Kingdom System (Monera, Protista, Fungi, Plantae, Animalia), viral structure, viroids, prions, and taxonomic hierarchy.",
          framework: "Kingdom Monera includes prokaryotes (eubacteria, archaebacteria). Protista encompasses unicellular eukaryotes (amoeba, paramecium). Fungi feature chitinous cell walls and heterotrophic nutrition.",
          strategy: "Archaebacteria survive in extreme environments (halophiles, thermoacidophiles, methanogens) due to unique branched-chain lipid cell membrane structures."
        },
        formulas: ["Five Kingdom Classification (Monera, Protista, Fungi, Plantae, Animalia)"],
        quiz: []
      },
      plant_kingdom: {
        name: "Plant Kingdom",
        notes: {
          theoretical: "Plant Kingdom surveys Algae, Bryophytes, Pteridophytes, Gymnosperms, and Angiosperms based on vascular organization, seed formation, and alternation of generations.",
          framework: "Bryophytes (amphibians of plant kingdom) have gametophyte (n) dominant phase. Pteridophytes introduced vascular tissue (xylem/phloem). Gymnosperms produce naked seeds.",
          strategy: "Double fertilization (syngamy yielding 2n zygote + triple fusion yielding 3n endosperm) is unique exclusively to Angiosperms."
        },
        formulas: ["Alternation of Generations: Gametophyte (n) to Sporophyte (2n)"],
        quiz: []
      },
      animal_kingdom: {
        name: "Animal Kingdom",
        notes: {
          theoretical: "Animal Kingdom classifies non-chordates and chordates across phyla (Porifera to Mammalia) using body symmetry, germ layers, coelom type, segmentation, and notochord.",
          framework: "Pseudocoelom is found exclusively in Phylum Aschelminthes (roundworms). Arthropoda is the largest phylum featuring chitinous exoskeleton and jointed appendages.",
          strategy: "Chordate diagnostic triad: Notochord, dorsal hollow nerve cord, and paired pharyngeal gill slits present at some developmental stage."
        },
        formulas: ["Symmetry: Bilateral vs Radial", "Coelom: Acoelomate, Pseudocoelomate, Coelomate"],
        quiz: []
      },
      morphology: {
        name: "Morphology & Anatomy of Flowering Plants",
        notes: {
          theoretical: "Morphology & Anatomy of Flowering Plants covers root, stem, leaf modifications, inflorescence types (racemose vs cymose), floral symmetry, placentation, and internal tissue organization.",
          framework: "Placentation types: Marginal (Pea), Axile (Tomato), Parietal (Mustard), Free Central (Dianthus), Basal (Sunflower). Monocot roots have polyarch xylem bundles.",
          strategy: "Monocot stems possess scattered vascular bundles without cambium (closed bundles, no secondary growth), whereas dicot stems feature ringed open bundles."
        },
        formulas: ["Root, Stem, Leaf modifications", "Xylem vs Phloem cell structure"],
        quiz: []
      },
      organization: {
        name: "Structural Organisation in Animals",
        notes: {
          theoretical: "Structural Organisation in Animals examines animal tissues (Epithelial, Connective, Muscular, Neural) and organ systems in model organisms like cockroach and frog.",
          framework: "Epithelial tissue types (squamous, cuboidal, columnar, ciliated). Connective tissues comprise bone, cartilage, adipose, and blood containing collagenous matrix.",
          strategy: "Tight junctions prevent substance leakage across tissues; Adhering junctions cement neighboring cells; Gap junctions facilitate rapid ion communication."
        },
        formulas: ["Epithelial, Connective, Muscular, and Nervous tissues"],
        quiz: []
      }
    },
    cell_biology: {
      cell_life: {
        name: "Cell: The Unit of Life",
        notes: {
          theoretical: "Cell: The Unit of Life covers Cell Theory, prokaryotic vs eukaryotic cell architecture, plasma membrane fluid mosaic model, endomembrane system, and organelle structures.",
          framework: "Fluid Mosaic Model (Singer & Nicolson): phospholipid bilayer with integral/peripheral proteins. Mitochondria and Chloroplasts contain 70S ribosomes and circular DNA.",
          strategy: "Mitochondria and Chloroplasts are semi-autonomous organelles originating via endosymbiosis. Lysosomes are rich in hydrolytic enzymes active at acidic pH (~5)."
        },
        formulas: ["Cell Theory: Schleiden, Schwann, and Virchow", "Prokaryotic vs Eukaryotic organelles"],
        quiz: []
      },
      biomolecules: {
        name: "Biomolecules (Enzymes, Lipids, Proteins)",
        formulas: ["Michaelis constant K_m", "Enzyme inhibition: Competitive vs Non-competitive"],
        quiz: []
      },
      cell_cycle: {
        name: "Cell Cycle & Division",
        notes: {
          theoretical: "Cell Cycle & Division investigates interphase (G1, S, G2 phase DNA synthesis), Mitotic chromosome segregation, and Meiotic reduction division leading to genetic variation.",
          framework: "S-phase doubles DNA content (2C to 4C) while chromosome number stays 2n. Meiosis I Prophase I stages: Leptotene, Zygotene (synapsis), Pachytene (crossing over), Diplotene (chiasmata), Diakinesis.",
          strategy: "Recombination and crossing over occur specifically during the Pachytene stage of Prophase I, mediated by the enzyme recombinase."
        },
        formulas: ["Mitosis: Prophase, Metaphase, Anaphase, Telophase", "Meiosis: Crossing over at Pachytene of Prophase I"],
        quiz: []
      }
    },
    plant_physiology: {
      transport: {
        name: "Transport & Mineral Nutrition",
        notes: {
          theoretical: "Transport in Plants and Mineral Nutrition explores water potential components, apoplast/symplast pathways, transpiration pull theory, phloem translocation, and essential elements.",
          framework: "Water potential Ψ_w = Ψ_s + Ψ_p. Transpiration pull theory (Cohesion-Tension model). Nitrogen cycle and biological nitrogen fixation by Rhizobium nitrogenase complex.",
          strategy: "Water always moves from higher water potential (less negative) to lower water potential (more negative). Pure water at standard pressure has Ψ_w = 0."
        },
        formulas: ["Water Potential Ψ_w = Ψ_s + Ψ_p", "Essential macronutrients and micronutrients"],
        quiz: []
      },
      photosynthesis: {
        name: "Photosynthesis",
        notes: {
          theoretical: "Photosynthesis explores light reaction Z-scheme (ATP & NADPH synthesis in thylakoids) and dark reaction carbon fixation pathways (C3 Calvin Cycle vs C4 Hatch-Slack pathway).",
          framework: "C4 plants avoid photorespiration via Kranz anatomy isolating RuBisCO in bundle sheath cells. Primary CO2 acceptor in C4 is PEP (phosphoenolpyruvate), producing oxaloacetate.",
          strategy: "Photorespiration (C2 cycle) occurs in C3 plants when RuBisCO binds O2 instead of CO2 under high temp and O2 levels, consuming ATP without producing sugar."
        },
        formulas: ["6CO2 + 6H2O -> C6H12O6 + 6O2", "Z-scheme of light reaction", "Calvin Cycle phases"],
        quiz: []
      },
      respiration: {
        name: "Respiration",
        notes: {
          theoretical: "Cellular Respiration covers anaerobic glycolysis, pyruvate decarboxylation, Krebs TCA cycle in mitochondrial matrix, electron transport chain (ETC), and oxidative phosphorylation.",
          framework: "Glycolysis (EMBP pathway) converts 1 glucose into 2 pyruvate, yielding net 2 ATP and 2 NADH. Total theoretical yield from aerobic respiration is 36-38 ATP per glucose.",
          strategy: "Respiratory Quotient (RQ) = Vol of CO2 evolved / Vol of O2 consumed. RQ for carbohydrates = 1.0, fats ≈ 0.7, proteins ≈ 0.9, organic acids > 1.0."
        },
        formulas: ["Glycolysis yields 2 Pyruvate + 2 ATP + 2 NADH", "Krebs Cycle ATP yield per glucose = 36-38 ATP"],
        quiz: []
      },
      growth: {
        name: "Plant Growth & Development",
        notes: {
          theoretical: "Plant Growth & Development investigates plant hormones (Auxins, Gibberellins, Cytokinins, Abscisic Acid, Ethylene), photoperiodism, phytochrome signaling, and vernalization.",
          framework: "Auxin promotes apical dominance and rooting. Gibberellin causes internodal elongation (bolting). Cytokinin promotes cell division. ABA acts as stress hormone inducing stomatal closure.",
          strategy: "Ethylene is the sole gaseous plant hormone responsible for fruit ripening. ABA acts antagonistically to Gibberellins in seed dormancy."
        },
        formulas: ["Phytohormones: Auxin, Gibberellin, Cytokinin, ABA, Ethylene"],
        quiz: []
      }
    },
    human_physiology: {
      digestion: {
        name: "Digestion & Breathing",
        notes: {
          theoretical: "Digestion and Breathing covers human alimentary canal digestive enzymes (pepsin, trypsin, lipase), nutrient absorption, respiratory structures, pulmonary capacities, and gas exchange.",
          framework: "Human dental formula: 2123 / 2123. Vital Capacity VC = TV + IRV + ERV. Oxygen dissociation curve shifts right (Bohr effect) under high pCO2, high H+, and high temp.",
          strategy: "Carbon monoxide has ~200 times higher affinity for hemoglobin than oxygen, forming stable carboxyhemoglobin and preventing O2 transport."
        },
        formulas: ["Dental Formula: 2123/2123", "Bohr Effect: Hemoglobin oxygen dissociation"],
        quiz: []
      },
      circulation: {
        name: "Body Fluids & Circulation",
        notes: {
          theoretical: "Body Fluids & Circulation explores blood plasma components, formed elements, ABO/Rh blood grouping, double circulation, cardiac cycle phases, ECG waves, and blood pressure regulation.",
          framework: "Cardiac Output = Stroke Volume (~70 mL) × Heart Rate (~72 bpm) ≈ 5 L/min. ECG waves: P-wave (atrial depolarization), QRS complex (ventricular depolarization), T-wave (ventricular repolarization).",
          strategy: "Erythroblastosis fetalis occurs when an Rh-negative mother carries an Rh-positive fetus during second pregnancy due to maternal anti-Rh IgG antibodies."
        },
        formulas: ["Cardiac Output = Stroke Volume * Heart Rate", "ECG: P-wave, QRS complex, T-wave"],
        quiz: []
      },
      excretion: {
        name: "Excretory Products",
        notes: {
          theoretical: "Excretory Products & Elimination details nephron anatomy, ultrafiltration at glomerulus, selective tubular reabsorption, countercurrent mechanism, and hormonal regulation (ADH, RAAS).",
          framework: "Glomerular Filtration Rate GFR ≈ 125 mL/min (180 L/day). Loop of Henle countercurrent multiplier maintains medullary osmotic gradient (300 to 1200 mOsmol/L).",
          strategy: "ADH (Vasopressin) increases water reabsorption in distal convoluted tubule and collecting duct, producing concentrated urine. ANF opposes RAAS by inducing vasodilation."
        },
        formulas: ["Glomerular Filtration Rate GFR = 125 mL/min", "Countercurrent multiplier mechanism in Loop of Henle"],
        quiz: []
      },
      locomotion: {
        name: "Locomotion",
        notes: {
          theoretical: "Locomotion and Movement explores skeletal muscle ultrastructure, sliding filament theory of muscle contraction (actin, myosin, troponin, tropomyosin), axial/appendicular skeleton, and joint types.",
          framework: "Sarcomere is the functional unit between two Z-lines. During contraction, H-zone and I-band shorten while A-band length remains constant.",
          strategy: "Troponin-C binds Ca²⁺ ions released from sarcoplasmic reticulum, causing tropomyosin to shift and expose myosin-binding sites on actin filaments."
        },
        formulas: ["Sarcomere structure: Actin and Myosin filaments", "Types of joints: Synovial, Cartilaginous, Fibrous"],
        quiz: []
      },
      neural: {
        name: "Neural Control",
        notes: {
          theoretical: "Neural Control & Coordination details neuron structure, nerve impulse conduction across myelinated axons (resting potential, action potential depolarization), synapses, and brain central processing.",
          framework: "Resting membrane potential (-70 mV) maintained by Na+/K+ ATPase pump (3 Na+ out / 2 K+ in). Action potential depolarization caused by rapid influx of Na+ through voltage-gated channels.",
          strategy: "Transmission across chemical synapses involves neurotransmitter release (e.g. Acetylcholine) triggered by Ca²⁺ influx into presynaptic axon terminals."
        },
        formulas: ["Resting membrane potential = -70 mV", "Reflex arc components"],
        quiz: []
      },
      coordination: {
        name: "Chemical Coordination (Hormones)",
        formulas: ["Hypothalamus-Pituitary axis", "Mechanism of peptide vs steroid hormones"],
        quiz: []
      }
    },
    reproduction_genetics: {
      reproduction: {
        name: "Plant & Human Reproduction",
        notes: {
          theoretical: "Reproduction in Plants & Humans covers microsporogenesis/megasporogenesis in flower ovules, male/female human reproductive organs, gametogenesis, menstrual cycle phases, and fertilization.",
          framework: "Menstrual cycle: LH surge triggers ovulation on ~14th day. Human blastocyst implants into endometrial lining. Embryonic chorionic gonadotropin (hCG) maintains corpus luteum.",
          strategy: "Double fertilization in angiosperms produces diploid zygote (2n) and triploid primary endosperm nucleus (3n)."
        },
        formulas: ["Double Fertilization: Zygote (2n) + Endosperm (3n)", "Spermatogenesis and Oogenesis stages"],
        quiz: []
      },
      mendelian: {
        name: "Mendelian Genetics",
        notes: {
          theoretical: "Mendelian Genetics explores inheritance principles (Dominance, Segregation, Independent Assortment), monohybrid/dihybrid crosses, incomplete dominance, codominance, and sex-linked traits.",
          framework: "Monohybrid ratio: 3:1 phenotypic, 1:2:1 genotypic. Dihybrid phenotypic ratio: 9:3:3:1. ABO blood groups exhibit codominance (I^A and I^B) and multiple alleles.",
          strategy: "Test cross involves crossing an individual displaying dominant phenotype with a homozygous recessive parent to reveal the unknown genotype."
        },
        formulas: ["Monohybrid Ratio = 3:1 (Phenotypic) / 1:2:1 (Genotypic)", "Dihybrid Phenotypic Ratio = 9:3:3:1"],
        quiz: []
      },
      molecular: {
        name: "Molecular Basis of Inheritance (DNA/RNA)",
        notes: {
          theoretical: "Molecular Basis of Inheritance details DNA double helix structure, Hershey-Chase experiment, Meselson-Stahl semi-conservative replication, Transcription, Genetic Code, Translation, and Lac Operon.",
          framework: "Chargaff's Rule: A = T, G = C; (A+G)/(T+C) = 1. Central Dogma: DNA -> RNA -> Protein. Lac Operon repressor protein binds operator in absence of lactose (inducer).",
          strategy: "Genetic code is universal, degenerate (multiple codons per amino acid), non-overlapping, and unambiguous. AUG functions as start codon coding for Methionine."
        },
        formulas: ["Chargaff's Rule: A + G = T + C", "Transcription and Translation direction: 5' to 3'"],
        quiz: []
      },
      evolution: {
        name: "Evolution",
        notes: {
          theoretical: "Evolution explores theories of origin of life (Oparin-Haldane, Miller-Urey), Darwinian natural selection, homologous vs analogous structures, adaptive radiation, and Hardy-Weinberg equilibrium.",
          framework: "Hardy-Weinberg Equation: p² + 2pq + q² = 1. Homologous organs (same origin, different function e.g. human arm & bat wing) show divergent evolution.",
          strategy: "Analogous organs (different origin, same function e.g. insect wing & bird wing) demonstrate convergent evolution driven by similar ecological pressures."
        },
        formulas: ["Hardy-Weinberg equilibrium: p^2 + 2pq + q^2 = 1", "Homologous vs Analogous organs"],
        quiz: []
      }
    },
    biotechnology_ecology: {
      biotech: {
        name: "Principles & Applications",
        notes: {
          theoretical: "Biotechnology Principles & Applications details recombinant DNA technology, restriction endonucleases, plasmid vectors, PCR amplification, Bt cotton, gene therapy, and RNA interference.",
          framework: "Restriction enzymes cut at specific palindromic DNA sequences. Polymerase Chain Reaction (PCR) stages: Denaturation (94°C), Annealing (55°C), Extension (72°C using Taq polymerase).",
          strategy: "Taq DNA polymerase isolated from Thermus aquaticus is thermostable and remains active during high-temperature PCR denaturation steps."
        },
        formulas: ["Recombinant DNA: Restriction enzymes and Ligases", "PCR steps: Denaturation, Annealing, Extension"],
        quiz: []
      },
      health: {
        name: "Human Health and Disease",
        notes: {
          theoretical: "Human Health and Disease investigates infectious pathogens (Malaria, Typhoid, Pneumonia, AIDS), immunity (Innate, Acquired, Active, Passive), vaccines, allergies, and cancer biology.",
          framework: "Plasmodium life cycle: sexual cycle in female Anopheles mosquito, asexual schizogony in human liver/RBCs. Antibodies (IgG, IgA, IgM, IgE, IgD) possess 2 heavy and 2 light chains.",
          strategy: "IgA is present in colostrum providing passive immunity to newborns. IgE mediates allergic hypersensitivity reactions by releasing histamine from mast cells."
        },
        formulas: ["Active vs Passive Immunity", "Pathogens: Malaria life cycle, Typhoid, AIDS"],
        quiz: []
      },
      populations: {
        name: "Populations",
        notes: {
          theoretical: "Organisms and Populations explores ecological adaptations, biotic interactions (mutualism, competition, predation, parasitism, commensalism), population growth models, and age pyramids.",
          framework: "Exponential growth dN/dt = rN. Logistic growth dN/dt = rN (1 - N/K) where K is carrying capacity and r is intrinsic rate of natural increase.",
          strategy: "Gause's Competitive Exclusion Principle states two closely related species competing for identical limited resources cannot coexist indefinitely."
        },
        formulas: ["Population growth equation: dN/dt = rN(1 - N/K)"],
        quiz: []
      },
      ecology: {
        name: "Ecosystems & Biodiversity",
        notes: {
          theoretical: "Ecosystems & Biodiversity details ecological pyramids of energy/biomass, energy flow (Lindeman's 10% law), biogeochemical cycles, biodiversity hot spots, and conservation strategies.",
          framework: "Lindeman's 10% Law: only ~10% of energy is transferred to next trophic level. Pyramids of energy are ALWAYS upright in all ecosystems.",
          strategy: "In situ conservation protects species in natural habitats (National Parks, Biosphere Reserves), whereas Ex situ conservation involves Seed Banks and Zoos."
        },
        formulas: ["Lindeman's 10% Energy Law", "Species-Area relationship: log S = log C + Z log A"],
        quiz: []
      }
    }
  },
  mathematics: {
    algebra: {
      sets: {
        name: "Sets, Relations, & Functions",
        notes: {
          theoretical: "Sets, Relations, and Functions explores set operations (union, intersection, Cartesian product), relation properties (reflexive, symmetric, transitive, equivalence), and function mappings.",
          framework: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B). Bijective function is both injective (one-to-one) and surjective (onto), allowing an invertible inverse function f⁻¹.",
          strategy: "To verify an equivalence relation, systematically check all three requirements: reflexivity (aRa), symmetry (aRb ⇒ bRa), and transitivity (aRb & bRc ⇒ aRc)."
        },
        formulas: ["n(A U B) = n(A) + n(B) - n(A ∩ B)", "Domain and Range calculation"],
        quiz: []
      },
      complex: {
        name: "Complex Numbers & Quadratics",
        notes: {
          theoretical: "Complex Numbers and Quadratic Equations covers complex algebra, Euler's formula e^(iθ) = cos θ + i sin θ, De Moivre's theorem, cube roots of unity, and quadratic roots/discriminant.",
          framework: "Cube roots of unity: 1 + ω + ω² = 0 and ω³ = 1. Quadratic ax² + bx + c = 0 has roots α, β with α+β = -b/a, αβ = c/a. Discriminant D = b² - 4ac.",
          strategy: "Modulus |z1 + z2| ≤ |z1| + |z2| (Triangle Inequality). Conjugate of complex number z = x + iy is z̄ = x - iy, with z z̄ = |z|²."
        },
        formulas: ["1 + ω + ω^2 = 0", "z = x + iy = r * e^(iθ)", "Roots of quadratic ax^2 + bx + c = 0"],
        quiz: []
      },
      inequalities: {
        name: "Linear Inequalities",
        notes: {
          theoretical: "Linear Inequalities and Absolute Value equations study domain intervals, sign-scheme (wavy curve) methods, arithmetic-geometric mean inequalities (AM ≥ GM ≥ HM).",
          framework: "For positive real numbers: AM = (a+b)/2 ≥ GM = √(ab) ≥ HM = 2ab/(a+b). Absolute value inequality |x| < a ⇔ -a < x < a.",
          strategy: "When multiplying or dividing both sides of an inequality by a negative number, always reverse the inequality sign."
        },
        formulas: ["Interval notation, sign scheme method"],
        quiz: []
      },
      permutations: {
        name: "Permutations & Combinations",
        notes: {
          theoretical: "Permutations and Combinations deals with fundamental counting principles, factorial notation, arrangements of distinct and duplicate items, combinations, and circular permutations.",
          framework: "Permutations nPr = n! / (n-r)!. Combinations nCr = n! / [r! (n-r)!]. Circular permutations of n distinct objects = (n-1)!.",
          strategy: "Remember identity nCr = nC(n-r) and Pascal's identity nCr + nC(r-1) = (n+1)Cr."
        },
        formulas: ["nPr = n! / (n - r)!", "nCr = n! / (r! * (n - r)!)"],
        quiz: []
      },
      binomial: {
        name: "Binomial Theorem",
        notes: {
          theoretical: "Binomial Theorem expands (a + b)^n for positive integer and rational indices, determining general terms, middle terms, greatest terms, and binomial coefficients properties.",
          framework: "General term T_(r+1) = nCr a^(n-r) b^r. Sum of binomial coefficients C0 + C1 + ... + Cn = 2^n. Sum of even/odd coefficients = 2^(n-1).",
          strategy: "If n is even, there is 1 middle term at r = n/2. If n is odd, there are 2 middle terms at r = (n-1)/2 and r = (n+1)/2."
        },
        formulas: ["General term T_(r+1) = nCr * a^(n-r) * b^r"],
        quiz: []
      },
      sequences: {
        name: "Sequences & Series (AP, GP, HP)",
        notes: {
          theoretical: "Sequences and Series analyzes Arithmetic Progressions (AP), Geometric Progressions (GP), Harmonic Progressions (HP), arithmetico-geometric series, and special sum of series.",
          framework: "AP sum S_n = n/2 [2a + (n-1)d]. GP sum S_n = a(r^n - 1)/(r-1); infinite GP sum S_∞ = a / (1 - r) for |r| < 1.",
          strategy: "Sum of first n natural numbers Σn = n(n+1)/2. Sum of squares Σn² = n(n+1)(2n+1)/6. Sum of cubes Σn³ = [n(n+1)/2]²."
        },
        formulas: ["AP Sum S_n = n/2 * (2a + (n-1)d)", "GP Sum S_n = a(r^n - 1) / (r - 1)"],
        quiz: []
      },
      matrices: {
        name: "Matrices & Determinants",
        notes: {
          theoretical: "Matrices and Determinants explores matrix operations, transpose, symmetric/skew-symmetric matrices, determinant properties, matrix inversion, and Cramer's rule for linear systems.",
          framework: "Inverse Matrix A⁻¹ = (1 / |A|) adj(A). System AX = B has unique solution X = A⁻¹ B if |A| ≠ 0. Cramer's Rule x = D1/D, y = D2/D, z = D3/D.",
          strategy: "If |A| = 0 and (adj A)B ≠ 0, the system of equations has NO solution (inconsistent). If |A| = 0 and (adj A)B = 0, infinitely many solutions exist."
        },
        formulas: ["A * A^-1 = I", "Cramer's Rule for system of linear equations"],
        quiz: []
      }
    },
    trigonometry: {
      identities: {
        name: "Functions & Identities",
        notes: {
          theoretical: "Trigonometric Functions & Identities covers compound angle formulas, multiple/submultiple angles, sum-to-product transformations, trigonometric equations, and general solutions.",
          framework: "sin²A + cos²A = 1. sin(A±B) = sinA cosB ± cosA sinB. cos 2A = cos²A - sin²A = 2cos²A - 1 = 1 - 2sin²A. tan 2A = 2tanA / (1 - tan²A).",
          strategy: "General solution for sin θ = sin α is θ = nπ + (-1)ⁿ α. General solution for cos θ = cos α is θ = 2nπ ± α."
        },
        formulas: ["sin^2(A) + cos^2(A) = 1", "sin(2A) = 2sin(A)cos(A)", "cos(2A) = cos^2(A) - sin^2(A)"],
        quiz: []
      },
      inverse: {
        name: "Inverse Trigonometric Functions",
        notes: {
          theoretical: "Inverse Trigonometric Functions explores principal domain and range bounds for sin⁻¹x, cos⁻¹x, tan⁻¹x, and key transformation properties and identities.",
          framework: "sin⁻¹(x) + cos⁻¹(x) = π/2 for x ∈ [-1, 1]. tan⁻¹(x) + tan⁻¹(y) = tan⁻¹[(x+y)/(1-xy)] for xy < 1.",
          strategy: "Always restrict inverse trigonometric expressions to their principal value branches: sin⁻¹x ∈ [-π/2, π/2], cos⁻¹x ∈ [0, π]."
        },
        formulas: ["sin^-1(x) + cos^-1(x) = π/2", "tan^-1(x) + tan^-1(y) = tan^-1((x+y)/(1-xy))"],
        quiz: []
      }
    },
    geometry: {
      lines: {
        name: "Straight Lines",
        notes: {
          theoretical: "Straight Lines in 2D coordinate geometry studies slope, line forms (slope-intercept, point-slope, two-point, intercept, normal), distance formulas, and concurrency.",
          framework: "Distance d = √[(x2-x1)² + (y2-y1)²]. Perpendicular distance from point (x1, y1) to ax + by + c = 0 is |ax1 + by1 + c| / √(a² + b²). Angle between lines tan θ = |(m2 - m1) / (1 + m1 m2)|.",
          strategy: "Two lines are parallel if m1 = m2. They are perpendicular if m1 × m2 = -1."
        },
        formulas: ["Slope m = (y2 - y1) / (x2 - x1)", "Equation y - y1 = m(x - x1)", "Distance d = |ax1 + by1 + c| / sqrt(a^2 + b^2)"],
        quiz: []
      },
      conics: {
        name: "Conic Sections (Circles, Parabola, Ellipse, Hyperbola)",
        notes: {
          theoretical: "Conic Sections explores standard equations, eccentricity, focal properties, tangents, and normal equations for Circles, Parabolas, Ellipses, and Hyperbolas.",
          framework: "Circle (x-h)² + (y-k)² = r². Parabola y² = 4ax (e = 1). Ellipse x²/a² + y²/b² = 1 (e = √(1 - b²/a²) < 1). Hyperbola x²/a² - y²/b² = 1 (e = √(1 + b²/a²) > 1).",
          strategy: "Eccentricity e = 0 for circle, e = 1 for parabola, 0 < e < 1 for ellipse, e > 1 for hyperbola, e = √2 for rectangular hyperbola."
        },
        formulas: ["Circle x^2 + y^2 = r^2", "Parabola y^2 = 4ax", "Ellipse x^2/a^2 + y^2/b^2 = 1"],
        quiz: []
      }
    }
  },

  // CEE Nepal Mental Agility Test (MAT) seed pool (10 standard high-quality questions)
  mentalAgility: [
    { id: 1, type: "MAT", question: "Which number should come next in the sequence: 2, 6, 12, 20, 30, ...?", options: ["38", "40", "42", "46"], correct: 2, explanation: "The differences between consecutive terms are +4, +6, +8, +10. Following this pattern, the next difference must be +12. 30 + 12 = 42." },
    { id: 2, type: "MAT", question: "If 'DOCTOR' is coded as 'FQAQRT', how would 'PATIENT' be coded under the same logic?", options: ["RCVKGPV", "RCVKGRV", "RDVJGNT", "RCVJGOT"], correct: 0, explanation: "The coding shifts letters forward in the alphabet by +2: P(+2)->R, A(+2)->C, T(+2)->V, I(+2)->K, E(+2)->G, N(+2)->P, T(+2)->V. This matches RCVKGPV." },
    { id: 3, type: "MAT", question: "Identify the odd one out from the following options:", options: ["Lungs", "Heart", "Kidneys", "Liver"], correct: 1, explanation: "Lungs, kidneys, and liver are primary excretory/metabolic organs. The heart is purely circulatory and hollow." },
    { id: 4, type: "MAT", question: "If 5 workers can build a wall in 12 days, how many days would it take 6 workers to build the same wall?", options: ["8 days", "10 days", "14 days", "15 days"], correct: 1, explanation: "Man-days remain constant: 5 * 12 = 60 man-days. Days required for 6 workers = 60 / 6 = 10 days." },
    { id: 5, type: "MAT", question: "Choose the word that is most opposite in meaning to 'OBSTINATE':", options: ["Stubborn", "Flexible", "Rigid", "Dogmatic"], correct: 1, explanation: "Obstinate means stubborn. The opposite is flexible." },
    { id: 6, type: "MAT", question: "Which letter replaces the question mark in the sequence: A, D, I, P, ...?", options: ["V", "W", "Y", "Z"], correct: 2, explanation: "The letters correspond to square numbers: A = 1st letter (1²), D = 4th letter (2²), I = 9th letter (3²), P = 16th (4²). The next is 25th (5²), which is Y." },
    { id: 7, type: "MAT", question: "A clock shows 3:15. What is the angle between the hour and minute hands?", options: ["0 degrees", "7.5 degrees", "15 degrees", "30 degrees"], correct: 1, explanation: "At 3:15, the hour hand has moved forward by 15 minutes. Speed of hour hand = 0.5 degrees/minute. Angle = 15 * 0.5 = 7.5 degrees." },
    { id: 8, type: "MAT", question: "Pointing to a photograph, Rohan said, 'Her brother's father is the only son of my grandfather.' How is the lady in the photograph related to Rohan?", options: ["Mother", "Aunt", "Sister", "Cousin"], correct: 2, explanation: "'Only son of Rohan's grandfather' is Rohan's father. 'Her brother's father' is that lady's father. Thus, they are siblings." },
    { id: 9, type: "MAT", question: "If '+' means '×', '×' means '÷', '÷' means '-', and '-' means '+', evaluate: 12 + 3 × 2 - 8 ÷ 4", options: ["18", "20", "22", "24"], correct: 2, explanation: "Substitute symbols: 12 × 3 ÷ 2 + 8 - 4 = 18 + 8 - 4 = 22." },
    { id: 10, type: "MAT", question: "A man walks 6 km North, then turns East and walks 8 km. How far is he from his starting point?", options: ["10 km", "12 km", "14 km", "16 km"], correct: 0, explanation: "Using Pythagoras theorem: d = sqrt(6^2 + 8^2) = 10 km." }
  ]
};
