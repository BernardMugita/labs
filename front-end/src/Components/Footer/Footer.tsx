import React from "react";
import "./Footer.scss";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

type Props = {};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="right">
          <h1>JENZI</h1>
          <nav className="nav">
            <a href="#" className="nav-link">
              Privacy Policy
            </a>

            <a href="#" className="nav-link">
              Terms of Service
            </a>

            <a href="#" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
        <div className="center"></div>
        <div className="left">
          <p>
            <FaTwitter id="social" /> @jenzilabs
          </p>
          <p>
            <FaLinkedin id="social" /> jenzilabs
          </p>
        </div>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Jenzi Labs. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
