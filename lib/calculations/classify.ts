import {UniversityScheme} from "@/types";

export function classifyPercentage(percentage: number, boundaries: UniversityScheme["boundaries"]): string {
    if (percentage >= boundaries.first) return "First";
    if (percentage >= boundaries.twoOne) return "2:1";
    if (percentage >= boundaries.twoTwo) return "2:2";
    if (percentage >= boundaries.third) return "Third";
    return "Fail";
}