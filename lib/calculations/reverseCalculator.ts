import { Year, UniversityScheme } from "@/types";
import { calculateYearAverage } from "./yearAverage";

export interface ReverseCalculationResult {
  requiredAverage: number;  // average needed in remaining modules
  isAchievable: boolean;    // false if even 100% wouldn't be enough
}

export function calculateRequiredAverage(
  years: Year[],
  scheme: UniversityScheme,
  targetClassification: string
): ReverseCalculationResult {

  // Piece 1: convert the target classification label (e.g. "First")
  // into the actual percentage boundary it needs to beat
  const targetMap: { [key: string]: number } = {
    "First": scheme.boundaries.first,
    "2:1": scheme.boundaries.twoOne,
    "2:2": scheme.boundaries.twoTwo,
    "Third": scheme.boundaries.third,
  };
  const targetPercentage = targetMap[targetClassification];

  // Piece 2: how many percentage points are already "locked in"
  // from modules that have actually been graded so far, weighted by year
  const bankedPoints = years.reduce((sum, year) => {
    const gradedModules = year.modules.filter((m) => m.grade !== undefined);
    if (gradedModules.length === 0) return sum; // nothing graded yet this year, skip

    const gradedAverage = calculateYearAverage(gradedModules);
    const weight = scheme.yearWeights[year.yearNumber] ?? 0;
    return sum + (gradedAverage * weight) / 100; // /100 corrects for multiplying two percentages
  }, 0);

  // Piece 3: how much of the final degree weight is still undetermined —
  // i.e. how much is riding on modules that haven't been graded yet
  const remainingCapacity = years.reduce((sum, year) => {
    const pendingModules = year.modules.filter((m) => m.grade === undefined);
    const pendingCredits = pendingModules.reduce((s, m) => s + m.credits, 0);
    const totalYearCredits = year.modules.reduce((s, m) => s + m.credits, 0);
    if (totalYearCredits === 0) return sum; // year has no modules at all, skip

    const weight = scheme.yearWeights[year.yearNumber] ?? 0;
    const pendingShareOfYear = pendingCredits / totalYearCredits; // e.g. 0.5 = half the year still pending
    return sum + weight * pendingShareOfYear;
  }, 0);

  // Piece 4: solve backwards — what average is needed across
  // all remaining (pending) modules to still hit the target

  // Edge case: nothing left to grade, so nothing more can change the outcome
  if (remainingCapacity === 0) {
    return {
      requiredAverage: 0,
      isAchievable: bankedPoints >= targetPercentage,
    };
  }

  const pointsStillNeeded = targetPercentage - bankedPoints;
  const requiredAverage = (pointsStillNeeded / remainingCapacity) * 100;
  const isAchievable = requiredAverage <= 100; // impossible if it'd need over 100%

  return {
    requiredAverage,
    isAchievable,
  };
}


