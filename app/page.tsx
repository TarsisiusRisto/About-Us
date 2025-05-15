"use client";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/navigation/Navbar";
import galleryData from "./components/models/galleryData";
// import audioData from "./components/models/audioData";

export default function Home() {
  return (
    <div className="overflow-y-auto scroll-smooth">
      <audio
        src="/assets/backsound/blue-yungkai.mp3"
        autoPlay
        loop
        controls
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
      ></audio>
      {/* {audioData.map((audio, index) => (
        <audio
          key={index}
          src={audio.src}
          autoPlay
          loop
          // controls
          // className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
        ></audio>
      ))} */}
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
