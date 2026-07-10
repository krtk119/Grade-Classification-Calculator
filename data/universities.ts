import { UniversityScheme } from "@/types";

export const schemes: UniversityScheme[] = [
  {
    id: "20-80",
    universityName: "Year 2 counts 20% · Year 3 counts 80%",
    schemeName: "20:80",
    yearWeights: { 1: 0, 2: 20, 3: 80 },
    boundaries: { first: 70, twoOne: 60, twoTwo: 50, third: 40 },
  },
  {
    id: "25-75",
    universityName: "Year 2 counts 25% · Year 3 counts 75%",
    schemeName: "25:75",
    yearWeights: { 1: 0, 2: 25, 3: 75 },
    boundaries: { first: 70, twoOne: 60, twoTwo: 50, third: 40 },
  },
  {
    id: "30-70",
    universityName: "Year 2 counts 30% · Year 3 counts 70% (most common)",
    schemeName: "30:70",
    yearWeights: { 1: 0, 2: 30, 3: 70 },
    boundaries: { first: 70, twoOne: 60, twoTwo: 50, third: 40 },
  },
  {
    id: "33-67",
    universityName: "Year 2 counts 33% · Year 3 counts 67%",
    schemeName: "33:67",
    yearWeights: { 1: 0, 2: 33.33, 3: 66.67 },
    boundaries: { first: 70, twoOne: 60, twoTwo: 50, third: 40 },
  },
  {
    id: "40-60",
    universityName: "Year 2 counts 40% · Year 3 counts 60%",
    schemeName: "40:60",
    yearWeights: { 1: 0, 2: 40, 3: 60 },
    boundaries: { first: 70, twoOne: 60, twoTwo: 50, third: 40 },
  },
  {
    id: "final-year-only",
    universityName: "Only final year counts (100%)",
    schemeName: "100% Year 3",
    yearWeights: { 1: 0, 2: 0, 3: 100 },
    boundaries: { first: 70, twoOne: 60, twoTwo: 50, third: 40 },
  },
];