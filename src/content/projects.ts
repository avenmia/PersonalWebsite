import type { Project, ProjectId } from "./types";

/** In display order. */
export const projects: Project[] = [
  {
    id: "tmpt",
    name: "TMPT — Training Support Systems-Enterprise Master Planning Tool",
    description:
      "Enterprise planning system for U.S. Army range and training management, letting users plan, review, and validate their Range Master Plans. It supports over 350 active users worldwide. I migrated the data access layer from ASP.NET 4.8 to .NET 10 and from Entity Framework 6 to Entity Framework Core. My other work on the system included new features, bug fixes, and improved documentation.",
    technologies: [
      "TypeScript",
      "C#",
      "ASP.NET",
      "SQL Server",
      ".NET 10",
      "Entity Framework Core",
      "Entity Framework",
      "jQuery",
    ],
    image: {
      src: "./assets/pangaea-logo.png",
      alt: "Pangaea Information Technologies logo",
      kind: "logo",
      width: 512,
      height: 152,
    },
  },
  {
    id: "taking-stock-online",
    name: "Taking Stock Online",
    description:
      "Taking Stock Online lets users explore North American industrial pollution data, combining information from the United States, Mexico, and Canada into an interactive query tool that generates summary charts and downloadable reports. I revamped the landing page for performance, cross-browser compatibility, and ADA compliance, and maintained the query tool behind it.",
    technologies: ["React", "TypeScript", "C#", "ASP.NET", "SQL Server"],
    featuredLink: {
      url: "https://takingstock.cec.org/content/landing/en/",
      label: "Visit Taking Stock Online",
    },
    image: {
      src: "./assets/pangaea-logo.png",
      alt: "Pangaea Information Technologies logo",
      kind: "logo",
      width: 512,
      height: 152,
    },
  },
  {
    id: "fkt",
    name: "FlowKaizen Performance Tools",
    description:
      "A multi-tenant SaaS platform that visualizes patient flow and staff workflow through hospital departments, integrated with the hospital's EMR. It was a suite of tools that let hospital administrators analyze and improve how patients move through their facilities. I built the platform's serverless REST API in TypeScript on Azure Functions backed by Cosmos DB, and defined its Azure infrastructure as code in Terraform.",
    technologies: ["TypeScript", "Azure Functions", "Cosmos DB", "Terraform"],
    image: {
      src: "./assets/pangaea-logo.png",
      alt: "Pangaea Information Technologies logo",
      kind: "logo",
      width: 512,
      height: 152,
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
      kind: "logo",
      width: 400,
      height: 102,
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
      label: "View in the National Zoning Atlas",
    },
    image: {
      src: "./assets/hza.png",
      alt: "Hawaiʻi Zoning Atlas map",
      kind: "screenshot",
      width: 1532,
      height: 996,
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
      alt: "HTML code in an editor",
      kind: "screenshot",
      width: 1506,
      height: 1363,
    },
  },
  {
    id: "quantum-lamps",
    name: "Quantum Lamps",
    description:
      "Quantum Lamps was a small IoT project that let two people keep a pair of lights in sync by moving their own lamp. An accelerometer mapped a lamp's orientation to a color, and that color was sent to a server, which relayed it to the partner lamp.",
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
      alt: "A toy whale lamp lit up",
      kind: "screenshot",
      width: 500,
      height: 500,
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
