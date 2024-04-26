import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './NewsletterForm';

const NewsletterSubscribe: React.FC = () => {
  const MAILCHIMP_URL: string = process.env.NEXT_PUBLIC_MAILCHIMP_URL || '';

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={({ subscribe, status, message }: { subscribe: (formData: any) => void, status: string, message: string }) => (
        <NewsletterForm
          status={status}
          message={message}
          onValidated={(formData: FormData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default NewsletterSubscribe;

