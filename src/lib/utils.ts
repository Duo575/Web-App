/**
 * Utility Functions
 * Purpose: Common utility functions for the application
 * Dependencies: clsx, tailwind-merge
 * Features: className merging, conditional class application
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
