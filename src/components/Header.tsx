import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <header>
      <div className="mobile-menu-wrapper">
        <button aria-label="menu button" className="menu-btn">
          <div id="close-icon" className="close-icon" data-state="hide">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="bar" data-state="visible"></div>
          <div className="bar" data-state="visible"></div>
          <div className="bar" data-state="visible"></div>
        </button>
        <nav className="mobile-navbar" data-state="close">
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
      </div>
      <nav className="navbar">
        <a
          className="navbar__link"
          href="https://github.com/avenmia/"
          aria-label="GitHub link"
          title="GitHub Link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-github-square fa-2x navbar__link__icon"></i>
        </a>
        <a
          className="navbar__link"
          href="https://www.linkedin.com/in/michael-avendano/"
          aria-label="LinkedIn link"
          title="LinkedIn Link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin fa-2x navbar__link__icon"></i>
        </a>
        <a
          className="navbar__link"
          href="https://stackoverflow.com/users/7331107/avenmia"
          aria-label="Stack Overflow link"
          title="Stack Overflow Link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-stack-overflow fa-2x navbar__link__icon"></i>
        </a>
      </nav>
      <div className="site-title">
        <div className="site-title__name"></div>
        <h2 className="site-title__job">SOFTWARE ENGINEER</h2>
      </div>
      <nav className="page-nav">
        <a className="page-nav__link" href="#about">
          ABOUT
        </a>
        <a className="page-nav__link" href="#experience">
          EXPERIENCE
        </a>
        <a className="page-nav__link" href="#projects">
          PROJECTS
        </a>
      </nav>
    </header>
  );
};

export default Header;
