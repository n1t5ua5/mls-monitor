import "./styles/Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-text">© 2023 MLS Monitor - all rights reserved.</p>
      <p className="footer-note">
        <i>Video Demo:</i>{" "}
        <i><a href="https://YouTube.com/@mls-monitor">youtube.com/@mls-monitor</a></i>
      </p>
    </div>
  );
}

export default Footer;
