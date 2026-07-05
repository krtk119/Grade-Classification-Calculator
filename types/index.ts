export interface Module {
  id: string;
  name: string;
  grade: number;
  credits: number;
  isResit: boolean;
  cappedGrade?: number;
}

export interface Year {
  id: string;
  yearNumber: number;
  modules: Module[];
  countsTowardClassification: boolean;
}

export interface UniversityScheme {
    id: string;
    universityName: string;
    schemeName: string;
    yearWeights: { [yearNumber: number]: number };
    boundaries: { 
        first: number;
        twoOne: number;
        twoTwo: number;
        third: number;
    };
    sourceUrl?: string;
}