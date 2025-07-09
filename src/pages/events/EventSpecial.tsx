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
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Cabeçalho */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#00275c]">{title}</h2>
        {subtitle && <p className="text-lg text-blue-500 mt-1">{subtitle}</p>}
        <p className="mt-4 text-blue-950 font-medium">
          📅 {date} &nbsp;&nbsp; | &nbsp;&nbsp; 📍 {location}
        </p>
        <p className="mt-6 text-gray-700 leading-relaxed text-justify">{description}</p>
      </motion.div>

      {/* Galeria simples com efeito de entrada */}
      <motion.div
        className="overflow-x-auto flex gap-4 pb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ amount: 0.3 }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`imagem ${i + 1}`}
            className="rounded-xl shadow-md w-72 h-48 object-cover flex-shrink-0 hover:scale-105 transition"
          />
        ))}
      </motion.div>

      {/* Destaques com entrada suave */}
      <motion.ul
        className="grid sm:grid-cols-2 gap-4 list-disc pl-5 text-[#00275c] font-medium"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ amount: 0.3 }}
      >
        {highlights.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </motion.ul>
    </div>
  );
}
