export interface Lesson {
  id: number;
  title: string;
  duration: string;
  /** Absent while a lesson is still awaiting its recording. */
  cloudinaryId?: string;
  completed?: boolean;
}

export interface SubCourse {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export type Tier = "student" | "staff" | "admin";

export interface Account {
  pin: string;
  label: string;
  tier: Tier;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  totalLessons: number;
  progress: number;
  instructor: string;
  level?: string;
  thumbnail?: string;
  /** "staff" hides a course from the cohort until it is released. */
  access?: "open" | "staff";
  subCourses: SubCourse[];
}

export interface Announcement {
  id: number;
  title: string;
  date: string;
  tag: string;
  body: string;
}

export interface ResourceItem {
  id: number;
  title: string;
  description: string;
  type: string;
  lesson: string;
  url: string;
}

export interface FlatLesson {
  lesson: Lesson;
  subCourse: SubCourse;
  index: number;
}
