import Image from "next/image";
import React from "react";
import { GalleryItem } from "./models/galleryData";
import { Courgette } from "next/font/google";

type GalleryProps = {
  images: GalleryItem[];
};
const courget = Courgette({ weight: ["400"], subsets: ["latin"] });

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div id="gallery"className="h-screen w-full px-6 py-8 mt-44 lg:mt-2 pt-44 lg:pt-3">
      <div className="text-4xl lg:text-7xl font-semibold text-center mb-12">
        <span className={courget.className}>Gallery</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
        {images.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center overflow-hidden mb-4"
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={250}
                // layout="intrinsic"
                className="rounded-xl"
              />
            ) : item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                muted
                className="w-full h-auto max-w-[80%] object-cover rounded-lg"
              ></video>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
