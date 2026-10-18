import React from "react";
import DashboardSidebar from "./DashboardSidebar";

export const metadata = {
  title: "Admin Portal | Digipro",
  robots: "noindex, nofollow",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex text-foreground font-sans">
      <DashboardSidebar />
      <main className="flex-1 ml-64 p-12 bg-white min-h-screen">
        {children}
      </main>
    </div>
  );
}
