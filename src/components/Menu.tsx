import { useState } from "react";
import "../styles.css";
import { pageSections, socialLinks } from "../content/navigation";

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
            {pageSections.map((section) => (
              <li key={section.id}>
                <a className="link page-nav-link" href={`#${section.id}`}>
                  {section.label}
                </a>
              </li>
            ))}
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  className={`link link__external ${social.modifierClass}`}
                  href={social.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default Menu;
