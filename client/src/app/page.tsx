import Image from "next/image";
import NonDashboardNavbar from "@/src/components/NonDashboardNavbar";
import Landing from "@/src/app/(nondashboard)/landing/page";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
