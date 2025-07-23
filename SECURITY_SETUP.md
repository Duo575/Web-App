# Security Setup Instructions

## ⚠️ URGENT: EmailJS Credentials Security

The previous EmailJS credentials were exposed in the source code and have been removed. **You must rotate these credentials immediately.**

### Steps to Secure Your EmailJS Setup:

1. **Rotate Your EmailJS Credentials:**

   - Go to https://www.emailjs.com/
   - Log into your account
   - Generate new Service ID, Template ID, and Public Key
   - Delete or disable the old credentials

2. **Set Up Environment Variables:**

   - Copy `.env.example` to `.env`
   - Replace the placeholder values with your new credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_new_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_new_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_new_public_key
     ```

3. **Verify Security:**
   - Ensure `.env` is in `.gitignore` (already added)
   - Never commit `.env` files to version control
   - The application will now show an error if credentials are missing

### Previous Exposed Credentials (COMPROMISED - DO NOT USE):

- Service ID: `service_l838mbn`
- Template ID: `template_nfkpahr`
- Public Key: `woKZf-ze5qhyBflSa`

## Other Security Improvements Made:

1. **Email Validation:** Added proper email format validation to the contact form
2. **Error Handling:** Improved error handling in image preloading to avoid silent failures
3. **CSS Optimization:** Reduced media query duplication for better maintainability

## Best Practices Going Forward:

- Never hardcode API keys, tokens, or credentials in source code
- Always use environment variables for sensitive configuration
- Regularly rotate API credentials
- Monitor for exposed secrets in your repositories
- Use tools like `git-secrets` to prevent accidental commits of sensitive data

## Testing the Contact Form:

After setting up the new credentials, test the contact form to ensure:

- Email validation works correctly
- Form submission succeeds with valid credentials
- Appropriate error messages show for missing/invalid data
