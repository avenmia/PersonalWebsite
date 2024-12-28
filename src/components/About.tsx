const About = () => {
  return (
    <section id="about" className="section section--light">
      <div className="page">
        <div className="page__container">
          <div className="page__item page__item--right about-content">
            <div className="page__header page__header--rtl">
              <h2 className="page__header__title page__header__title--rtl">
                ABOUT
              </h2>
              <div className="page__header__line"></div>
            </div>
            <div className="page__content page__content--right">
              <p>
                Hi! I'm Michael Avendano. I'm based in Honolulu, Hawai&#x02bb;i,
                currently working at Pangaea Information Technologies as a
                full-stack developer. In my spare time, I also volunteer at Code
                for Hawaii.
              </p>
              <p>
                My hobbies often revolve around puzzle-solving. Whether it's
                through code, chess, or martial arts, I enjoy finding creative
                ways to approach problems.
              </p>
              <p>
                Finding new solutions keeps me motivated while the ability to
                help others through code inspires me to keep learning.
              </p>
            </div>
          </div>
          <div className="page__item page__item--left profilepic">
            <div className="background-circle">
              <picture>
                <source
                  media="(min-width: 900px)"
                  srcSet="./assets/mike_517x517.png"
                />
                <source
                  media="(min-width: 480px)"
                  srcSet="./assets/mike_300x300.png"
                />
                <source
                  media="(min-width: 100px)"
                  srcSet="./assets/mike_175x175.png"
                />
                <img src="./assets/mike.png" alt="Image of Michael Avendano" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
