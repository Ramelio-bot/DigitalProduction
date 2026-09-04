import React from "react";
import Link from "next/link";
import { LayoutDashboard, FolderKanban, LogOut } from "lucide-react";

export const metadata = {
  title: "Admin Portal | Digipro",
  robots: "noindex, nofollow",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex text-foreground font-sans">
      {/* Sidebar */}
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
          <Link href="/" className="flex items-center space-x-3 text-sm p-3 hover:text-red-600 transition-colors text-muted">
            <LogOut size={14} />
            <span className="uppercase tracking-wider text-[10px] font-bold">Log Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-12 bg-white min-h-screen">
        {children}
      </main>
    </div>
  );
}
