import { projects } from "../content/projects";
import type { Project, ProjectImage } from "../content/types";

/** "https://github.com/avenmia/quantum-lamps" -> "github.com/avenmia/quantum-lamps" */
const linkText = (url: string) => url.replace(/^https?:\/\//, "");

const ProjectArtwork = ({ image }: { image: ProjectImage }) =>
  image.wideSrc ? (
    <picture>
      <source media="(min-width: 900px)" srcSet={image.wideSrc} />
      <img
        src={image.src}
        height="350"
        width="350"
        alt={image.alt}
        className="image__project"
      />
    </picture>
  ) : (
    <img
      src={image.src}
      height="350"
      width="350"
      alt={image.alt}
      className="image__project"
    />
  );

const ProjectEntry = ({ project }: { project: Project }) => (
  <div className="project">
    {project.image ? (
      <div className="page__item proj__img">
        <ProjectArtwork image={project.image} />
      </div>
    ) : null}
    <div
      className={
        project.image
          ? "page__item proj__desc"
          : "page__item proj__desc proj__desc--full"
      }
    >
      <h3 className="project__title">{project.name}</h3>
      {project.sourceRepository ? (
        <a
          className="project__link"
          href={project.sourceRepository}
          rel="noopener noreferrer"
          target="_blank"
        >
          {linkText(project.sourceRepository)}
        </a>
      ) : null}
      {project.featuredLink ? (
        <a
          className="project__link"
          href={project.featuredLink.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {project.featuredLink.label}
        </a>
      ) : null}
      <p className="project__info">{project.description}</p>
      <ul>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="section section--light">
      <div className="page">
        <div className="page__container">
          <div className="page__header page__header--rtl page__header--projects">
            <h2 className="page__header__title page__header__title--rtl">
              PROJECTS
            </h2>
            <div className="page__header__line"></div>
          </div>
          {projects.map((project) => (
            <ProjectEntry key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
