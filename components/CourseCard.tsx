"use client";

import { getVideoThumbnail } from "@/lib/cloudinary";
import type { Course } from "@/types";

interface CourseCardProps {
  course: Course;
  progress: number;
  totalLessons: number;
  index: number;
  locked: boolean;
  onOpen: (course: Course) => void;
}

export default function CourseCard({
  course,
  progress,
  totalLessons,
  index,
  locked,
  onOpen,
}: CourseCardProps) {
  const firstTrailerId = course.subCourses
    .flatMap((subCourse) => subCourse.lessons)
    .find((lesson) => lesson.cloudinaryId)?.cloudinaryId;

  const thumbnail =
    course.thumbnail || (firstTrailerId ? getVideoThumbnail(firstTrailerId) : "");

  return (
    <div
      className={`course-card${locked ? " locked" : ""}`}
      style={{ animationDelay: `${index * 0.05}s` }}
      role="button"
      tabIndex={0}
      onClick={() => onOpen(course)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(course);
        }
      }}
    >
      <div className="course-thumbnail">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={thumbnail} alt={course.title} loading="lazy" />
        {locked ? (
          <div className="play-overlay locked">
            <div className="play-btn">
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="5"
                  y="11"
                  width="14"
                  height="9"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 11V7a4 4 0 018 0v4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div className="play-overlay">
            <div className="play-btn">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="course-content">
        <span className="course-category">{course.category}</span>
        {locked && <span className="course-lock-chip">Coming soon</span>}
        <h3 className="course-title">{course.title}</h3>
        <div className="course-byline">
          <span>
            <strong>Author:</strong> {course.instructor}
          </span>
          {course.level && (
            <span>
              <strong>Level:</strong> {course.level}
            </span>
          )}
        </div>
        <p className="course-description">{course.description}</p>
        <div className="course-meta">
          <span className="meta-item">
            <svg viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M8 4v4l3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {course.duration}
          </span>
          <span className="meta-item">
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12v8H2V4z" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M6 8h4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {totalLessons} lessons
          </span>
        </div>
        <div className="progress-row">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="progress-label">
            {progress > 0 ? `${progress}%` : "New"}
          </span>
        </div>
      </div>
    </div>
  );
}
