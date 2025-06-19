import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Philips. All rights reserved.</p>
        <p>
          <a href="https://www.philips.com" target="_blank" rel="noopener noreferrer" className="footer-link">Visit Philips Global</a>
          {" | "}
          <a href="https://www.philips.com/a-w/privacy-notice.html" target="_blank" rel="noopener noreferrer" className="footer-link">Privacy Notice</a>
          {" | "}
          <a href="https://www.philips.com/a-w/terms-of-use.html" target="_blank" rel="noopener noreferrer" className="footer-link">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
