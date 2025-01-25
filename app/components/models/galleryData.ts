export type GalleryItem = {
  src: string;
  alt: string;
  type: "image" | "video";
  poster?: string;
};

const galleryData: GalleryItem[] = [
  { src: "/assets/Gallery/me.JPG", alt: "Photo 2", type: "image" },
  { src: "/assets/Gallery/videoBg.MP4", alt: "Video", type: "video" },
  { src: "/assets/Gallery/u1.JPG", alt: "Photo 1", type: "image" },
  { src: "/assets/Gallery/u2.JPG", alt: "Photo 3", type: "image" },
  { src: "/assets/Gallery/u4.JPG", alt: "Photo 4", type: "image" },
];

export default galleryData;
