"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LayoutDashboard, FolderKanban, LogOut } from "lucide-react";

export default function DashboardSidebar() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  async function handleLogout() {
    setIsLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/");
    } catch {
      document.cookie = "digipro_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      router.push("/");
    }
  }

  return (
    <aside className="w-64 border-r hairline-border bg-[#FAFAFA] flex flex-col fixed h-full z-10">
      <div className="h-20 flex flex-col justify-center px-6 border-b hairline-border">
        <div className="font-serif text-xl font-bold tracking-[0.2em] uppercase">Digipro.</div>
        <p className="text-[9px] text-muted tracking-widest uppercase mt-1">Admin Portal</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Link href="/dashboard" className="flex items-center space-x-3 text-sm p-3 hover:bg-black hover:text-white transition-colors rounded-sm text-accent">
          <LayoutDashboard size={14} />
          <span className="uppercase tracking-wider text-[10px] font-bold">Overview</span>
        </Link>
        <Link href="/dashboard/projects" className="flex items-center space-x-3 text-sm p-3 hover:bg-black hover:text-white transition-colors rounded-sm text-accent">
          <FolderKanban size={14} />
          <span className="uppercase tracking-wider text-[10px] font-bold">Projects</span>
        </Link>
      </nav>

      <div className="p-4 border-t hairline-border">
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="flex items-center space-x-3 text-sm p-3 hover:text-red-600 transition-colors text-muted w-full disabled:opacity-50 text-left cursor-pointer"
        >
          <LogOut size={14} />
          <span className="uppercase tracking-wider text-[10px] font-bold">
            {isLoggingOut ? "Logging out..." : "Log Out"}
          </span>
        </button>
      </div>
    </aside>
  );
}
