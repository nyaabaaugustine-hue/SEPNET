import { createHmac, timingSafeEqual } from "crypto";
import type { Tier } from "@/types";

export const SESSION_COOKIE = "sepnet_session";
const SESSION_MESSAGE = "sepnet-authenticated";
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
const DEV_SECRET = "sepnet-dev-secret-do-not-use-in-production";
const TIERS: Tier[] = ["student", "staff", "admin"];

function secret(): string {
  return process.env.LMS_SESSION_SECRET || DEV_SECRET;
}

function sign(message: string): string {
  return createHmac("sha256", secret()).update(message).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, "utf8");
  const bufB = Buffer.from(b, "utf8");
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export function createSessionToken(tier: Tier): string {
  const issuedAt = Date.now();
  return `${issuedAt}.${tier}.${sign(`${SESSION_MESSAGE}:${tier}:${issuedAt}`)}`;
}

// Returns the tier the cookie was issued for, or null when it is missing,
// forged, expired, or predates the tier system.
export function readSessionTier(token: string | undefined | null): Tier | null {
  if (!token) return null;
  const [issuedRaw, tier, signature] = token.split(".");
  if (!issuedRaw || !signature || !TIERS.includes(tier as Tier)) return null;

  const issuedAt = Number.parseInt(issuedRaw, 10);
  if (!Number.isFinite(issuedAt)) return null;
  if (Date.now() - issuedAt > SESSION_MAX_AGE_MS) return null;
  if (!safeEqual(signature, sign(`${SESSION_MESSAGE}:${tier}:${issuedAt}`))) {
    return null;
  }
  return tier as Tier;
}
