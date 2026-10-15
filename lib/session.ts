import { cookies } from "next/headers";
import { SESSION_COOKIE, readSessionTier } from "@/lib/auth";
import type { Tier } from "@/types";

export async function currentTier(): Promise<Tier | null> {
  const store = await cookies();
  return readSessionTier(store.get(SESSION_COOKIE)?.value);
}
