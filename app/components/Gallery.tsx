"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GalleryItem } from "./models/galleryData";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Courgette } from "next/font/google";

type GalleryProps = {
  images: GalleryItem[];
};
const courget = Courgette({ weight: ["400"], subsets: ["latin"] });

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [lightboxOpen, setLigthboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const imageSlides = images
    .filter((item) => item.type === "image")
    .map((img) => ({ src: img.src }));
  return (
    <section id="gallery" className="w-full flex-col flex px-4 py-8 bg-red-700">
      <div className="text-4xl lg:text-7xl font-semibold text-center mb-12">
        <span className={courget.className}>Gallery</span>
      </div>
      <div className="w-full flex justify-center mb-8">
        <video
          src="/assets/Gallery/videoBg.mp4"
          autoPlay
          muted
          loop
          className="w-full max-w-3xl shadow-lg rounded-xl"
        ></video>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((item, index) =>
          item.type === "image" ? (
            <div
              key={index}
              className="flex justify-center items-center cursor-pointer"
              onClick={() => {
                const filteredIndex = images
                  .filter((img) => img.type === "image")
                  .findIndex((img) => img.src === item.src);
                setSelectedIndex(filteredIndex);
                setLigthboxOpen(true);
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={200}
                height={200}
                className="w-full max-w-[250px] h-auto rounded-xl object-cover hover:scale-105 transition-transform"
              />
            </div>
          ) : null
        )}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLigthboxOpen(false)}
        slides={imageSlides}
        index={selectedIndex}
      ></Lightbox>
    </section>
  );
};

export default Gallery;
