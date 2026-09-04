import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function ProjectsAdminPage() {
  return (
    <div className="space-y-12 max-w-5xl">
      <header className="flex justify-between items-end border-b hairline-border pb-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-serif uppercase tracking-widest">Portfolio Management</h1>
          <p className="text-muted text-xs uppercase tracking-[0.1em]">Manage your creative projects and media.</p>
        </div>
        <Link 
          href="/dashboard/projects/new" 
          className="flex items-center space-x-2 bg-accent text-white px-6 py-3 hover:bg-muted transition-colors rounded-sm"
        >
          <Plus size={14} />
          <span className="text-[10px] uppercase tracking-widest font-bold">Upload New</span>
        </Link>
      </header>

      <div className="border hairline-border overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#FAFAFA] border-b hairline-border text-[10px] uppercase tracking-widest text-muted">
            <tr>
              <th className="p-4 font-normal">Project Name</th>
              <th className="p-4 font-normal">Client</th>
              <th className="p-4 font-normal">Category</th>
              <th className="p-4 font-normal text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y hairline-border">
            {/* Placeholder for when DB is connected */}
            <tr>
              <td colSpan={4} className="p-8 text-center text-muted text-xs">
                No projects found. Please connect Supabase database to view entries.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
