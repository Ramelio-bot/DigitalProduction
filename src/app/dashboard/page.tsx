import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="space-y-12 max-w-5xl">
      <header className="space-y-2">
        <h1 className="text-3xl font-serif uppercase tracking-widest">System Overview</h1>
        <p className="text-muted text-xs uppercase tracking-[0.1em]">Welcome back to the Digipro Command Center.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 border hairline-border bg-[#FAFAFA] space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Total Projects</p>
          <p className="text-4xl font-serif">0</p>
        </div>
        <div className="p-8 border hairline-border bg-[#FAFAFA] space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Active Categories</p>
          <p className="text-4xl font-serif">4</p>
        </div>
        <div className="p-8 border hairline-border bg-accent text-white space-y-4 flex flex-col justify-between">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quick Action</p>
          <Link href="/dashboard/projects/new" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Plus size={16} />
            <span className="text-xs uppercase tracking-widest font-bold">New Project</span>
          </Link>
        </div>
      </div>

      <section className="pt-12 border-t hairline-border space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted">Recent Activity</h2>
        <div className="p-8 border hairline-border flex items-center justify-center text-sm text-muted bg-[#FAFAFA]">
          No recent activity found. Connect Database to view live data.
        </div>
      </section>
    </div>
  );
}
