import MainBody from "@/components/MainBody";
import NavbarCompo from "@/components/NavbarCompo";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8F8] pb-12">
      {/* Section For Navbar */}
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarCompo />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MainBody />
      </Suspense>
    </main>
  );
}
