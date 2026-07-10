import { UniversityScheme } from "@/types";

export const schemes: UniversityScheme[] = [
  {
    id: "20-80",
    universityName: "20:80 (Year 2 / Year 3)",
    schemeName: "20:80",
    yearWeights: { 1: 0, 2: 20, 3: 80 },
    boundaries: { first: 70, twoOne: 60, twoTwo: 50, third: 40 },
  },
  {
    id: "25-75",
    universityName: "25:75 (Year 2 / Year 3)",
    schemeName: "25:75",
    yearWeights: { 1: 0, 2: 25, 3: 75 },
    boundaries: { first: 70, twoOne: 60, twoTwo: 50, third: 40 },
  },
  {
    id: "30-70",
    universityName: "30:70 (Year 2 / Year 3) — most common",
    schemeName: "30:70",
    yearWeights: { 1: 0, 2: 30, 3: 70 },
    boundaries: { first: 70, twoOne: 60, twoTwo: 50, third: 40 },
  },
  {
    id: "33-67",
    universityName: "33:67 / 1:3 : 2:3 (Year 2 / Year 3)",
    schemeName: "33:67",
    yearWeights: { 1: 0, 2: 33.33, 3: 66.67 },
    boundaries: { first: 70, twoOne: 60, twoTwo: 50, third: 40 },
  },
  {
    id: "40-60",
    universityName: "40:60 (Year 2 / Year 3)",
    schemeName: "40:60",
    yearWeights: { 1: 0, 2: 40, 3: 60 },
    boundaries: { first: 70, twoOne: 60, twoTwo: 50, third: 40 },
  },
  {
    id: "final-year-only",
    universityName: "Final year only (100%)",
    schemeName: "100% Year 3",
    yearWeights: { 1: 0, 2: 0, 3: 100 },
    boundaries: { first: 70, twoOne: 60, twoTwo: 50, third: 40 },
  },
];