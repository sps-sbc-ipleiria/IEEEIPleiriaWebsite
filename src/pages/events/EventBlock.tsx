// src/components/events/EventBlock.tsx
import TiltedCard from "../../components/visuals/TiltedCard";
import { motion } from "framer-motion";

interface EventBlockProps {
  image: string;
  title: string;
  type: string;
  date: string;
  location: string;
  description: string;
  reverse?: boolean;
}

export default function EventBlock({
  image,
  title,
  type,
  date,
  location,
  description,
  reverse
}: EventBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12 
        ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
    >
      {/* Imagem animada */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex-shrink-0"
      >
        <TiltedCard
          imageSrc={image}
          altText={title}
          containerHeight="250px"
          containerWidth="250px"
          imageHeight="250px"
          imageWidth="250px"
          rotateAmplitude={30}
          scaleOnHover={1.1}
          showTooltip={false}
        />
      </motion.div>

      {/* Texto com animação */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-xl text-left"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-blue-900">{title}</h3>
        <p className="text-sm uppercase text-blue-500 font-semibold mt-1">{type}</p>

        <div className="mt-4 space-y-1 text-blue-950 text-sm sm:text-base">
          <p><strong>📅</strong> {date}</p>
          <p><strong>📍</strong> {location}</p>
        </div>

        <p className="mt-4 text-blue-900 text-justify">{description}</p>
      </motion.div>
    </motion.div>
  );
}