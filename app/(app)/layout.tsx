import type { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AppShell from "@/components/AppShell";
import { SearchProvider } from "@/components/SearchContext";
import { SESSION_COOKIE, readSessionTier } from "@/lib/auth";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const store = await cookies();
  const tier = readSessionTier(store.get(SESSION_COOKIE)?.value);
  if (!tier) {
    redirect("/login");
  }

  return (
    <SearchProvider>
      <AppShell tier={tier}>{children}</AppShell>
    </SearchProvider>
  );
}
