// The shapes behind every repeating record on the site. See CONTEXT.md for the
// vocabulary these names come from, and docs/adr/0001 for why the resume PDF is
// not generated from any of this.

/** Canonical organization names. A union so a misspelling fails `yarn build`. */
export type OrganizationName =
  | "Pangaea Information Technologies"
  | "Code With Aloha"
  | "Electronic Visualization Laboratory at University of Illinois at Chicago";

export type ProjectId =
  | "taking-stock-online"
  | "hierr"
  | "hawaii-zoning-atlas"
  | "personal-website"
  | "quantum-lamps";

/**
 * A labelled outbound link that is not the Source Repository. The label varies
 * because the destination does: the Project's own live site, or a separate body
 * of work the Project fed into.
 */
export interface FeaturedLink {
  url: string;
  label: string;
}

/** Optional — a Project without artwork renders description-only. */
export interface ProjectImage {
  /** Shown below the 900px breakpoint. */
  src: string;
  /** Shown at or above 900px. Omit to use `src` at every width. */
  wideSrc?: string;
  alt: string;
}

export interface Project {
  id: ProjectId;
  name: string;
  description: string;
  technologies: string[];
  /** Absent for closed-source client work. */
  sourceRepository?: string;
  featuredLink?: FeaturedLink;
  image?: ProjectImage;
}

export interface Position {
  title: string;
  organization: OrganizationName;
  /** MM-YYYY. */
  start: string;
  /** MM-YYYY, or null for a position still held. */
  end: string | null;
  highlights: string[];
  /** Projects produced within this Position. */
  projects?: ProjectId[];
}

export interface SkillGroup {
  heading: string;
  /** Matches the `skills__values--1col` / `--2col` layout classes. */
  columns: 1 | 2;
  items: string[];
}

export interface Degree {
  credential: string;
  field: string;
  /** Month and year awarded, e.g. "Dec 2018". */
  awarded: string;
}

export interface Education {
  institution: string;
  degrees: Degree[];
}

export interface Award {
  placement: string;
  event: string;
  year: number;
  /** The project the placement was won with, when there was one. */
  project?: string;
}

export interface Certification {
  issuer: string;
  name: string;
}

export interface PageSection {
  /** The `id` on the section element; also the anchor target. */
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  url: string;
  /** Font Awesome classes. Unchecked by the type system — the icons load from a CDN.  */
  iconClass: string;
  /** Modifier class used by the mobile menu's text links. */
  modifierClass: string;
}
