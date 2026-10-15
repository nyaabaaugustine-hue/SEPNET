"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import CourseCard from "./CourseCard";
import { useSearch } from "./SearchContext";
import {
  courseStats,
  loadCompletedLessons,
} from "@/lib/progress";
import { isCourseLocked } from "@/lib/access";
import type { Course, Tier } from "@/types";

interface CoursesViewProps {
  courses: Course[];
  tier: Tier | null;
}

export default function CoursesView({ courses, tier }: CoursesViewProps) {
  const router = useRouter();
  const { query } = useSearch();
  const [completed, setCompleted] = useState<string[]>([]);
  const [lockedNotice, setLockedNotice] = useState<Course | null>(null);

  useEffect(() => {
    setCompleted(loadCompletedLessons(courses));
  }, [courses]);

  const completedSet = useMemo(() => new Set(completed), [completed]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter(
      (course) =>
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.category.toLowerCase().includes(q)
    );
  }, [courses, query]);

  const noticeRef = useRef<HTMLDivElement>(null);

  // A locked card can be far below the notice, so bring the notice into view.
  useEffect(() => {
    if (lockedNotice) {
      noticeRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [lockedNotice]);

  function openCourse(course: Course) {
    if (isCourseLocked(course, tier)) {
      setLockedNotice(course);
      return;
    }
    const first = course.subCourses[0]?.lessons[0];
    const params = first ? `?lesson=${first.id}` : "";
    router.push(`/learn/${course.id}${params}`);
  }

  return (
    <div className="content-area page active">
      <div className="section-header">
        <h2>Continue Learning</h2>
      </div>

      {lockedNotice && (
        <div className="course-lock-notice" role="status" ref={noticeRef}>
          <p>
            <strong>{lockedNotice.title}</strong> is still being recorded. It
            opens for your cohort as its lessons are published.
          </p>
          <button
            type="button"
            className="course-lock-dismiss"
            onClick={() => setLockedNotice(null)}
          >
            Dismiss
          </button>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>No courses match “{query}”.</p>
        </div>
      ) : (
        <div className="course-grid">
          {filtered.map((course, index) => {
            const stats = courseStats(course, completedSet);
            return (
              <CourseCard
                key={course.id}
                course={course}
                progress={stats.progress}
                totalLessons={stats.total}
                index={index}
                locked={isCourseLocked(course, tier)}
                onOpen={openCourse}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
