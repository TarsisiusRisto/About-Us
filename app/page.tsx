"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/navigation/Navbar";
import galleryData from "./components/models/galleryData";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);
  return (
    <div className="overflow-y-auto scroll-smooth">
      <div>
        <Navbar />
      </div>
      <div className="">
        <Header />
      </div>
      <div className="">
        <About />
      </div>
      <div className="">
        <Gallery images={galleryData} />
      </div>
    </div>
  );
}
