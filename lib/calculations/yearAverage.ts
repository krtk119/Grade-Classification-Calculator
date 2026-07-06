import { Module } from "@/types";

export function calculateYearAverage(modules: Module[]): number {
  const gradedModules = modules.filter((m) => m.grade !== undefined);
  const totalPoints = gradedModules.reduce((sum, m) => sum + (m.grade! * m.credits), 0);
  const totalCredits = gradedModules.reduce((sum, m) => sum + m.credits, 0);
  return totalPoints / totalCredits;
}