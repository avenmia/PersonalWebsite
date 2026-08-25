import type { PageSection, SocialLink } from "./types";

/** Anchors into the sections rendered by App. Used by both Header and Menu. */
export const pageSections: PageSection[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

/** Used by both Header (icons) and Menu (text links). */
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/avenmia/",
    iconClass: "fa-brands fa-github-square",
    modifierClass: "social-link__github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/michael-avendano/",
    iconClass: "fa-brands fa-linkedin",
    modifierClass: "social-link__linkedin",
  },
  {
    label: "Stack Overflow",
    url: "https://stackoverflow.com/users/7331107/avenmia",
    iconClass: "fa-brands fa-stack-overflow",
    modifierClass: "social-link__stackoverflow",
  },
];
