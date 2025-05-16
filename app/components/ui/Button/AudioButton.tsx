"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function AudioButton() {
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
    <>
      <audio
        ref={audioRef}
        src="/assets/backsound/blue-yungkai.mp3"
        loop
        className="hidden"
      />

      {/* Button for toggling sound */}
      <button
        onClick={toggleAudio}
        className="fixed  bottom-9 left-5 lg:bottom-16 lg:left-10 z-50 bg-white dark:bg-black p-3 rounded-full shadow-lg"
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 lg:w-6 lg:h-6 text-black dark:text-white" />
        ) : (
          <VolumeX className="w-4 h-4 lg:w-6 lg:h-6 text-black dark:text-white" />
        )}
      </button>
    </>
  );
}
