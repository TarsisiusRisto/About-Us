"use client";
import Count from "./ui/Count";
import Header from "./ui/Header";
import Navbar from "./ui/Navbar";
export default function Home() {
  return (
    <div className="overflow-y-auto scroll-smooth">
      <Navbar />
      <main>
        <Header  />
        <Count />
      </main>
    </div>
  );
}
