"use client";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/navigation/Navbar";
import galleryData from "./components/models/galleryData";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
// import audioData from "./components/models/audioData";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {}); // autoplay might be blocked
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // autoplay on first interaction (to bypass browser restriction)
    const enableAudio = () => {
      if (!audioRef.current) return;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
      window.removeEventListener("click", enableAudio);
    };
    window.addEventListener("click", enableAudio);
  }, []);
  return (
    <div className="overflow-y-auto scroll-smooth">
      <audio
        ref={audioRef}
        src="/assets/backsound/blue-yungkai.mp3"
        loop
        className="hidden"
      />

      {/* Button for toggling sound */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-16 left-10 z-50 bg-white dark:bg-black p-3 rounded-full shadow-lg"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-black dark:text-white" />
        ) : (
          <VolumeX className="w-6 h-6 text-black dark:text-white" />
        )}
      </button>
      
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
