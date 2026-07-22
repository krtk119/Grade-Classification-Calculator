import Link from "next/link";

const universities = [
  "Oxford", "Cambridge", "Imperial", "UCL", "Edinburgh",
  "Manchester", "Bristol", "Warwick", "Brunel", "King's College",
  "Leeds", "Southampton",
];

const bubbleStyles = [
  { top: "8%", left: "6%", size: "w-28 h-28", color: "bg-violet-500", delay: "0s" },
  { top: "15%", left: "78%", size: "w-24 h-24", color: "bg-teal-500", delay: "1s" },
  { top: "65%", left: "10%", size: "w-32 h-32", color: "bg-rose-400", delay: "2s" },
  { top: "70%", left: "82%", size: "w-20 h-20", color: "bg-amber-500", delay: "0.5s" },
  { top: "35%", left: "88%", size: "w-24 h-24", color: "bg-violet-500", delay: "1.5s" },
  { top: "5%", left: "40%", size: "w-20 h-20", color: "bg-teal-500", delay: "2.5s" },
  { top: "85%", left: "45%", size: "w-28 h-28", color: "bg-amber-500", delay: "3s" },
  { top: "45%", left: "3%", size: "w-20 h-20", color: "bg-rose-400", delay: "0.8s" },
  { top: "25%", left: "20%", size: "w-24 h-24", color: "bg-teal-500", delay: "1.2s" },
  { top: "55%", left: "60%", size: "w-20 h-20", color: "bg-violet-500", delay: "2.2s" },
  { top: "90%", left: "20%", size: "w-24 h-24", color: "bg-rose-400", delay: "1.8s" },
  { top: "12%", left: "55%", size: "w-20 h-20", color: "bg-amber-500", delay: "0.3s" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0E2E] p-4">
      {bubbleStyles.map((style, i) => (
        <div
          key={i}
          className={`absolute ${style.size} ${style.color} rounded-full opacity-30 flex items-center justify-center animate-float`}
          style={{ top: style.top, left: style.left, animationDelay: style.delay }}
        >
          <span className="text-white text-xs font-semibold text-center px-2">
            {universities[i % universities.length]}
          </span>
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-4 max-w-xl text-center">
        <h1 className="text-4xl font-bold text-[#F5F3EE] font-serif">
          Grade Calculator
        </h1>
        <p className="text-[#F5F3EE]/70">
          Work out your UK degree classification, and what you still need to
          score to hit your target — whether you&apos;re checking your full
          degree across multiple years, or just one year at a time.
        </p>
        <p className="text-sm text-[#F5F3EE]/50">
          Supports common UK weighting patterns (e.g. 20:80, 30:70, 33:67) —
          check your own university&apos;s regulations for exact figures.
        </p>
        <div className="flex gap-4 mt-2">
          <Link
            href="/degree-calculator"
            className="bg-[#F0B429] text-[#0F0E2E] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#F0B429]/90 transition"
          >
            Full Degree Calculator
          </Link>
          <Link
            href="/single-year-calculator"
            className="border border-[#F5F3EE]/30 text-[#F5F3EE] px-5 py-2.5 rounded-lg hover:bg-[#F5F3EE]/10 transition"
          >
            Check a Single Year
          </Link>
        </div>
      </div>
    </main>
  );
}