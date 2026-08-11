import "../styles.css";
import Menu from "./Menu";
import { pageSections, socialLinks } from "../content/navigation";

const Header = () => {
  return (
    <header>
      <Menu />
      <nav className="navbar">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            className="navbar__link"
            href={social.url}
            aria-label={`${social.label} link`}
            title={`${social.label} Link`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className={`${social.iconClass} fa-2x navbar__link__icon`}></i>
          </a>
        ))}
      </nav>
      <div className="site-title">
        <div className="site-title__name"></div>
        <h2 className="site-title__job">SOFTWARE ENGINEER</h2>
      </div>
      <nav className="page-nav">
        {pageSections.map((section) => (
          <a
            key={section.id}
            className="page-nav__link"
            href={`#${section.id}`}
          >
            {section.label.toUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
