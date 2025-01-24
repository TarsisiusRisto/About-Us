"use client";
import CountUp from "./ui/CountUp";
import Gallery from "./ui/Gallery";
import Header from "./ui/Header";
import Navbar from "./ui/Navbar";
export default function Home() {
  return (
    <div className="overflow-y-auto scroll-smooth">
      <Navbar />
      <main>
        <Header />
        <CountUp />
        <Gallery />
      </main>
    </div>
  );
}
