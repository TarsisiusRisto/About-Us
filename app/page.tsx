"use client";
import CountUp from "./components/CountUp";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/navigation/Navbar";
export default function Home() {
  return (
    <div className="overflow-y-auto scroll-smooth">
      <div>
        <Navbar />
      </div>
      <div className="">
        <Header />
      </div>
      <div className="">
        <CountUp />
      </div>
      <div>
        <Gallery />
      </div>
    </div>
  );
}
