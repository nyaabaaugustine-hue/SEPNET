import type { Announcement, Course, ResourceItem } from "@/types";

export const courses: Course[] = [
  {
    id: 1,
    title: "Python Quick Start",
    description:
      "Get a fast-paced introduction to learning Python in this approachable, beginner-friendly course.",
    category: "Programming",
    duration: "1h 47m",
    totalLessons: 28,
    progress: 33,
    instructor: "Lavanya Vijayan",
    level: "Beginner",
    subCourses: [
      {
        id: 1,
        title: "Career Development",
        description: "Learn how Python can advance your career",
        lessons: [
          {
            id: 1,
            title: "Advancing Your Career with Python",
            duration: "12h 30m",
            cloudinaryId:
              "Learn Python/01._Advancing_your_career_with_Python_lvopjj",
            completed: false,
          },
        ],
      },
      {
        id: 3,
        title: "Getting Started",
        description:
          "Set up your tools and get comfortable with Python's core data types",
        lessons: [
          {
            id: 6,
            title: "Setting Up Your Python Environment",
            duration: "3m 03s",
            cloudinaryId:
              "Learn Python/01._Setting_up_your_Python_environment_ful4bf",
            completed: false,
          },
          {
            id: 7,
            title: "Sorting Your Types of Data",
            duration: "3m 39s",
            cloudinaryId: "Learn Python/02._Sorting_your_types_of_data_kwgvci",
            completed: false,
          },
          {
            id: 8,
            title: "Storing Data Using Variables",
            duration: "2m 54s",
            cloudinaryId:
              "Learn Python/03._Storing_data_using_variables_phsupd",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        title: "Python Fundamentals",
        description: "Master the core concepts of Python programming",
        lessons: [
          {
            id: 2,
            title: "Demystifying Python - SEPNET",
            duration: "8h 45m",
            cloudinaryId: "Learn Python/01._Demystifying_Python_SEPNET_fqthfi",
            completed: false,
          },
          {
            id: 3,
            title: "Starting with Python",
            duration: "15h 20m",
            cloudinaryId: "Learn Python/02._Starting_with_Python_l042yp",
            completed: false,
          },
          {
            id: 4,
            title: "Comparing Python vs Java",
            duration: "1m 29s",
            cloudinaryId: "Learn Python/03._Comparing_Python_vs_Java_mqypir",
            completed: false,
          },
          {
            id: 5,
            title: "Harnessing the Power of Python",
            duration: "0m 56s",
            cloudinaryId:
              "Learn Python/04._Harnessing_the_power_of_Python_ojlz5w",
            completed: false,
          },
        ],
      },
      {
        id: 4,
        title: "Working with Functions",
        description: "Write reusable blocks of code and call them on demand",
        lessons: [
          {
            id: 9,
            title: "Defining Functions in Python",
            duration: "1m 44s",
            cloudinaryId:
              "Learn Python/01._Defining_functions_in_Python_rflgpv",
            completed: false,
          },
          {
            id: 10,
            title: "Using Built-In Functions in Python",
            duration: "4m 11s",
            cloudinaryId:
              "Learn Python/02._Using_built-in_functions_in_Python_qvyipz",
            completed: false,
          },
          {
            id: 11,
            title: "Building Your Own Functions",
            duration: "3m 42s",
            cloudinaryId:
              "Learn Python/03._Building_your_own_functions_wuz9yb",
            completed: false,
          },
          {
            id: 12,
            title: "Distinguishing Types of Functions",
            duration: "7m 47s",
            cloudinaryId:
              "Learn Python/04._Distinguishing_types_of_functions_n0ptws",
            completed: false,
          },
          {
            id: 13,
            title: "Using Modules in Python",
            duration: "6m 39s",
            cloudinaryId: "Learn Python/05._Using_modules_in_Python_xjjr2y",
            completed: false,
          },
        ],
      },
      {
        id: 5,
        title: "Working with Sequences",
        description: "Lists, tuples and strings — Python's ordered data types",
        lessons: [
          {
            id: 14,
            title: "Defining Sequences",
            duration: "1m 13s",
            cloudinaryId: "Learn Python/01._Defining_sequences_mfvprh",
            completed: false,
          },
          {
            id: 15,
            title: "Using Lists in Python",
            duration: "4m 48s",
            cloudinaryId: "Learn Python/02._Using_lists_in_Python_c4w1vy",
            completed: false,
          },
          {
            id: 16,
            title: "Leveraging Tuples in Python",
            duration: "6m 45s",
            cloudinaryId: "Learn Python/03._Leveraging_tuples_in_Python_ntvfqa",
            completed: false,
          },
        ],
      },
      {
        id: 6,
        title: "Conditional Statements",
        description: "Branch your code with if, elif and else",
        lessons: [
          {
            id: 17,
            title: "Defining Conditional Statements",
            duration: "1m 08s",
            cloudinaryId:
              "Learn Python/01._Defining_conditional_statements_kv0j8m",
            completed: false,
          },
          {
            id: 18,
            title: "Working with if Statements",
            duration: "3m 41s",
            cloudinaryId:
              "Learn Python/02._Working_with_if_statements_slo5x8",
            completed: false,
          },
          {
            id: 19,
            title: "Using If-else Statements",
            duration: "3m 58s",
            cloudinaryId:
              "Learn Python/03._Using_If-else_statements_jxlnq2",
            completed: false,
          },
          {
            id: 20,
            title: "If-elif and If-elif-else Statements",
            duration: "11m 01s",
            cloudinaryId:
              "Learn Python/04._If-elif_and_if-elif-else_statements_jii653",
            completed: false,
          },
        ],
      },
      {
        id: 7,
        title: "Loops and Iteration",
        description: "Repeat work with for and while loops",
        lessons: [
          {
            id: 21,
            title: "Defining Iteration",
            duration: "4m 46s",
            cloudinaryId: "Learn Python/01._Defining_iteration_h4ypjg",
            completed: false,
          },
          {
            id: 22,
            title: "Using a for Loop",
            duration: "4m 45s",
            cloudinaryId: "Learn Python/02._Using_a_for_loop_ot32pv",
            completed: false,
          },
          {
            id: 23,
            title: "Writing a while Loop",
            duration: "2m 44s",
            cloudinaryId: "Learn Python/03._Writing_a_while_loop_kbh7rr",
            completed: false,
          },
        ],
      },
      {
        id: 8,
        title: "Recursive Functions",
        description: "Let a function solve a smaller version of itself",
        lessons: [
          {
            id: 24,
            title: "Demystifying Recursive Functions",
            duration: "2m 08s",
            cloudinaryId:
              "Learn Python/01._Demystifying_recursive_functions_hxbolf",
            completed: false,
          },
          {
            id: 25,
            title: "Navigating a Recursive Function",
            duration: "6m 33s",
            cloudinaryId:
              "Learn Python/02._Navigating_a_recursive_function_yzhi86",
            completed: false,
          },
        ],
      },
      {
        id: 9,
        title: "Object-Oriented Programming",
        description: "Model data and behaviour with classes and objects",
        lessons: [
          {
            id: 26,
            title: "What is Object-Oriented Programming?",
            duration: "4m 43s",
            cloudinaryId:
              "Learn Python/01._What_is_object-oriented_programming_vogvwi",
            completed: false,
          },
          {
            id: 27,
            title: "Applying Object-Oriented Programming",
            duration: "9m 26s",
            cloudinaryId:
              "Learn Python/02._Applying_object-oriented_programming_vwlcrm",
            completed: false,
          },
        ],
      },
      {
        id: 10,
        title: "Next Steps",
        description: "Where to go from here with Python",
        lessons: [
          {
            id: 28,
            title: "Next Steps",
            duration: "1m 20s",
            cloudinaryId: "Learn Python/01._Next_steps_gq6dca",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Python for Data Analysis",
    description:
      "Turn raw spreadsheets into answers: load, clean and visualise real Sepnet cohort data with pandas.",
    category: "Data",
    duration: "3h 13m",
    totalLessons: 16,
    progress: 0,
    instructor: "Sepnet Mentor Team",
    level: "Beginner",
    thumbnail: "/courses/python-data-analysis.svg",
    access: "staff",
    subCourses: [
      {
        id: 1,
        title: "Getting Set Up",
        description: "Install the tools and load your first dataset",
        lessons: [
          {
            id: 1,
            title: "Installing Anaconda and Jupyter",
            duration: "10m",
            completed: false,
          },
          {
            id: 2,
            title: "Your First Notebook",
            duration: "12m",
            completed: false,
          },
          {
            id: 3,
            title: "Reading Data from CSV and Excel",
            duration: "14m",
            completed: false,
          },
          {
            id: 4,
            title: "Inspecting a Dataset",
            duration: "11m",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        title: "Cleaning Data",
        description: "Fix the mess before you trust the numbers",
        lessons: [
          {
            id: 5,
            title: "Handling Missing Values",
            duration: "13m",
            completed: false,
          },
          {
            id: 6,
            title: "Correcting Data Types and Text",
            duration: "12m",
            completed: false,
          },
          {
            id: 7,
            title: "Removing Duplicates",
            duration: "9m",
            completed: false,
          },
          {
            id: 8,
            title: "Filtering and Sorting Rows",
            duration: "15m",
            completed: false,
          },
        ],
      },
      {
        id: 3,
        title: "Analysing Data",
        description: "Group, combine and summarise your cohort records",
        lessons: [
          {
            id: 9,
            title: "Grouping with groupby",
            duration: "16m",
            completed: false,
          },
          {
            id: 10,
            title: "Pivot Tables for Attendance Reports",
            duration: "14m",
            completed: false,
          },
          {
            id: 11,
            title: "Combining Tables with merge",
            duration: "13m",
            completed: false,
          },
          {
            id: 12,
            title: "Descriptive Statistics",
            duration: "10m",
            completed: false,
          },
        ],
      },
      {
        id: 4,
        title: "Visualising Results",
        description: "Charts that make your numbers easy to read",
        lessons: [
          {
            id: 13,
            title: "Your First Chart with Matplotlib",
            duration: "12m",
            completed: false,
          },
          {
            id: 14,
            title: "Bar, Line and Scatter Charts",
            duration: "14m",
            completed: false,
          },
          {
            id: 15,
            title: "Labelling Charts for a Report",
            duration: "10m",
            completed: false,
          },
          {
            id: 16,
            title: "Exporting Charts and Summaries",
            duration: "8m",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Web Development with Python",
    description:
      "Build and publish a working website: Flask routes, templates, a database, and your first deployment.",
    category: "Web Development",
    duration: "3h 22m",
    totalLessons: 16,
    progress: 0,
    instructor: "Sepnet Mentor Team",
    level: "Intermediate",
    thumbnail: "/courses/python-web-development.svg",
    access: "staff",
    subCourses: [
      {
        id: 1,
        title: "How the Web Works",
        description: "The ideas behind every page you load",
        lessons: [
          {
            id: 1,
            title: "Requests, Responses and URLs",
            duration: "9m",
            completed: false,
          },
          {
            id: 2,
            title: "Setting Up a Project with venv and pip",
            duration: "11m",
            completed: false,
          },
          {
            id: 3,
            title: "Calling an API from Python",
            duration: "12m",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        title: "Flask Foundations",
        description: "Your first pages, routes and templates",
        lessons: [
          {
            id: 4,
            title: "Your First Flask App",
            duration: "14m",
            completed: false,
          },
          {
            id: 5,
            title: "Routes and URL Parameters",
            duration: "13m",
            completed: false,
          },
          {
            id: 6,
            title: "Templates with Jinja",
            duration: "15m",
            completed: false,
          },
          {
            id: 7,
            title: "Static Files and Styling",
            duration: "10m",
            completed: false,
          },
          {
            id: 8,
            title: "Forms and User Input",
            duration: "16m",
            completed: false,
          },
        ],
      },
      {
        id: 3,
        title: "Data and Users",
        description: "Store records and keep visitors in a session",
        lessons: [
          {
            id: 9,
            title: "Databases with SQLAlchemy",
            duration: "18m",
            completed: false,
          },
          {
            id: 10,
            title: "Creating and Saving Records",
            duration: "14m",
            completed: false,
          },
          {
            id: 11,
            title: "Login and Sessions",
            duration: "15m",
            completed: false,
          },
          {
            id: 12,
            title: "Handling Errors the Friendly Way",
            duration: "9m",
            completed: false,
          },
        ],
      },
      {
        id: 4,
        title: "Publishing Your Site",
        description: "Put your project online for the cohort to see",
        lessons: [
          {
            id: 13,
            title: "Preparing Your Project for the Internet",
            duration: "12m",
            completed: false,
          },
          {
            id: 14,
            title: "Deploying to a Free Host",
            duration: "16m",
            completed: false,
          },
          {
            id: 15,
            title: "Custom Domain and HTTPS",
            duration: "10m",
            completed: false,
          },
          {
            id: 16,
            title: "Next Steps as a Web Developer",
            duration: "8m",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Python Automation and Scripting",
    description:
      "Stop repeating yourself. Automate files, Excel reports and email so the busywork runs itself.",
    category: "Automation",
    duration: "3h 21m",
    totalLessons: 16,
    progress: 0,
    instructor: "Sepnet Mentor Team",
    level: "Intermediate",
    thumbnail: "/courses/python-automation.svg",
    access: "staff",
    subCourses: [
      {
        id: 1,
        title: "Files and Folders",
        description: "The everyday chores worth automating",
        lessons: [
          {
            id: 1,
            title: "Navigating Folders with pathlib",
            duration: "13m",
            completed: false,
          },
          {
            id: 2,
            title: "Reading and Writing Text Files",
            duration: "11m",
            completed: false,
          },
          {
            id: 3,
            title: "Renaming and Organising Files in Bulk",
            duration: "12m",
            completed: false,
          },
          {
            id: 4,
            title: "Backing Up a Folder Automatically",
            duration: "10m",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        title: "Spreadsheets and Documents",
        description: "Reports that build themselves",
        lessons: [
          {
            id: 5,
            title: "Excel Reports with openpyxl",
            duration: "16m",
            completed: false,
          },
          {
            id: 6,
            title: "Building a Repeatable Monthly Report",
            duration: "13m",
            completed: false,
          },
          {
            id: 7,
            title: "Generating a PDF Summary",
            duration: "14m",
            completed: false,
          },
          {
            id: 8,
            title: "Sending the Report by Email",
            duration: "12m",
            completed: false,
          },
        ],
      },
      {
        id: 3,
        title: "Data and the Web",
        description: "Collect what you used to copy by hand",
        lessons: [
          {
            id: 9,
            title: "Reading CSVs and Merging Class Lists",
            duration: "11m",
            completed: false,
          },
          {
            id: 10,
            title: "Fetching Public Pages with requests",
            duration: "15m",
            completed: false,
          },
          {
            id: 11,
            title: "Pulling Values out of HTML",
            duration: "17m",
            completed: false,
          },
          {
            id: 12,
            title: "Scheduling a Script to Run Every Day",
            duration: "12m",
            completed: false,
          },
        ],
      },
      {
        id: 4,
        title: "Scripts You Can Trust",
        description: "Make it survive tomorrow's mess",
        lessons: [
          {
            id: 13,
            title: "Command-Line Arguments with argparse",
            duration: "11m",
            completed: false,
          },
          {
            id: 14,
            title: "Logging Instead of Printing",
            duration: "10m",
            completed: false,
          },
          {
            id: 15,
            title: "Handling Failures and Retrying",
            duration: "12m",
            completed: false,
          },
          {
            id: 16,
            title: "Packaging a Script for Someone Else",
            duration: "13m",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Object-Oriented Python",
    description:
      "Move from scripts to structure: classes, objects and inheritance, applied to a project you can finish.",
    category: "Programming",
    duration: "3h 36m",
    totalLessons: 17,
    progress: 0,
    instructor: "Sepnet Mentor Team",
    level: "Intermediate",
    thumbnail: "/courses/python-objects.svg",
    access: "staff",
    subCourses: [
      {
        id: 1,
        title: "Objects in Everyday Code",
        description: "You already use objects — now write your own",
        lessons: [
          {
            id: 1,
            title: "Thinking in Objects",
            duration: "12m",
            completed: false,
          },
          {
            id: 2,
            title: "Classes and Instances",
            duration: "14m",
            completed: false,
          },
          {
            id: 3,
            title: "Attributes: Data That Lives on an Object",
            duration: "11m",
            completed: false,
          },
          {
            id: 4,
            title: "Methods and State",
            duration: "13m",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        title: "Designing a Class",
        description: "Give your objects a sensible shape",
        lessons: [
          {
            id: 5,
            title: "Setting Objects Up with __init__",
            duration: "12m",
            completed: false,
          },
          {
            id: 6,
            title: "Printing Objects with __str__ and __repr__",
            duration: "10m",
            completed: false,
          },
          {
            id: 7,
            title: "Properties and Validation",
            duration: "13m",
            completed: false,
          },
          {
            id: 8,
            title: "Class Methods and Static Methods",
            duration: "12m",
            completed: false,
          },
        ],
      },
      {
        id: 3,
        title: "Reusing Code",
        description: "Extend what exists instead of rewriting it",
        lessons: [
          {
            id: 9,
            title: "Inheritance in Practice",
            duration: "15m",
            completed: false,
          },
          {
            id: 10,
            title: "Overriding and Extending Behaviour",
            duration: "12m",
            completed: false,
          },
          {
            id: 11,
            title: "Composition over Inheritance",
            duration: "11m",
            completed: false,
          },
          {
            id: 12,
            title: "Comparing Objects with Special Methods",
            duration: "14m",
            completed: false,
          },
        ],
      },
      {
        id: 4,
        title: "OOP in a Real Project",
        description: "Build the cohort tracker from plan to tests",
        lessons: [
          {
            id: 13,
            title: "Planning a Mini Project",
            duration: "10m",
            completed: false,
          },
          {
            id: 14,
            title: "Modelling Students, Courses and Attendance",
            duration: "14m",
            completed: false,
          },
          {
            id: 15,
            title: "Splitting Code into Modules and Packages",
            duration: "12m",
            completed: false,
          },
          {
            id: 16,
            title: "Testing Your Classes",
            duration: "13m",
            completed: false,
          },
          {
            id: 17,
            title: "Finishing the Mini Project",
            duration: "18m",
            completed: false,
          },
        ],
      },
    ],
  },
];

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Welcome to the Sepnet Learning Platform",
    date: "2026-09-20",
    tag: "General",
    body: "We are excited to launch our online learning platform! All enrolled students can now access Python course videos anytime, anywhere. Start with Python Quick Start and track your progress as you learn.",
  },
  {
    id: 2,
    title: "New Cohort Enrollment Open",
    date: "2026-09-18",
    tag: "Enrollment",
    body: "Enrollment for the next Python training cohort is now open. Seats are limited — message us on WhatsApp (+233 54 198 8383) to reserve your spot. Scholarships are available for eligible students.",
  },
  {
    id: 3,
    title: "Weekly Live Q&A Sessions",
    date: "2026-09-15",
    tag: "Schedule",
    body: "Join our mentors every Saturday at 10:00 AM GMT for a live Q&A session. Bring your questions about the course material, projects, or your tech career path.",
  },
  {
    id: 4,
    title: "Four New Python Courses Added",
    date: "2026-10-12",
    tag: "Courses",
    body: "The catalog now covers data analysis, web development, automation and object-oriented Python. Open any course to see its full lesson plan — recordings are published lesson by lesson, so check back weekly.",
  },
];

export const resources: ResourceItem[] = [
  {
    id: 1,
    title: "Python Basics Cheat Sheet",
    description: "Quick reference for syntax, data types and common operations.",
    type: "PDF",
    lesson: "Starting with Python",
    url: "",
  },
  {
    id: 2,
    title: "Course Slides - Demystifying Python",
    description: "All slides from the Demystifying Python sessions.",
    type: "PDF",
    lesson: "Demystifying Python - SEPNET",
    url: "",
  },
  {
    id: 3,
    title: "Practice Exercises",
    description: "Hands-on exercises with solutions to reinforce each lesson.",
    type: "ZIP",
    lesson: "Python Quick Start",
    url: "",
  },
  {
    id: 4,
    title: "Career Guide - Tech in Ghana",
    description:
      "How to build a career in technology: CV tips, interview prep and opportunities.",
    type: "PDF",
    lesson: "Advancing Your Career with Python",
    url: "",
  },
  {
    id: 5,
    title: "Cohort Dataset for Practice",
    description:
      "A sample attendance and grades spreadsheet to use throughout the data analysis course.",
    type: "XLSX",
    lesson: "Reading Data from CSV and Excel",
    url: "",
  },
  {
    id: 6,
    title: "Flask Project Starter Files",
    description:
      "Folder layout, requirements.txt and a working app to start your first website from.",
    type: "ZIP",
    lesson: "Your First Flask App",
    url: "",
  },
  {
    id: 7,
    title: "Automation Script Library",
    description:
      "Ready-to-run scripts for folder clean-up, Excel reports and scheduled email.",
    type: "ZIP",
    lesson: "Building a Repeatable Monthly Report",
    url: "",
  },
  {
    id: 8,
    title: "Class Design Worksheet",
    description:
      "Plan the objects, attributes and methods for your mini project before you code.",
    type: "PDF",
    lesson: "Planning a Mini Project",
    url: "",
  },
];

export const WHATSAPP_NUMBER = "233541988383";

export const LOGO_URL =
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1790260220/sepnetghana_jjq8vj.jpg";

export const LOGIN_BG_URL =
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1790260777/33a26a57-85c4-49a7-bb1f-a0c9664e51cc_gyodd3.jpg";

export function getCourse(id: number): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function countLessons(course: Course): number {
  return course.subCourses.reduce((sum, sc) => sum + sc.lessons.length, 0);
}
