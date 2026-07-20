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

  const handleAddModule = () => {
    if (name && credits && grade) {
      const newModule: Module = {
        id: crypto.randomUUID(),
        name: name,
        grade: Number(grade),
        credits: Number(credits),
        isResit: false,
      };
      setModules([...modules, newModule]);
      setName("");
      setGrade("");
      setCredits("");
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
        className="border rounded px-3 py-2"
      />
      <input
        type="number"
        value={credits}
        onChange={(e) => setCredits(e.target.value)}
        placeholder="Credits"
        className="border rounded px-3 py-2"
      />
      <button
        onClick={handleAddModule}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Module
      </button>
      <ul>
        {modules.map((m) => (
          <li key={m.id}>
            {m.name} — {m.grade}% ({m.credits} credits)
          </li>
        ))}
      </ul>
      <p className="mt-4 font-bold">
        Year Average: {yearAverage.toFixed(2)}%
      </p>
    </div>
  );
}