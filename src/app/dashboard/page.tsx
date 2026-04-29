"use client";

import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Plus, 
  ArrowUpRight,
  Database,
  Briefcase
} from "lucide-react";

export default function Dashboard() {
  const date = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const stats = [
    { label: "Total Projects", value: "12", icon: Briefcase, color: "bg-blue-50 text-blue-600" },
    { label: "Active Leads", value: "48", icon: Users, color: "bg-green-50 text-green-600" },
    { label: "Storage Capacity", value: "72%", icon: Database, color: "bg-purple-50 text-purple-600" },
  ];

  const leads = [
    { name: "John Smith", email: "john@techcorp.com", status: "New", date: "Oct 24" },
    { name: "Sarah Miller", email: "sarah@fashion.co", status: "Contacted", date: "Oct 23" },
    { name: "Michael Chen", email: "m.chen@startup.io", status: "Qualified", date: "Oct 22" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9F9F9] font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white hairline-border border-y-0 border-l-0 flex flex-col p-6 fixed h-full z-20">
        <div className="font-serif text-2xl font-bold tracking-tighter mb-12 italic">Digipro.</div>
        
        <nav className="flex-grow space-y-2">
          {[
            { name: "Overview", icon: LayoutDashboard, active: true },
            { name: "Leads", icon: Users },
            { name: "Projects", icon: Briefcase },
            { name: "SOP Docs", icon: FileText },
            { name: "Settings", icon: Settings },
          ].map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center space-x-4 px-4 py-3 rounded-sm transition-all ${
                item.active 
                  ? "bg-accent text-white shadow-lg shadow-black/5" 
                  : "text-muted hover:bg-[#F5F5F5] hover:text-foreground"
              }`}
            >
              <item.icon size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">{item.name}</span>
            </a>
          ))}
        </nav>

        <button className="flex items-center space-x-4 px-4 py-3 text-muted hover:text-red-500 transition-colors mt-auto">
          <LogOut size={18} />
          <span className="text-[10px] uppercase tracking-widest font-bold">Logout</span>
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow ml-64 p-12">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-serif italic mb-2">Welcome back.</h1>
            <p className="text-xs uppercase tracking-widest font-bold text-muted">{date}</p>
          </div>
          <button className="flex items-center space-x-3 px-6 py-3 bg-accent text-white rounded-sm hover:shadow-xl transition-all">
            <Plus size={16} />
            <span className="text-[10px] uppercase tracking-widest font-bold">New Project</span>
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white hairline-border flex flex-col"
            >
              <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center mb-6`}>
                <stat.icon size={20} />
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted mb-2">{stat.label}</span>
              <span className="text-3xl font-serif">{stat.value}</span>
            </motion.div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Leads Table */}
          <div className="lg:col-span-2 bg-white hairline-border p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xs uppercase tracking-widest font-bold">Recent Leads</h3>
              <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-muted hover:text-accent flex items-center">
                View All <ArrowUpRight size={12} className="ml-2" />
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border text-[10px] uppercase tracking-widest font-bold text-muted">
                    <th className="pb-4">Name</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Date</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {leads.map((lead) => (
                    <tr key={lead.email} className="border-b border-border last:border-0 hover:bg-[#FAFAFA] transition-colors group">
                      <td className="py-4">
                        <div className="font-bold">{lead.name}</div>
                        <div className="text-[10px] text-muted">{lead.email}</div>
                      </td>
                      <td className="py-4">
                        <span className="px-2 py-1 bg-[#F5F5F5] rounded-[2px] text-[10px] font-bold uppercase tracking-tighter">
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-4 text-muted text-xs">{lead.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SOP Quick Links */}
          <div className="bg-white hairline-border p-8">
            <h3 className="text-xs uppercase tracking-widest font-bold mb-8">SOP Quick-Links</h3>
            <div className="space-y-4">
              {[
                "Production Workflow",
                "Client Onboarding",
                "Rendering Standards",
                "Digital Handover",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="flex items-center justify-between p-4 bg-[#F9F9F9] hover:bg-accent hover:text-white transition-all group"
                >
                  <span className="text-[10px] uppercase tracking-widest font-bold">{link}</span>
                  <FileText size={14} className="opacity-50 group-hover:opacity-100" />
                </a>
              ))}
            </div>
            <div className="mt-12 p-6 bg-accent/5 rounded-sm hairline-border border-accent/10">
              <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">Internal Note</p>
              <p className="text-xs leading-relaxed text-muted">
                Ensure all video showreels are uploaded to the global CDN before marking projects as complete.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
