"use client"

import {useState} from "react";
import {UniversityScheme, Module, Year}  from "@/types";
import {schemes} from "@/data/universities";
import UniversitySelector from "@/components/UniversitySelector";
import ModuleForm from "@/components/ModuleForm";
import { calculateOverallClassification } from "@/lib/calculations/overallClassification";

export default function CalculatorPage() {
    const [selectedScheme, setSelectedScheme] = useState<UniversityScheme | null>(null);
    const [year2Modules, setYear2Modules] = useState<Module[]>([]);
    const [year3Modules, setYear3Modules] = useState<Module[]>([]);

    const years: Year[] = [
        { id: "y2", yearNumber: 2, modules: year2Modules, countsTowardClassification: true },
        { id: "y3", yearNumber: 3, modules: year3Modules, countsTowardClassification: true }
    ];
    const result = 
    selectedScheme && (year2Modules.length > 0 || year3Modules.length > 0)
        ? calculateOverallClassification(years,selectedScheme)
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
        </main>
    );
}
  