import { ReactNode } from "react";

interface CalculatorShellProps {
  title: string;
  children: ReactNode;
}

export default function CalculatorShell({ title, children }: CalculatorShellProps) {
  return (
    <main className="relative min-h-screen bg-[#0F0E2E] p-4 overflow-hidden">
      {/* soft ambient color glow across the background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-500 rounded-full blur-3xl opacity-25" />
      <div className="absolute -top-20 right-0 w-80 h-80 bg-teal-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-rose-400 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-500 rounded-full blur-3xl opacity-15" />

      <div className="relative z-10 flex flex-col items-center gap-6 pt-8">
        <h1 className="text-4xl font-bold text-[#F5F3EE] font-serif">{title}</h1>
        {children}
      </div>
    </main>
  );
}