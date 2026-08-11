import type { Project, ProjectId } from "./types";

/** In display order. */
export const projects: Project[] = [
  {
    id: "taking-stock-online",
    name: "Taking Stock Online",
    description:
      "Taking Stock Online lets users explore North American industrial pollution data, combining information from the United States, Mexico, and Canada into an interactive query tool that generates summary charts and downloadable reports. I revamped the landing page for performance, cross-browser compatibility, and ADA compliance, and maintain the query tool behind it.",
    technologies: ["React", "TypeScript", "C#", "ASP.NET", "SQL Server"],
    featuredLink: {
      url: "http://takingstock.cec.org/content/landing/",
      label: "Live site",
    },
  },
  {
    id: "hierr",
    name: "Hawaiʻi Economic Recovery & Resilience (“HIERR”) Survey Tool",
    description:
      "The HIERR survey tool was a digital engagement platform built around Pol.is to gather resident sentiment on vision and value statements for Hawaiʻi's economic future. Residents were onboarded at in-person workshops, then invited to respond to seeded statements and contribute their own. The results fed directly into the broader HIERR project, orienting the state's economic resilience strategies toward the values residents converged on. The tool reached over 200 Hawaiʻi community members.",
    technologies: [
      "React",
      "TypeScript",
      "NextJS",
      "Prisma",
      "tRPC",
      "Tailwind",
    ],
    sourceRepository: "https://github.com/CodeWithAloha/HIERR",
    image: {
      src: "./assets/hierrlogo.png",
      alt: "HIERR logo",
    },
  },
  {
    id: "hawaii-zoning-atlas",
    name: "Hawaiʻi Zoning Atlas",
    description:
      "The Hawaiʻi Zoning Atlas is an interactive map showing how outdated zoning laws make it hard to build diverse, affordable housing in Hawaiʻi. The atlas has been used as a tool to help pass affordable housing legislation for the state, and its data went on to populate the National Zoning Atlas.",
    technologies: [
      "Python",
      "Jupyter Notebooks",
      "JavaScript",
      "Leaflet",
      "GIS",
    ],
    sourceRepository: "https://github.com/CodeWithAloha/Hawaii-Zoning-Atlas",
    featuredLink: {
      url: "https://www.zoningatlas.org/atlas",
      label: "Featured in the National Zoning Atlas",
    },
    image: {
      src: "./assets/hza.png",
      alt: "Hawaiʻi Zoning Atlas map",
    },
  },
  {
    id: "personal-website",
    name: "Personal Website",
    description:
      "This site showcases my projects and introduces who I am. It was originally built without a JavaScript framework, prioritizing performance and accessibility. In December 2024 I migrated it to React, collapsing a 378-line index.html into components so each section lives in one place instead of being scattered through a single file.",
    technologies: ["React", "TypeScript", "Vite", "HTML5", "CSS3"],
    sourceRepository: "https://github.com/avenmia/PersonalWebsite",
    image: {
      src: "./assets/code.png",
      wideSrc: "./assets/code_500x500.png",
      alt: "Picture of HTML code",
    },
  },
  {
    id: "quantum-lamps",
    name: "Quantum Lamps",
    description:
      "Quantum Lamps was a small IoT project that allows users to keep lights in sync by moving their respective light. The color changing was accomplished by using an accelerometer to map the lamp's orientation to a color. The color code would then be sent to a server which would relay the color to the partner light.",
    technologies: [
      "Python3",
      "TypeScript",
      "Docker",
      "Raspberry Pi",
      "NeoPixel Ring",
      "Accelerometer",
    ],
    sourceRepository: "https://github.com/avenmia/quantum-lamps",
    image: {
      src: "./assets/quantum_lamps_500x500.png",
      alt: "Picture of toy whale that is lit up.",
    },
  },
];

const byId = new Map<ProjectId, Project>(
  projects.map((project) => [project.id, project])
);

export const projectById = (id: ProjectId): Project => {
  const project = byId.get(id);
  if (!project) {
    throw new Error(`Unknown project: ${id}`);
  }
  return project;
};
