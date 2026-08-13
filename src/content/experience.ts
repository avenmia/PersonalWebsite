import type { Position } from "./types";

/** Positions held for compensation, most recent first. */
export const professional: Position[] = [
  {
    title: "Software Engineer",
    organization: "Pangaea Information Technologies",
    start: "01-2019",
    end: null,
    highlights: [
      "Creating RESTful APIs in ASP.NET Core, ASP.NET, and Node.js with Azure Functions",
      "Developing front-end applications with TypeScript & React.js",
      "Working as a back-end developer using C# with ASP.NET Core and SQL Server",
      "Using Test Driven Development to implement features",
      "Conducting code reviews and writing unit tests for software quality and maintainability",
      "Mentoring an intern through company projects, building up their coding skills and industry knowledge",
    ],
    projects: ["tmpt", "taking-stock-online", "fkt"],
  },
  {
    title: "Research Assistant",
    organization:
      "Electronic Visualization Laboratory at University of Illinois at Chicago",
    start: "06-2018",
    end: "12-2018",
    highlights: [
      "Gained experience using Node.js and Express.js to handle data requests primarily utilizing WebSockets",
      "Utilized Mongoose to interface with MongoDB to create schemas and store live data efficiently",
      "Worked with various APIs for devices such as microphones and Z-Wave devices",
    ],
  },
];

/** Positions held without compensation, most recent first. */
export const volunteer: Position[] = [
  {
    title: "Volunteer Developer and Organizer",
    organization: "Code With Aloha",
    start: "01-2022",
    end: null,
    highlights: [
      "Leading a volunteer team of 15–20 members to build and deploy impactful web solutions (Next.js, Prisma, React, Tailwind, TypeScript) driven by community needs.",
      "Collaborating closely with government and civic stakeholders to ensure each digital platform aligns with initiatives for equity, open source, and positive community change—most.",
      "Overseeing developer contributions for timely, high-impact deliverables; contributed to the Hawaiʻi Zoning Atlas, influencing affordable housing legislation and providing data to the National Zoning Atlas.",
    ],
    projects: ["hierr", "hawaii-zoning-atlas"],
  },
];

/** "01-2019" -> "01-2019 to Present" */
export const formatDateRange = (position: Position): string =>
  `${position.start} to ${position.end ?? "Present"}`;
