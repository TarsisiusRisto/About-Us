"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const imageSlides = images
    .filter((item) => item.type === "image")
    .map((img) => ({ src: img.src }));

  return (
    <section id="gallery" className="w-full flex-col flex px-4 py-8">
      <div className="text-4xl lg:text-7xl font-semibold text-center mb-12">
        <span className={courget.className}>Gallery</span>
      </div>
      <div className="w-full flex justify-center mb-8">
        {/* <video
          src="/assets/video/videoBg.mp4"
          autoPlay
          muted
          loop
          controls
          className="w-full max-w-3xl shadow-lg rounded-xl"
        />   */}
        <video
          controls
          preload="none"
          muted
          autoPlay
          className="w-full max-w-3xl shadow-lg rounded-xl"
        >
          <source src="/assets/video/videoBg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-full mx-auto max-w-screen">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          speed={400}
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: true },
            768: { slidesPerView: 3, centeredSlides: true },
            1024: { slidesPerView: 4, centeredSlides: true },
          }}
          className="max-w-6xl mx-auto"
        >
          {images.map((img, index) =>
            img.type === "image" ? (
              <SwiperSlide
                key={index}
                className="cursor-pointer rounded-lg overflow-hidden shadow-lg"
              >
                <div
                  className={`transition-transform duration-200 ease-in-out ${
                    index === activeIndex ? "scale-105 z-10" : "scale-90"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover"
                    onClick={() => {
                      setSelectedIndex(
                        images
                          .filter((i) => i.type === "image")
                          .findIndex((i) => i.src === img.src)
                      );
                      setLightboxOpen(true);
                    }}
                  />
                </div>
              </SwiperSlide>
            ) : null
          )}
        </Swiper>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={imageSlides}
        index={selectedIndex}
      />
    </section>
  );
};

export default Gallery;
