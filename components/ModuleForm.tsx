"use client";

import { calculateYearAverage } from "@/lib/calculations/yearAverage";
import { Module } from "@/types";
import { useState } from "react";

interface ModuleFormProps {
  modules: Module[];
  setModules: (modules: Module[]) => void;
  yearLabel: string;
}

export default function ModuleForm({ modules, setModules, yearLabel }: ModuleFormProps) {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [credits, setCredits] = useState("");
  const [notGraded, setNotGraded] = useState(false);

  const handleDeleteModule = (id: string) => {
    setModules(modules.filter((m) => m.id !== id));
  };

  const handleAddModule = () => {
    if (name && credits && (grade || notGraded)) {
      const gradeNum = notGraded ? undefined : Number(grade);
      const creditsNum = Number(credits);

      if (gradeNum !== undefined && (gradeNum < 0 || gradeNum > 100)) {
        alert("Grade must be between 0 and 100.");
        return;
      }
      if (creditsNum <= 0) {
        alert("Credits must be greater than 0.");
        return;
      }

      const newModule: Module = {
        id: crypto.randomUUID(),
        name: name,
        grade: gradeNum,
        credits: creditsNum,
        isResit: false,
      };
      setModules([...modules, newModule]);
      setName("");
      setGrade("");
      setCredits("");
      setNotGraded(false);
    }
  };

  const yearAverage = modules.length > 0 ? calculateYearAverage(modules) : 0;

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-xl font-bold mb-2 text-[#F5F3EE]">{yearLabel}</h2>
      <div className="flex flex-col sm:flex-row flex-wrap gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Module name"
          className="border rounded px-3 py-2 bg-[#0F0E2E] text-[#F5F3EE] placeholder:text-[#F5F3EE]/40 w-full sm:w-auto"
        />
        <input
          type="number"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="Grade (%)"
          disabled={notGraded}
          className="border rounded px-3 py-2 bg-[#0F0E2E] text-[#F5F3EE] placeholder:text-[#F5F3EE]/40 w-full sm:w-auto"
        />
        <input
          type="number"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
          placeholder="Credits"
          className="border rounded px-3 py-2 bg-[#0F0E2E] text-[#F5F3EE] placeholder:text-[#F5F3EE]/40 w-full sm:w-auto"
        />
      </div>
      <label className="flex items-center space-x-2 text-[#F5F3EE] mt-2">
        <input
          type="checkbox"
          checked={notGraded}
          onChange={(e) => setNotGraded(e.target.checked)}
        />
        <span>Not yet graded</span>
      </label>
      <button
        onClick={handleAddModule}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2 w-full sm:w-auto"
      >
        Add Module
      </button>
      <ul className="mt-2">
        {modules.map((m) => (
          <li key={m.id} className="flex items-center gap-2 flex-wrap">
            <span className="text-[#F5F3EE]">
              {m.name} - {m.grade !== undefined ? `${m.grade}%` : "Not yet graded"} ({m.credits} credits)
            </span>
            <button
              onClick={() => handleDeleteModule(m.id)}
              className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-black text-xs font-bold hover:bg-gray-200"
              aria-label="Delete module"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-bold text-[#F5F3EE]">
        Year Average: {yearAverage.toFixed(2)}%
      </p>
    </div>
  );
}