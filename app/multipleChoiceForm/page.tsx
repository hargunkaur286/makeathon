"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/components/MultipleChoiceForm.module.css' // Import CSS module for styling

const multipleChoiceForm = () => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false); // State to track if form is submitted
  const questions = [
    {
      id: 1,
      text: 'Do you follow a rigorous monthly budget? ',
      options: ['Absolutely!', 'I try my best', 'I have one but I sometimes fail to meet it','No, I do not']
    },
    {
      id: 2,
      text: 'How is your debt to income ratio per month? ',
      options: ['It is all under control! ', 'It is too high','Not sure','What is a debt to income ratio? I donot know']
    },
    {
      id: 3,
      text: 'How is your credit score?',
      options: ['Excellent ', 'Good credit', 'Fair', 'Really bad credit']
    },
    {
      id: 4,
      text: 'What about your retirement plans? How are they shaping up?  ',
      options: ['Got it under control. I can retire early','Concerned but I am trying hard','Terrified. I donot think I have enough','I donot think I can even think about retiring']
    },
    {
      id: 5,
      text: 'What about insurance? How is your insurance coverage? ',
      options: ['Everything is fully covered','Somewhat covered','Not enough','I havenot even thought about insurance yet!']
    },
    {
      id: 6,
      text: 'Do you fully understand the financial situation you are in?',
      options: ['Absolutely','Somewhat',' Maybe', 'Not at all']
    },
    {
      id: 7,
      text: 'How are your monthly expenses? ',
      options: ['Totally under control. I am able to save enough','Somewhat. I am able to save but not enough', 'No savings','I am in the red each month!']
    },
    {
      id: 8,
      text: 'How long will your emergency fund cover you?',
      options: ['1 year or 6 months','3 - 5 months max', 'About a month', 'No emergency fund']
    },
    {
      id: 9,
      text: 'Do you pay off your bill on time every month? ',
      options: ['Absolutely', 'Somewhat', 'Rarely', 'I can not seem to pay any bills!']
    },
    {
      id: 10,
      text: 'Do you fully know your investments, assets, liabilities, etc? ',
      options: ['Yes','Somewhat', 'Not sure', 'I have zero idea!']
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Set submitted state to true
    console.log('Form submitted:', formData);
  };

  return (
  <div className='mb-20'>
    <div className='mt-20 text-lg text-center jutify-center'>
      <h2> Headings</h2>
    </div>
    <form onSubmit={handleSubmit} className={styles.form}>
      {questions.map((question) => (
        <div key={question.id} className={styles.question}>
          <h3>{question.text}</h3>
          {question.options.map((option, index) => (
            <label key={index} className={styles.option}>
              <input
                type="radio"
                name={`question${question.id}`}
                value={option}
                onChange={handleInputChange}
                className={styles.radio}
              />
              <span className={styles.checkmark}></span>
              {option}
            </label>
          ))}
        </div>
      ))}
   {!submitted && (
  <Link href="/podcastData"> {/* Specify the path to the new page */}
      <button className={styles.button} type="submit">Submit</button>
  </Link>
)}
{submitted && <p>Thank you for submitting the form!</p>}
    </form>
    </div>
  );
};

export default multipleChoiceForm;

