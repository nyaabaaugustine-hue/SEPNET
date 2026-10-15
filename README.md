# Sepnet LMS (Next.js)

A modern Learning Management System for **Sepnet** — a non-profit bringing technology education to Ghana.

Converted from the original static HTML/CSS/JS app (preserved in [`legacy/`](./legacy)) to **Next.js 15 (App Router) + TypeScript**.

## ✨ What's included

- **PIN login** — validated server-side via `/api/auth/login`, session stored in an httpOnly cookie (the PIN is never shipped to the browser)
- **Courses** — searchable course catalog with progress bars
- **Course player** — dedicated `/learn/[courseId]` route (shareable URLs) with Cloudinary adaptive video, lesson list, and mark-as-complete
- **Announcements / Resources / About** — non-profit updates, downloads, mission & impact
- **Certificate** — unlocks at 100% overall progress; print / save as PDF
- **WhatsApp support** — floating help button that opens a prefilled WhatsApp thread
- **Dark / light theme** — unified preference (no more split login/app theme keys)
- **Mobile-ready sidebar** — hamburger menu + backdrop (the legacy app had no mobile trigger)

## 🚀 Quick start

```bash
npm install
npm run dev
```

Open **http://localhost:3000** — you'll be redirected to the login page.

Default cohort PIN: `2115` (override with `LMS_PIN`).

### Accounts and course access

Login PINs are grouped into three tiers, resolved in `lib/members.ts`:

| Tier | Configured by | Sees |
| --- | --- | --- |
| Admin (Sepnet owner) | `LMS_ADMIN_PIN` | Everything, including unreleased courses |
| Staff (hand-out codes) | `LMS_STAFF_PINS` | Everything, including unreleased courses |
| Cohort (learners) | `LMS_PIN`, defaults to `2115` | Released courses only; gated ones show as "Coming soon" |

Admin and staff PINs are **read from the environment and never stored in this
repository**. With `LMS_ADMIN_PIN` and `LMS_STAFF_PINS` unset, the cohort account
is the only one that exists, so gated courses stay locked for everyone — set them
in `.env.local` before handing out staff codes.

A course is gated by `access: "staff"` in `lib/data.ts` — flip it to `"open"` (or
remove the field) when its recordings are published. The tier is signed into the
session cookie and enforced on the server in `app/(app)/learn/[courseId]/page.tsx`,
so a learner cannot reach a locked player by typing the URL.

### Environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
| --- | --- |
| `LMS_PIN` | 4-digit cohort PIN (server-side only) |
| `LMS_ADMIN_PIN` | 4-digit PIN for the Sepnet owner account; required for admin access |
| `LMS_STAFF_PINS` | Comma-separated 4-digit staff PINs; required for staff access |
| `LMS_SESSION_SECRET` | HMAC secret for the session cookie — **set a long random value in production** |

## 📁 Project structure

```
lms_ui/
├── app/
│   ├── layout.tsx              # Root layout, fonts, theme bootstrap
│   ├── page.tsx                # Redirect → /courses or /login
│   ├── login/                  # PIN login page
│   ├── api/auth/               # login/logout API routes
│   └── (app)/                  # Auth-protected shell
│       ├── courses/            # Course catalog
│       ├── learn/[courseId]/   # Course player (was a modal)
│       ├── announcements/
│       ├── resources/
│       ├── certificate/
│       └── about/
├── components/                 # React components (Sidebar, VideoPlayer, …)
├── lib/                        # data, auth, progress, cloudinary helpers
├── types/                      # Shared TypeScript types
├── legacy/                     # Original static app (reference only)
└── app/globals.css             # Full design system (ported + improved)
```

## 🎓 Managing content

Course, announcement, and resource content lives in [`lib/data.ts`](./lib/data.ts). Add entries following the existing shape — TypeScript will guide you.

Videos are referenced by Cloudinary **public ID** (cloud name: `dwsl2ktt2`). Thumbnails are generated automatically; set `thumbnail` on a course to override.

## 🔐 Security notes vs. the legacy app

| Legacy | Next.js app |
| --- | --- |
| PIN hardcoded in client JS | PIN checked only in the API route |
| `sessionStorage` flag (trivially faked) | Signed httpOnly cookie verified in the protected layout |
| Theme split across `loginTheme` / `theme` | Single `theme` key everywhere |

This is still a lightweight community LMS — progress and student names live in `localStorage`. A future step is moving progress to a database with per-student accounts.

## 📜 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run typecheck` | TypeScript check |

## Legacy app

The original static files are in [`legacy/`](./legacy) (`index.html`, `login.html`, `app.js`, `styles.css`). They are kept for reference and are not part of the Next.js build.
