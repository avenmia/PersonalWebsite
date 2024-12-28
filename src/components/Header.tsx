import "../styles.css";
import Menu from "./Menu";

const Header = () => {
  return (
    <header>
      <Menu />
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
