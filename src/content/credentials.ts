import type { Award, Certification, Education } from "./types";

export const education: Education[] = [
  {
    institution: "University of Illinois at Chicago",
    degrees: [
      { credential: "B.Sc.", field: "Computer Science", awarded: "Dec 2018" },
      { credential: "B.Sc.", field: "Physics", awarded: "May 2015" },
    ],
  },
];

/** Most recent first. */
export const awards: Award[] = [
  {
    placement: "1st Place",
    event: "Hawaii Annual Code Challenge",
    year: 2024,
    project: "Aloha Birds",
  },
  {
    placement: "4th Place",
    event: "Hawaii Annual Code Challenge",
    year: 2023,
    project: "Marine Debris",
  },
];

export const certifications: Certification[] = [
  { issuer: "CompTIA", name: "Security+ 601" },
];
