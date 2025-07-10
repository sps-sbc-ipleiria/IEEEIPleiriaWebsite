import { motion } from "framer-motion";

interface EventoEspecialProps {
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  description: string;
  images: string[];
  highlights: string[];
}

const highlightVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.15, duration: 0.7 },
  }),
};

export default function EventoEspecial({
  title,
  subtitle,
  date,
  location,
  description,
  images,
  highlights,
}: EventoEspecialProps) {
  return (
    <div className="min-h-screen  flex flex-col items-center">
      {/* Hero Image */}
      {images[0] && (
        <motion.div
          className="w-full h-56 sm:h-72 md:h-96 relative"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={images[0]}
            alt="Evento destaque"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00275cbb] to-transparent" />
        </motion.div>
      )}

      {/* Card */}
      <motion.div
        className="relative -mt-16 sm:-mt-24 md:-mt-32 z-10 w-full max-w-2xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="backdrop-blur-xl bg-white/70 rounded-2xl shadow-2xl p-6 sm:p-10 space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00275c] tracking-tight">{title}</h2>
          {subtitle && <p className="text-lg sm:text-xl text-blue-500 font-medium">{subtitle}</p>}
          <div className="flex flex-wrap gap-2 sm:gap-4 items-center text-blue-900 font-semibold text-base sm:text-lg mt-2">
            <span>📅 {date}</span>
            <span className="hidden sm:inline">|</span>
            <span>📍 {location}</span>
          </div>
          <p className="mt-2 sm:mt-4 text-gray-700 text-base sm:text-lg leading-relaxed text-justify">{description}</p>
        </div>
      </motion.div>

      {/* Gallery */}
      {images.length > 1 && (
        <motion.div
          className="flex gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 w-full max-w-4xl overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          {images.slice(1).map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`imagem ${i + 2}`}
              className="rounded-xl shadow-md w-40 h-28 sm:w-56 sm:h-36 object-cover flex-shrink-0 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.07 }}
            />
          ))}
        </motion.div>
      )}

      {/* Highlights */}
      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-10 sm:mt-14 px-4 max-w-2xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {highlights.map((item, idx) => (
          <motion.li
            key={idx}
            className="bg-white/80 rounded-xl shadow p-4 sm:p-5 text-[#00275c] font-semibold text-base sm:text-lg flex items-center gap-3 hover:bg-blue-50 transition"
            custom={idx}
            variants={highlightVariants}
          >
            <span className="text-blue-400 text-xl sm:text-2xl">★</span>
            {item}
          </motion.li>
        ))}
      </motion.ul>
      <div className="h-10" />
    </div>
  );
}
