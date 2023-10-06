import { useTheme } from "../ThemeContext";
import "./styles/Footer.css";
import React from "react";

function Footer() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`footer-container ${isDarkMode ? "dark-mode" : ""}`}>
      <p className="footer-text">© 2023 MLS Monitor - all rights reserved.</p>
      <button onClick={handleToggle}>
        {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default Footer;
