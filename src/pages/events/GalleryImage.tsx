import { motion } from "framer-motion";
import React from "react";

interface GalleryImageProps {
  src: string;
  onClick: (src: string) => void;
}

const GalleryImage = React.memo(({ src, onClick }: GalleryImageProps) => (
  <motion.img
    loading="lazy"
    src={src}
    alt="imagem da galeria"
    className="rounded-xl shadow-md w-40 h-28 sm:w-56 sm:h-36 object-cover flex-shrink-0 hover:scale-105 transition-transform duration-300"
    whileHover={{ scale: 1.07 }}
    onClick={() => onClick(src)}
  />
));

export default GalleryImage;
