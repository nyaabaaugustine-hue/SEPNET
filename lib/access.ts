import type { Course, Tier } from "@/types";

// Client-safe access rules: no credentials in here.

export function hasFullAccess(tier: Tier | null | undefined): boolean {
  return tier === "admin" || tier === "staff";
}

export function isCourseLocked(course: Course, tier: Tier | null | undefined): boolean {
  return course.access === "staff" && !hasFullAccess(tier);
}

export function tierLabel(tier: Tier | null | undefined): string | null {
  if (tier === "admin") return "Admin";
  if (tier === "staff") return "Staff";
  return null;
}
