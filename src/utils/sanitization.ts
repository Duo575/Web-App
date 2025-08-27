/**
 * Input Sanitization Utilities
 * Purpose: Sanitize user inputs to prevent XSS and injection attacks
 */

// HTML entities to escape
const htmlEntities: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
};

/**
 * Escape HTML entities to prevent XSS
 */
export const escapeHtml = (text: string): string => {
  return text.replace(/[&<>"'/]/g, (match) => htmlEntities[match] || match);
};

/**
 * Sanitize email input
 */
export const sanitizeEmail = (email: string): string => {
  return email.trim().toLowerCase().replace(/[^\w@.-]/g, '');
};

/**
 * Sanitize phone number
 */
export const sanitizePhone = (phone: string): string => {
  return phone.replace(/[^\d+\-\s()]/g, '').trim();
};

/**
 * Sanitize text input (name, message)
 */
export const sanitizeText = (text: string): string => {
  return escapeHtml(text.trim()).substring(0, 1000); // Limit length
};

/**
 * Validate and sanitize form data
 */
export const sanitizeFormData = (data: Record<string, string>) => {
  return {
    name: sanitizeText(data.name || ''),
    email: sanitizeEmail(data.email || ''),
    phone: sanitizePhone(data.phone || ''),
    message: sanitizeText(data.message || ''),
    scheduledDate: data.scheduledDate || '',
    scheduledTime: data.scheduledTime || '',
  };
};