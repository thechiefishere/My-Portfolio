import React from "react";
import { FaTwitter, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-socials">
        <a href="https://github.com/thechiefishere">
          <FaGithubSquare className="footer-socials-git" />
        </a>
        <a href="twitter.com/JohnToriola">
          <FaTwitter className="footer-socials-twitter" />
        </a>
      </div>
      <p className="footer-details">
        &copy; Toriola John. All rights reserved. Built with React
      </p>
    </section>
  );
};

export default Footer;
