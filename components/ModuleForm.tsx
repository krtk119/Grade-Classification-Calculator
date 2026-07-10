"use client";
import { useState } from "react";

export default function ModuleForm() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [credits, setCredits] = useState("");
  
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
      
    </div>
  );
}