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
      const newModule: Module = {
        id: crypto.randomUUID(),
        name: name, 
        grade: notGraded ? undefined : Number(grade),
        credits: Number(credits),
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
    <div>
      <h2 className="text-xl font-bold mb-2">{yearLabel}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Module name"
        className="border rounded px-3 py-2"
      />
      <input
        type="number"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        placeholder="Grade (%)"
        disabled={notGraded}
        className="border rounded px-3 py-2"
      />
      <input
        type="number"
        value={credits}
        onChange={(e) => setCredits(e.target.value)}
        placeholder="Credits"
        className="border rounded px-3 py-2"
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={notGraded}
          onChange={(e) => setNotGraded(e.target.checked)}
        />
        Not yet graded
      </label>
      <button
        onClick={handleAddModule}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Module
      </button>
      <ul>
        {modules.map((m) => (
          <li key={m.id} className="flex items-center gap-2">
          <span>
            {m.name} - {m.grade !== undefined ? `${m.grade}%` : "Not yet graded"} ({m.credits} credits)
          </span>
          <button
            onClick={() => handleDeleteModule(m.id)}
            className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-black text-xs font-bold hover:bg-gray-200"
            aria-label="Delete module"
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-bold">
        Year Average: {yearAverage.toFixed(2)}%
      </p>
    </div>
  );
}