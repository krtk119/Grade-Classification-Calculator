"use client";
import { useState } from "react";

export default function ModuleForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Module name"
        className="border rounded px-3 py-2"
      />
    </div>
  );
}