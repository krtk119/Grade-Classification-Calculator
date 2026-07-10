"use client"

import {useState} from "react";
import {UniversityScheme}  from "@/types";
import {schemes} from "@/data/universities";
import UniversitySelector from "@/components/UniversitySelector";

export default function CalculatorPage() {
    const [selectedScheme, setSelectedScheme] = useState<UniversityScheme | null>(null);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4">
            <h1 className="text-4xl font-bold mb-4">University Grade Calculator</h1>
            <UniversitySelector
                schemes={schemes}
                selectedScheme={selectedScheme}
                onSelectScheme={setSelectedScheme}
            />
            {selectedScheme && (
                <p>You selected: {selectedScheme.universityName}</p>
            )}
        </main>
    );
}
  