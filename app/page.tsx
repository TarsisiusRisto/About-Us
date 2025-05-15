"use client";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/navigation/Navbar";
import galleryData from "./components/models/galleryData";
import AudioPlayer from "./components/navigation/audioPlayer";

export default function Home() {
  return (
    <div className="overflow-y-auto scroll-smooth">
      <AudioPlayer/>
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
