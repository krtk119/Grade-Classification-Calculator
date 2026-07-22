"use client"

import {useState} from "react";
import {UniversityScheme, Module, Year}  from "@/types";
import {schemes} from "@/data/universities";
import UniversitySelector from "@/components/UniversitySelector";
import ModuleForm from "@/components/ModuleForm";
import { calculateOverallClassification } from "@/lib/calculations/overallClassification";
import { calculateRequiredAverage} from "@/lib/calculations/reverseCalculator";

export default function CalculatorPage() {
    const [selectedScheme, setSelectedScheme] = useState<UniversityScheme | null>(null);
    const [year2Modules, setYear2Modules] = useState<Module[]>([]);
    const [year3Modules, setYear3Modules] = useState<Module[]>([]);
    const [target, setTarget] = useState<string>("First");

    const years: Year[] = [
        { id: "y2", yearNumber: 2, modules: year2Modules, countsTowardClassification: true },
        { id: "y3", yearNumber: 3, modules: year3Modules, countsTowardClassification: true }
    ];
    const result = 
    selectedScheme && (year2Modules.length > 0 || year3Modules.length > 0)
        ? calculateOverallClassification(years,selectedScheme)
    : null;

    const reverseResult =
    selectedScheme && (year2Modules.length > 0 || year3Modules.length > 0) 
         ? calculateRequiredAverage(years, selectedScheme, target)
         : null;
    return (
        <main className="flex min-h-screen flex-col items-center gap-4 p-4">
            <h1 className="text-4xl font-bold mb-4">University Grade Calculator</h1>
            <UniversitySelector
                schemes={schemes}
                selectedScheme={selectedScheme}
                onSelectScheme={setSelectedScheme}
            />
            <div className="flex gap-8">
                <ModuleForm
                    modules={year2Modules}
                    setModules={setYear2Modules}
                    yearLabel="Year 2 Modules"
                />
                <ModuleForm
                    modules={year3Modules}
                    setModules={setYear3Modules}
                    yearLabel="Year 3 Modules"
                />
            </div>
            {result && (
                <p className="text-xl font-bold">
                    Overall: {result.percentage.toFixed(2)}% - {result.classification}
                </p>
            )}
            <div className="flex flex-col items-center gap-2 mt-4">
  <label>
    Target classification:{" "}
    <select
      value={target}
      onChange={(e) => setTarget(e.target.value)}
      className="border rounded px-2 py-1"
    >
      <option value="First">First</option>
      <option value="2:1">2:1</option>
      <option value="2:2">2:2</option>
      <option value="Third">Third</option>
    </select>
  </label>
 {reverseResult && (
    <p className="text-lg">
      {!reverseResult.isAchievable
        ? `A ${target} is no longer achievable with your remaining modules.`
        : reverseResult.requiredAverage <= 0
        ? `You've already secured at least a ${target}, regardless of your remaining modules.`
        : `You need ${reverseResult.requiredAverage.toFixed(2)}% average in your remaining modules for a ${target}.`}
    </p>
  )}
</div>
        </main>
    );
}
  