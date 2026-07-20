"use client";

import { useState } from "react";
import { Module } from "@/types";
import { calculateYearAverage } from "@/lib/calculations/yearAverage";
import { classifyPercentage } from "@/lib/calculations/classify";
import ModuleForm from "@/components/ModuleForm";

const boundaries = { first: 70, twoOne: 60, twoTwo: 50, third: 40 };

export default function SingleYearCalculatorPage() {
  const [selectedYear, setSelectedYear] = useState<1 | 2 | 3>(1);
  const [modules, setModules] = useState<Module[]>([]);

  const average = modules.length > 0 ? calculateYearAverage(modules) : 0;
  const classification = modules.length > 0 ? classifyPercentage(average, boundaries) : null;

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-4">
      <h1 className="text-4xl font-bold mb-4">Check a Single Year</h1>

      <div className="flex gap-2">
        {[1, 2, 3].map((y) => (
          <button
            key={y}
            onClick={() => {
              setSelectedYear(y as 1 | 2 | 3);
              setModules([]);
            }}
            className={`px-4 py-2 rounded ${
              selectedYear === y ? "bg-blue-600 text-white" : "border"
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
        <p className="text-xl font-bold">
          Year {selectedYear} classification: {classification}
        </p>
      )}
    </main>
  );
}