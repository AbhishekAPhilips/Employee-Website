import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <p>Get in touch for any support:</p>
        <ul>
          <li>
            Email: <a href="mailto:abhishek.a@philips.com">abhishek.a@philips.com</a>
          </li>
          <li>Phone no.: xxxxxxx</li>
        </ul>
        <p>
          For more information, visit the&nbsp;
          <a
            href="https://www.philips.co.in/healthcare/resources/landing/customer-services-portal/repository-faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Philips FAQ page
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;
