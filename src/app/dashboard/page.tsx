"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  FileText, 
  Settings, 
  Search, 
  Plus, 
  CheckCircle2, 
  Clock, 
  PlayCircle, 
  CheckSquare,
  ArrowUpRight
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background font-sans cursor-none">
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-white hairline-border border-y-0 border-l-0 flex flex-col p-8 fixed h-full z-20">
        <div className="font-serif text-3xl font-bold tracking-tighter mb-16 italic">Digipro.</div>
        
        <nav className="flex-grow space-y-4">
          {[
            { name: "Command Center", icon: LayoutDashboard, href: "/dashboard", active: true },
            { name: "Lead Pipeline", icon: Users, href: "/dashboard/leads" },
            { name: "Productions", icon: Briefcase, href: "/dashboard/projects" },
            { name: "SOP Repository", icon: FileText, href: "/dashboard/sop" },
            { name: "System Settings", icon: Settings, href: "/dashboard/settings" },
          ].map((navItem) => (
            <Link
              key={navItem.name}
              href={navItem.href}
              className={`flex items-center space-x-4 px-5 py-4 transition-all interactable ${
                navItem.active 
                  ? "bg-accent text-white shadow-xl shadow-black/5" 
                  : "text-muted hover:bg-[#F9F9F9] hover:text-foreground"
              }`}
            >
              <navItem.icon size={18} />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{navItem.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-6 bg-[#F9F9F9] hairline-border">
          <p className="text-[10px] uppercase tracking-widest font-bold text-muted mb-2">Cloud Storage</p>
          <div className="h-1 w-full bg-border mb-3">
            <div className="h-full bg-accent w-[72%]" />
          </div>
          <p className="text-[10px] font-bold">1.4 TB / 2 TB</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow ml-72 p-12 lg:p-20">
        {/* Top Bar */}
        <header className="flex justify-between items-center mb-16">
          <div className="relative w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-accent transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search productions, leads, or SOPs..." 
              className="w-full bg-[#F5F5F5] py-4 pl-12 pr-4 text-[10px] uppercase tracking-widest font-bold outline-none focus:ring-1 focus:ring-accent transition-all"
            />
          </div>
          <button className="flex items-center space-x-4 px-8 py-4 bg-accent text-white interactable hover:shadow-2xl transition-all">
            <Plus size={16} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Create New Project</span>
          </button>
        </header>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {/* Production Pipeline */}
          <motion.div variants={item} className="lg:col-span-2 bg-white hairline-border p-10">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted">Production Pipeline</h3>
              <div className="flex space-x-4">
                <span className="flex items-center text-[10px] uppercase tracking-widest font-bold"><span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" /> Live</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Pre-Prod", count: 4, icon: Clock },
                { label: "Production", count: 2, icon: PlayCircle },
                { label: "Post-Prod", count: 5, icon: CheckCircle2 },
                { label: "Delivery", count: 1, icon: CheckSquare },
              ].map((stage) => (
                <div key={stage.label} className="p-6 bg-[#F9F9F9] hairline-border group hover:bg-accent hover:text-white transition-all cursor-default">
                  <stage.icon size={20} className="mb-6 opacity-50 group-hover:opacity-100" />
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-2">{stage.label}</p>
                  <p className="text-3xl font-serif">{stage.count}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Current Tasks */}
          <motion.div variants={item} className="bg-white hairline-border p-10">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted mb-10">Active Tasks</h3>
            <div className="space-y-6">
              {[
                { task: "Color Grade: Project X", priority: "High", status: "yellow" },
                { task: "Upload 4K Showreel", priority: "Medium", status: "blue" },
                { task: "Client Review: App V1", priority: "High", status: "green" },
                { task: "Archiving Legacy Assets", priority: "Low", status: "green" },
              ].map((t) => (
                <div key={t.task} className="flex items-start justify-between group">
                  <div className="flex items-start space-x-4">
                    <div className={`mt-1.5 w-2 h-2 rounded-full bg-${t.status === 'yellow' ? 'yellow' : t.status === 'blue' ? 'blue' : 'green'}-500 animate-pulse`} />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest">{t.task}</p>
                      <p className="text-[9px] uppercase tracking-tighter text-muted">{t.priority} Priority</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Lead Performance */}
          <motion.div variants={item} className="lg:col-span-2 bg-white hairline-border p-10">
             <div className="flex justify-between items-center mb-10">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted">Recent Performance</h3>
              <a href="#" className="text-[10px] uppercase tracking-widest font-bold border-b border-accent">Analytics</a>
            </div>
            <div className="space-y-2">
              {[
                { name: "Fashion House", type: "Video", date: "2h ago", value: "$4.2k" },
                { name: "Tech Startup", type: "Web", date: "5h ago", value: "$12.0k" },
                { name: "Luxury Estate", type: "Photo", date: "1d ago", value: "$1.5k" },
              ].map((lead) => (
                <div key={lead.name} className="flex items-center justify-between p-5 hover:bg-[#F9F9F9] transition-colors border-b border-border last:border-0 group">
                  <div className="flex items-center space-x-6">
                    <span className="text-[10px] font-bold text-muted uppercase w-12">{lead.date}</span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest">{lead.name}</p>
                      <p className="text-[9px] uppercase tracking-widest text-accent font-bold italic">{lead.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <span className="text-xs font-serif font-bold">{lead.value}</span>
                    <ArrowUpRight size={14} className="text-muted group-hover:text-accent transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SOP Repository */}
          <motion.div variants={item} className="bg-white hairline-border p-10 flex flex-col">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted mb-10">SOP Repository</h3>
            <div className="space-y-3 flex-grow">
              {[
                "Production Standards",
                "Color Science V4",
                "Digital Handover Guide",
                "Cloud Architecture",
              ].map((sop) => (
                <Link 
                  key={sop} 
                  href={`/dashboard/sop/${sop.toLowerCase().replace(/ /g, '-')}`}
                  className="block p-4 bg-[#F9F9F9] hover:bg-accent hover:text-white transition-all text-[10px] uppercase tracking-widest font-bold interactable"
                >
                  {sop}
                </Link>
              ))}
            </div>
            <p className="mt-10 text-[9px] uppercase tracking-tighter text-muted leading-relaxed italic">
              "Systematic technical execution is the backbone of cinematic storytelling."
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
