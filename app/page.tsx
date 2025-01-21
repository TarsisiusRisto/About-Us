"use client";
import CountingTimer from "./ui/CountingTimer";
import Header from "./ui/Header";
import Navbar from "./ui/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header/>
      <CountingTimer/>
    </div>
  );
}
