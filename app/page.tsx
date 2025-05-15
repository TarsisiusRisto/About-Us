"use client";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/navigation/Navbar";
import galleryData from "./components/models/galleryData";

export default function Home() {
  return (
    <div className="overflow-y-auto scroll-smooth">
      <audio
        src="/backsound/blue-yungkai.mp3"
        autoPlay
        loop
        // controls
        // className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
      ></audio>
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
