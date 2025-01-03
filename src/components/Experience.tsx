const Experience = () => {
  return (
    <section id="experience" className="section section--dark">
      <div className="page">
        <div className="page__container">
          <div className="page__item page__item--left">
            <h2 className="page__header__title page__header__title--ltr experience--title">
              EXPERIENCE
            </h2>
            <div className="page__header__line page__header__line--ltr"></div>
            <section className="page__content page__content--left">
              <section className="work__experience">
                <h3 className="work__experience__header">Software Engineer</h3>
                <h4 className="work__experience__subheader">
                  Pangaea Information Technology
                </h4>
                <h5 className="work__experience__date">01-2019 to Present</h5>
                <ul>
                  <li>
                    Creating RESTful APIs in ASP.NET Core, ASP.NET, and Node.js
                    with Azure Functions
                  </li>
                  <li>
                    Developing front-end applications with TypeScript & React.js
                  </li>
                  <li>
                    Working as a back-end developer using C# with ASP.NET Core
                    and SQL Server
                  </li>
                  <li>Using Test Driven Development to implement features</li>
                </ul>
              </section>
              <section className="work__experience">
                <h3 className="work__experience__header">Organizer</h3>
                <h4 className="work__experience__subheader">Code With Aloha</h4>
                <h5 className="work__experience__date">01-2022 to Present</h5>
                <ul>
                  <li>
                    Leading volunteer teams of 5–10 developers within Code With
                    Aloha (a 919-member group on meetup with 20–30 actively
                    involved) to build and deploy impactful web solutions
                    (Next.js, Prisma, React, Tailwind, TypeScript) driven by
                    community needs.
                  </li>
                  <li>
                    Collaborating closely with government and civic stakeholders
                    to ensure each digital platform aligns with initiatives for
                    equity, open source, and positive community change—most
                    notably, the HIERR survey project, which reached over 200
                    Hawaiʻi community members.
                  </li>
                  <li>
                    Overseeing developer contributions for timely, high-impact
                    deliverables; contributed to the Hawaiʻi Zoning Atlas,
                    influencing affordable housing legislation and providing
                    data to the National Zoning Atlas.
                  </li>
                </ul>
              </section>
              <section className="work__experience">
                <h3 className="work__experience__header">Research Assistant</h3>
                <h4 className="work__experience__subheader">
                  Electronic Visualization Laboratory at University of Illinois
                  at Chicago
                </h4>
                <h5 className="work__experience__date">06-2018 to 12-2018</h5>
                <ul>
                  <li>
                    Gained experience using Node.js and Express.js to handle
                    data requests primarily utilizing WebSockets
                  </li>
                  <li>
                    Utilized Mongoose to interface with MongoDB to create
                    schemas and store live data efficiently
                  </li>
                  <li>
                    Worked with various APIs for devices such as microphones and
                    Z-Wave devices
                  </li>
                </ul>
              </section>
            </section>
          </div>
          <div className="page__item page__item--right skills__container">
            <div className="page__content--right">
              <section className="skills__area">
                <h3 className="skills__header">SKILLS</h3>
                <section className="skills__item">
                  <h4 className="skills__item__header">Languages</h4>
                  <ul className="skills__values--2col">
                    <li>TypeScript</li>
                    <li>C#</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                  </ul>
                </section>
                <section className="skills__item">
                  <h4 className="skills__item__header">Technologies</h4>
                  <ul className="skills__values--2col">
                    <li>Vue.js</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>ASP.NET Core</li>
                    <li>CosmosDb</li>
                    <li>MSSQL Server</li>
                  </ul>
                </section>
                <section className="skills-section-styles">
                  <h4 className="skills__item__header">Coding Styles</h4>
                  <ul className="skills__values--1col">
                    <li>Test Driven Development</li>
                    <li>Object Oriented Programming</li>
                  </ul>
                </section>
              </section>
              <div className="resume">
                <a href="./resume.pdf" download>
                  <button className="resume__btn">VIEW RESUME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
