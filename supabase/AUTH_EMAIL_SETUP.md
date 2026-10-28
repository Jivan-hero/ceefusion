# CeeFusion authentication email setup

The frontend supports:

- email/password sign-up with email confirmation;
- numeric email OTP verification via `verifyOtp`;
- password-reset emails and secure password updates.

## Required Supabase settings

1. Set the Site URL to `https://ceefusion.org`.
2. Add `https://ceefusion.org` and `https://ceefusion.org/**` to Redirect URLs.
3. Keep **Confirm email** enabled for the email provider.
4. Configure a production SMTP provider before enabling the OTP template.

## Confirm sign-up template for verification codes

Supabase only permits editing hosted-project templates after custom SMTP is configured. Use a subject such as:

```text
{{ .Token }} is your CeeFusion verification code
```

Use this body:

```html
<h2>Verify your CeeFusion email</h2>
<p>Enter this code on the CeeFusion verification screen:</p>
<p style="font-size:28px;font-weight:700;letter-spacing:6px">{{ .Token }}</p>
<p>This code expires shortly. If you did not create an account, ignore this email.</p>
```

Until custom SMTP is configured, Supabase sends its default confirmation-link email. The frontend supports that link as a fallback.

## Reset-password template

The default reset template works with the frontend because `resetPasswordForEmail` supplies an allow-listed CeeFusion redirect. A branded template can use `{{ .ConfirmationURL }}` after custom SMTP is configured.
