"use client"

import {useState} from "react";
import {UniversityScheme, Module}  from "@/types";
import {schemes} from "@/data/universities";
import UniversitySelector from "@/components/UniversitySelector";
import ModuleForm from "@/components/ModuleForm";
import { calculateOverallClassification } from "@/lib/calculations/overallClassification";

export default function CalculatorPage() {
    const [selectedScheme, setSelectedScheme] = useState<UniversityScheme | null>(null);
    const [modules, setModules] = useState<Module[]>([]);

    const result = 
    selectedScheme && modules.length > 0
        ? calculateOverallClassification(
            [{ id: "y3", yearNumber:3, modules, countsTowardClassification: true}],
        selectedScheme
    )
    : null;
console.log("selectedScheme:", selectedScheme);
console.log("modules:", modules);
console.log("result:", result);
    return (
        <main className="flex min-h-screen flex-col items-center gap-4 p-4">
            <h1 className="text-4xl font-bold mb-4">University Grade Calculator</h1>
            <UniversitySelector
                schemes={schemes}
                selectedScheme={selectedScheme}
                onSelectScheme={setSelectedScheme}
            />
            <ModuleForm modules={modules} setModules={setModules} />
            {result && (
                <p className="text-xl font-bold">
                    Overall: {result.percentage.toFixed(2)}% - {result.classification}
                </p>
            )}
        </main>
    );
}
  