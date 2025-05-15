"use client";

export default function VideoBg() {
  return (
    <video
      src="/video/videoBg.Mp4"
      autoPlay
      muted
      loop
      className="w-full max-w-3xl shadow-lg rounded-xl"
    />
  );
}
