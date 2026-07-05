import { Year, UniversityScheme } from "@/types";

import {calculateYearAverage} from "./yearAverage";

export interface ClassificationResult{
    percentage: number;
    classification: string;
}
export function calculateOverallClassification(
    years: Year[],
    scheme: UniversityScheme
): ClassificationResult {
    const totalWeightedPercentage = years.reduce((sum, year) => {
        const yearAverage = calculateYearAverage(year.modules);
        const weight = scheme.yearWeights[year.yearNumber] ?? 0;
        return sum + (yearAverage * weight)/100;
    }, 0);

    let classification = "Fail";
    if (totalWeightedPercentage >= scheme.boundaries.first){
        classification = "First";
    } else if (totalWeightedPercentage >= scheme.boundaries.twoOne){
        classification = "2:1";
    }else if (totalWeightedPercentage >= scheme.boundaries.twoTwo){
        classification = "2:2";
    }else if (totalWeightedPercentage >= scheme.boundaries.third){
        classification = "Third";
    }
 
    return {
        percentage: totalWeightedPercentage,
        classification,
    };
}

const testYears: Year[] = [
  {
    id: "y2",
    yearNumber: 2,
    countsTowardClassification: true,
    modules: [
      { id: "1", name: "Module A", grade: 72, credits: 20, isResit: false },
      { id: "2", name: "Module B", grade: 65, credits: 20, isResit: false },
    ],
  },
  {
    id: "y3",
    yearNumber: 3,
    countsTowardClassification: true,
    modules: [
      { id: "3", name: "Module C", grade: 80, credits: 20, isResit: false },
      { id: "4", name: "Module D", grade: 70, credits: 20, isResit: false },
    ],
  },
];

import { universities } from "@/data/universities";
console.log(calculateOverallClassification(testYears, universities[0]));