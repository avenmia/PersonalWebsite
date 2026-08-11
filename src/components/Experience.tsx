import {
  formatDateRange,
  professional,
  volunteer,
} from "../content/experience";
import { skillGroups } from "../content/skills";
import type { Position } from "../content/types";

const PositionEntry = ({ position }: { position: Position }) => (
  <section className="work__experience">
    <h3 className="work__experience__header">{position.title}</h3>
    <h4 className="work__experience__subheader">{position.organization}</h4>
    <h5 className="work__experience__date">{formatDateRange(position)}</h5>
    <ul>
      {position.highlights.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>
  </section>
);

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
              {[...professional, ...volunteer].map((position) => (
                <PositionEntry
                  key={`${position.organization}-${position.start}`}
                  position={position}
                />
              ))}
            </section>
          </div>
          <div className="page__item page__item--right skills__container">
            <div className="page__content--right">
              <section className="skills__area">
                <h3 className="skills__header">SKILLS</h3>
                {skillGroups.map((group) => (
                  <section className="skills__item" key={group.heading}>
                    <h4 className="skills__item__header">{group.heading}</h4>
                    <ul className={`skills__values--${group.columns}col`}>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
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
