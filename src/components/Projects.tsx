import { projects } from "../content/projects";
import type { Project, ProjectImage } from "../content/types";

const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");

/* Source repositories are shown by what they are rather than by their URL.
   Every repository is on GitHub today, so name it; anything else falls back to
   its host rather than claiming the wrong one. */
const repositoryLabel = (url: string) => {
  const host = hostOf(url);
  return host === "github.com"
    ? "View source on GitHub"
    : `View source on ${host}`;
};

const repositoryIcon = (url: string) =>
  hostOf(url) === "github.com"
    ? "fa-brands fa-github"
    : "fa-solid fa-code-branch";

/* The intrinsic width/height come from the file itself so the browser reserves
   the right box before the image loads. CSS caps the rendered size. */
const ProjectArtwork = ({ image }: { image: ProjectImage }) => {
  const img = (
    <img
      src={image.src}
      width={image.width}
      height={image.height}
      alt={image.alt}
      className={`image__project image__project--${image.kind}`}
    />
  );

  return image.wideSrc ? (
    <picture>
      <source media="(min-width: 900px)" srcSet={image.wideSrc} />
      {img}
    </picture>
  ) : (
    img
  );
};

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
          <i
            className={`${repositoryIcon(
              project.sourceRepository
            )} project__link__icon`}
            aria-hidden="true"
          ></i>
          {repositoryLabel(project.sourceRepository)}
        </a>
      ) : null}
      {project.featuredLink ? (
        <a
          className="project__link"
          href={project.featuredLink.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            className="fa-solid fa-arrow-up-right-from-square project__link__icon"
            aria-hidden="true"
          ></i>
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
