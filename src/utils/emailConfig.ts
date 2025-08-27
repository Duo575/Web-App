/**
 * EmailJS Configuration
 * Purpose: Centralized email service configuration
 * Dependencies: @emailjs/browser
 * Features: Environment-based configuration, type safety
 */

// EmailJS Configuration Interface
export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

// Secure EmailJS Configuration
const getEmailConfig = (): EmailJSConfig => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn('EmailJS configuration missing. Contact form will not work.');
    return {
      serviceId: '',
      templateId: '',
      publicKey: ''
    };
  }

  return { serviceId, templateId, publicKey };
};

export const emailConfig = getEmailConfig();

// Email Template Parameters Interface
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  phone: string;
  scheduled_date?: string;
  scheduled_time?: string;
  message: string;
  to_name: string;
}

/**
 * Instructions for setting up EmailJS:
 *
 * 1. Go to https://www.emailjs.com/ and create an account
 * 2. Create a new email service (Gmail, Outlook, etc.)
 * 3. Create an email template with the following variables:
 *    - {{from_name}} - Sender's name
 *    - {{from_email}} - Sender's email
 *    - {{phone}} - Sender's phone number
 *    - {{scheduled_date}} - Selected date
 *    - {{scheduled_time}} - Selected time slot
 *    - {{message}} - Message content
 *    - {{to_name}} - Recipient name (your team)
 *
 * 4. Get your Service ID, Template ID, and Public Key
 * 5. Create a .env file in the project root with:
 *    VITE_EMAILJS_SERVICE_ID=your_service_id
 *    VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *    VITE_EMAILJS_PUBLIC_KEY=your_public_key
 *
 * 6. Or replace the values directly in this file (not recommended for production)
 */
