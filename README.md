# Grade Classification Calculator

A tool to calculate your UK undergraduate degree classification, and work out what average you still need in your remaining modules to hit a target grade — whether checking your full degree across multiple years, or just one year at a time.

**Live site:** https://grade-classification-calculator.vercel.app

## Features

- **Full Degree Calculator** — enter modules across Year 2 and Year 3, select your university's weighting pattern, and see your combined overall classification
- **Reverse Calculator** — pick a target classification (First, 2:1, 2:2, Third) and find out the average you need across your remaining (ungraded) modules to reach it
- **Single Year Checker** — check any individual year's classification on its own, independent of the final degree weighting
- **Pending module support** — add modules you haven't been graded on yet, and the calculator accounts for them separately from completed work
- Common UK weighting patterns supported (20:80, 25:75, 30:70, 33:67, 40:60, final-year-only)

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Deployed on Vercel

## Accuracy note

This calculator uses standard UK degree classification boundaries (First 70%+, 2:1 60-69%, 2:2 50-59%, Third 40-49%) and common year-weighting patterns. It is **not** tied to any specific university's exact regulations — some universities (e.g. Brunel) use more complex systems like GPA-based classification, which this tool doesn't yet model. Always check your own university's official regulations for exact figures.

## Running locally

```bash
git clone https://github.com/krtk119/Grade-Classification-Calculator.git
cd Grade-Classification-Calculator
npm install
npm run dev
```

Visit `http://localhost:3000`.