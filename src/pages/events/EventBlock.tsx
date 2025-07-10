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
      className={`max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 py-10
        ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      {/* Animated Image */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex-shrink-0"
      >
        <div className="rounded-3xl shadow-xl overflow-hidden">
            <TiltedCard
            imageSrc={image}
            altText={title}
            containerHeight="220px"
            containerWidth="220px"
            imageHeight="220px"
            imageWidth="220px"
            rotateAmplitude={20}
            scaleOnHover={1.04}
            showTooltip={false}
          />
        </div>
      </motion.div>

      {/* Glassmorphic Text Block */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-xl bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-6 md:p-8 space-y-3"
      >
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#00275c]">{title}</h3>
        <p className="text-xs uppercase text-blue-500 font-semibold tracking-wider">{type}</p>
        <div className="flex flex-wrap gap-4 items-center text-blue-900 font-medium text-sm mt-2">
          <span>📅 {date}</span>
          <span className="hidden sm:inline">|</span>
          <span>📍 {location}</span>
        </div>
        <p className="mt-2 text-blue-900 text-base leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
}