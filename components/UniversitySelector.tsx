"use client";
import { UniversityScheme } from "@/types";
interface UniversitySelectorProps {
    schemes: UniversityScheme[];
    selectedScheme: UniversityScheme | null;
    onSelectScheme: (scheme: UniversityScheme) => void;
}

export default function UniversitySelector({ 
    schemes, 
    selectedScheme, 
    onSelectScheme,
}: UniversitySelectorProps) {
    return (
        <select
        value={selectedScheme?.id ?? ""}
        onChange={(e) => {
            const scheme = schemes.find((s) => s.id === e.target.value);
            if (scheme) {
                onSelectScheme(scheme);
            }
        }}
        className="border rounded px-2 py-1 bg-[#0F0E2E] text-[#F5F3EE]"
        >
        <option value="" disabled>
          Select a university scheme
        </option>
        {schemes.map((s) => (
          <option key={s.id} value={s.id}>
            {s.universityName}
          </option>
        ))}
        </select>
    );
}