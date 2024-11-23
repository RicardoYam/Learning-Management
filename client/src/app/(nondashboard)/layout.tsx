import NonDashboardNavbar from "@/src/components/NonDashboardNavbar";
import Footer from "@/src/components/Footer";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">{children}</main>
      <Footer />
    </div>
  );
}
