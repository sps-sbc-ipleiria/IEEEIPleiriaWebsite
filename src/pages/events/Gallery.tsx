import React from "react";
import { motion } from "framer-motion";

interface GalleryProps {
  images: string[];
  onSelect: (src: string) => void;
}

const Gallery = React.memo(({ images, onSelect }: GalleryProps) => (
  <motion.div
    className="flex gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 w-full max-w-4xl overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200 transform-gpu"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {images.slice(1).map((src) => (
      <motion.img
        key={src}
        loading="lazy"
        src={src}
        alt="imagem"
        className="rounded-xl shadow-md w-40 h-28 sm:w-56 sm:h-36 object-cover flex-shrink-0 hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.07 }}
        onClick={() => onSelect(src)}
      />
    ))}
  </motion.div>
));

export default Gallery;
