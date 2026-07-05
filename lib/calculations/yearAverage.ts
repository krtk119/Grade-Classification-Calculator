import { Module } from "@/types";

export function calculateYearAverage(modules: Module[]): number {
  const totalPoints = modules.reduce((sum, m) => sum + (m.grade * m.credits), 0);
  const totalCredits = modules.reduce((sum, m) => sum + m.credits, 0);
  return totalPoints / totalCredits;
}