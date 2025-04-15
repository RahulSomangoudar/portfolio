import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Rahul Somangoudar. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
