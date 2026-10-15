import type { Account, Tier } from "@/types";

// Every credential this platform accepts. Server-side only: never import this
// file from a client component, or the PINs ship inside the browser bundle.
//
// Admin and staff PINs come from the environment only, so they never enter the
// repository. With those variables unset the cohort is the only account, which
// leaves every gated course locked rather than opening it to guessers.

const COHORT_PIN = process.env.LMS_PIN || "2115";

const ADMIN_PIN = (process.env.LMS_ADMIN_PIN || "").trim();

const STAFF_PINS = (process.env.LMS_STAFF_PINS || "")
  .split(",")
  .map((pin) => pin.trim())
  .filter((pin) => /^\d{4}$/.test(pin));

if (ADMIN_PIN && !/^\d{4}$/.test(ADMIN_PIN)) {
  console.warn("LMS_ADMIN_PIN must be exactly 4 digits; admin account disabled");
}

let warned = false;

export function accounts(): Account[] {
  const list: Account[] = [];

  if (/^\d{4}$/.test(ADMIN_PIN)) {
    list.push({ pin: ADMIN_PIN, label: "Admin", tier: "admin" });
  }

  STAFF_PINS.forEach((pin, index) => {
    list.push({
      pin,
      label: `Staff ${String(index + 1).padStart(2, "0")}`,
      tier: "staff" as Tier,
    });
  });

  if (list.length === 0 && !warned) {
    warned = true;
    console.warn(
      "No admin or staff PIN configured (LMS_ADMIN_PIN / LMS_STAFF_PINS). " +
        "Gated courses are locked for every sign-in, including Sepnet staff."
    );
  }

  list.push({ pin: COHORT_PIN, label: "Cohort", tier: "student" });
  return list;
}

export function accountForPin(pin: unknown): Account | null {
  if (typeof pin !== "string" || !/^\d{4}$/.test(pin)) return null;
  return accounts().find((account) => account.pin === pin) ?? null;
}
