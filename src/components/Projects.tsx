import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section section--light">
      <div className="page">
        <div className="page__container page--projects">
          <div className="page__header page__header--rtl page__header--projects">
            <h2 className="page__header__title page__header__title--rtl">
              PROJECTS
            </h2>
            <div className="page__header__line"></div>
          </div>
          <div className="page__item page__item--projects project1 proj__img">
            <picture>
              <source
                media="(min-width: 900px)"
                srcSet="./assets/code_500x500.png"
              />
              <img
                src="./assets/code.png"
                height="350px"
                width="350px"
                alt="Picture of HTML code"
                className="image__project"
              />
            </picture>
          </div>
          <div className="page__item page__item--projects project1 proj__desc">
            <h3 className="project__title">Personal Website</h3>
            <a
              className="project__link"
              href="https://github.com/avenmia/PersonalWebsite"
              rel="noopener noreferrer"
              target="_blank"
            >
              github.com/avenmia/PersonalWebsite
            </a>
            <p className="project__info">
              This is a website that showcases my projects as well as gives an
              introduction to myself. The goal was to create a website without a
              JavaScript framework while still prioritizing performance and
              accessibility. This was built using the following:
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>TypeScript</li>
              <li>Vite</li>
            </ul>
          </div>
          <div className="page__item page__item--projects project2 proj__img">
            <img
              className="image__project"
              src="./assets/quantum_lamps_500x500.png"
              height="350px"
              width="350px"
              alt="Picture of toy whale that is lit up."
            />
          </div>
          <div className="page__item page__item--projects project2 proj__desc">
            <h3 className="project__title">Quantum Lamps</h3>
            <a
              href="https://github.com/avenmia/quantum-lamps"
              rel="noopener noreferrer"
              target="_blank"
              className="project__link"
            >
              github.com/avenmia/quantum-lamps
            </a>
            <p className="project__info">
              Quantum Lamps was a small IoT project that allows users to keep
              lights in sync by moving their respective light. The color
              changing was accomplished by using an accelerometer to map the
              lamp's orientation to a color. The color code would then be sent
              to a server which would relay the color to the partner light. This
              was built using the following:
            </p>
            <ul>
              <li>Python3</li>
              <li>TypeScript</li>
              <li>Docker</li>
              <li>Raspberry Pi</li>
              <li>NeoPixel Ring</li>
              <li>Accelerometer</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
