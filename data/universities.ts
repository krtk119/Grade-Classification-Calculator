import { UniversityScheme } from "@/types";

export const universities: UniversityScheme[] = [
  {
    id: "brunel-standard",
    universityName: "Brunel University London",
    schemeName: "1/3 : 2/3 (approximate)",
    yearWeights: {
      1: 0,
      2: 33.33,
      3: 66.67,
    },
    boundaries: {
      first: 70,
      twoOne: 60,
      twoTwo: 50,
      third: 40,
    },
    sourceUrl: "https://www.brunel.ac.uk/about/documents/pdf/Senate-Regulation-2-2009-onwards-2018-12-07.pdf",
  },
];