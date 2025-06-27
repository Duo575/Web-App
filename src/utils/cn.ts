/**
 * Class Name Utility
 * Purpose: Utility function to combine and merge TailwindCSS classes
 * Dependencies: clsx, tailwind-merge
 * Features: Conditional classes, conflict resolution, type safety
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
