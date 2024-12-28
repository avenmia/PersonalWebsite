import React, { useState } from "react";
import "../styles.css";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <div className="mobile-menu-wrapper">
      <button
        aria-label="menu button"
        className="menu-btn"
        onClick={toggleMenu}
      >
        {open ? (
          <div id="close-icon" className="close-icon">
            <i className="fa-solid fa-xmark"></i>
          </div>
        ) : (
          <div id="open-icon" className="open-icon">
            <i className="fa-solid fa-bars"></i>
          </div>
        )}
      </button>
      {open ? (
        <nav className="mobile-navbar">
          <ul className="list--mobile-nav">
            <li>
              <a className="link page-nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="link page-nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className="link page-nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a
                className="link link__external social-link__github"
                href="https://github.com/avenmia/"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="link link__external social-link__linkedin"
                href="https://www.linkedin.com/in/michael-avendano/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="link link__external social-link__stackoverflow"
                href="https://stackoverflow.com/users/7331107/avenmia"
                rel="noopener noreferrer"
                target="_blank"
              >
                Stack Overflow
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default Menu;
