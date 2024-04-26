"use client"
import React, { useState } from 'react';
import { sanitize } from './utils/miscellaneous';
import Loading from './loading';

interface NewsletterFormProps {
    status: string;
    message: string;
    onValidated: (data: any) => void; // Define the type of onValidated as a function that takes data and returns void
  }
  
  const NewsletterForm: React.FC<NewsletterFormProps> = ({ status, message, onValidated }) => {
    const [error, setError] = useState<string>('');
    const [email, setEmail] = useState<string>('');

  const handleFormSubmit = () => {
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    // Ensure onValidated is a function before calling it
    if (typeof onValidated === 'function') {
      const isFormValidated = onValidated({ EMAIL: email });

      if (isFormValidated) {
        // Optionally, you can reset the email input field after successful submission
        setEmail('');
      }
    } else {
      console.error('onValidated is not a function');
    }
  };

  const handleInputKeyEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleFormSubmit();
    }
  };
  

  const getMessage = () => {
    if (!message) return null;

    const result = message.split('-');
    const formattedMessage = result[1]?.trim();

    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <div>
      <h3 className="mb-1 uppercase font-bold">Subscribe to newsletter</h3>
      <div className="flex newsletter-input-fields">
        <div className="mc-field-group">
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Your email"
            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            onKeyUp={handleInputKeyEvent}
          />
        </div>
        <div className="button-wrap wp-block-button">
          <button
            className="cursor-pointer text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="min-h-42px">
        {status === 'sending' && (
          <Loading showSpinner message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false} />
        )}
        {(status === 'error' || error) && (
          <div className="text-red-700 pt-2">{error || getMessage()}</div>
        )}
        {status === 'success' && (
          <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;

