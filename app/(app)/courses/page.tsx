import type { Metadata } from "next";
import CoursesView from "@/components/CoursesView";
import { courses } from "@/lib/data";
import { currentTier } from "@/lib/session";

export const metadata: Metadata = {
  title: "My Courses",
};

export default async function CoursesPage() {
  const tier = await currentTier();
  return <CoursesView courses={courses} tier={tier} />;
}
