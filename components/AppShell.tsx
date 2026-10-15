"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import AppHeader from "./AppHeader";
import WhatsAppSupport from "./WhatsAppSupport";
import type { Tier } from "@/types";

export default function AppShell({
  children,
  tier,
}: {
  children: ReactNode;
  tier: Tier;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSidebarOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="app-container">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} tier={tier} />
      <main className="main-content">
        <AppHeader onMenuToggle={() => setSidebarOpen((v) => !v)} />
        {children}
      </main>
      <WhatsAppSupport />
    </div>
  );
}
