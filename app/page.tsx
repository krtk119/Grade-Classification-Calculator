import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Grade Calculator</h1>
        <div className="flex gap-4">
          <Link href="/degree-calculator" className="bg-blue-600 text-white px-4 py-2 rounded">
            Full Degree Calculator
          </Link>
          <Link href="/single-year-calculator" className="bg-blue-600 text-white px-4 py-2 rounded">
            Check a Single Year
          </Link>
        </div>
      </div>
    </main>
  );
}