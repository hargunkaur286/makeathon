import DOMPurify from 'dompurify';

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = (content: string): string => {
  return process.browser ? DOMPurify.sanitize(content) : content;
};

/**
 * Get Singular or plural text.
 *
 * @param {number} count Count.
 * @param {string} text Text.
 *
 * @returns {string} Singular or plural from of text.
 */
export const getSingularOrPluralText = (count: number, text: string): string => {
  return count > 1 ? `${text}s` : text;
};
