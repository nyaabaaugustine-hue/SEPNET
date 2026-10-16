import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/data";
import type { Course } from "@/types";

export const metadata: Metadata = {
  title: "Course not released",
};

export default function CourseLocked({ course }: { course: Course }) {
  const lessons = course.subCourses.reduce((sum, sc) => sum + sc.lessons.length, 0);

  return (
    <div className="content-area page active">
      <div className="course-locked">
        {course.thumbnail && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="course-locked-cover"
            src={course.thumbnail}
            alt={`${course.title} course cover`}
            loading="lazy"
          />
        )}
        <div className="course-locked-icon">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect
              x="5"
              y="11"
              width="14"
              height="9"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M8 11V7a4 4 0 018 0v4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h2>{course.title}</h2>
        <p className="course-locked-summary">{course.description}</p>
        <p className="course-locked-meta">
          {lessons} lessons planned · {course.duration} · {course.level}
        </p>
        <p>
          This course is still being recorded, so it is open to Sepnet staff
          only. It will unlock for your cohort as the lessons are published.
        </p>
        <div className="course-locked-actions">
          <Link href="/courses" className="generate-cert-btn">
            Back to my courses
          </Link>
          <a
            className="course-locked-ask"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Hello Sepnet, I would like early access to ${course.title}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask for early access
          </a>
        </div>
      </div>
    </div>
  );
}
