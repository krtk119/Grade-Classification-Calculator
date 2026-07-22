"use client";

import { useState } from "react";
import { Module } from "@/types";
import { calculateYearAverage } from "@/lib/calculations/yearAverage";
import { classifyPercentage } from "@/lib/calculations/classify";
import ModuleForm from "@/components/ModuleForm";
import { calculateRequiredAverage } from "@/lib/calculations/reverseCalculator";
import CalculatorShell from "@/components/CalculatorShell";

const boundaries = { first: 70, twoOne: 60, twoTwo: 50, third: 40 };

export default function SingleYearCalculatorPage() {
  const [selectedYear, setSelectedYear] = useState<1 | 2 | 3>(1);
  const [modules, setModules] = useState<Module[]>([]);
  const [target, setTarget] = useState<string>("First");

  const average = modules.length > 0 ? calculateYearAverage(modules) : 0;
  const classification = modules.length > 0 ? classifyPercentage(average, boundaries) : null;

  const singleYearScheme = {
    id: "single-year",
    universityName: "Single Year",
    schemeName: "100%",
    yearWeights: { [selectedYear]: 100 },
    boundaries,
  };

  const reverseResult =
    modules.length > 0
      ? calculateRequiredAverage(
          [{ id: "y", yearNumber: selectedYear, modules, countsTowardClassification: true }],
          singleYearScheme,
          target
        )
      : null;

  return (
    <CalculatorShell title="Check a Single Year">
      <div className="flex gap-2">
        {[1, 2, 3].map((y) => (
          <button
            key={y}
            onClick={() => {
              setSelectedYear(y as 1 | 2 | 3);
              setModules([]);
            }}
            className={`px-4 py-2 rounded ${
              selectedYear === y
                ? "bg-[#F0B429] text-[#0F0E2E] font-semibold"
                : "border border-[#F5F3EE]/30 text-[#F5F3EE]"
            }`}
          >
            Year {y}
          </button>
        ))}
      </div>

      <ModuleForm
        modules={modules}
        setModules={setModules}
        yearLabel={`Year ${selectedYear} Modules`}
      />

      {classification && (
        <p className="text-xl font-bold text-[#F5F3EE]">
          Year {selectedYear} classification: {classification}
        </p>
      )}

      <div className="flex flex-col items-center gap-2 mt-4">
        <label className="text-[#F5F3EE]">
          Target classification:{" "}
          <select
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="border rounded px-2 py-1 bg-[#0F0E2E] text-[#F5F3EE]"
          >
            <option value="First">First</option>
            <option value="2:1">2:1</option>
            <option value="2:2">2:2</option>
            <option value="Third">Third</option>
          </select>
        </label>
        {reverseResult && (
          <p className="text-lg text-[#F5F3EE]">
            {!reverseResult.isAchievable
              ? `A ${target} is no longer achievable with your remaining modules.`
              : reverseResult.requiredAverage <= 0
              ? `You've already secured at least a ${target}, regardless of your remaining modules.`
              : `You need ${reverseResult.requiredAverage.toFixed(2)}% average in your remaining modules for a ${target}.`}
          </p>
        )}
      </div>
    </CalculatorShell>
  );
}