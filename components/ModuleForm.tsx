"use client";

import { Module } from "@/types";      
import { useState } from "react";

export default function ModuleForm() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [credits, setCredits] = useState("");
  const [modules, setModules] = useState<Module[]>([]);
  const handleAddModule = () => {
    if (name && credits) {
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
  return (
    <div>
      
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Module name"
        className="border rounded px-3 py-2"
      />
      <input
        type="text"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        placeholder="Grade"
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

      
    </div>
  );
}