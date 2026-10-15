import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseLocked from "@/components/CourseLocked";
import LearnView from "@/components/LearnView";
import { isCourseLocked } from "@/lib/access";
import { getCourse } from "@/lib/data";
import { currentTier } from "@/lib/session";

export const metadata: Metadata = {
  title: "Course Player",
};

interface LearnPageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<{ lesson?: string }>;
}

export default async function LearnPage({ params, searchParams }: LearnPageProps) {
  const { courseId } = await params;
  const { lesson } = await searchParams;
  const id = Number.parseInt(courseId, 10);
  const course = Number.isNaN(id) ? undefined : getCourse(id);
  if (!course) notFound();

  if (isCourseLocked(course, await currentTier())) {
    return <CourseLocked course={course} />;
  }

  const lessonId = lesson ? Number.parseInt(lesson, 10) : undefined;

  return (
    <LearnView
      course={course}
      initialLessonId={
        lessonId !== undefined && !Number.isNaN(lessonId) ? lessonId : undefined
      }
    />
  );
}
