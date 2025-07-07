import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

import { motion } from 'framer-motion';

import LatexImage from '../../assets/events/latex.svg';
import MicroImage from '../../assets/events/microcontroladores.svg';
import PyTorchImage from '../../assets/events/pytorch.svg';

export default function SectionEvents() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionEvents;

  const images = [
    { src: LatexImage, alt: 'Workshop LaTeX' },
    { src: MicroImage, alt: 'Aula Aberta Microcontroladores' },
    { src: PyTorchImage, alt: 'Workshop PyTorch' }
  ];

  return (
    <section className="bg-[#00275C] text-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto bg-[#183a6e] p-6 sm:p-10 rounded-2xl shadow-xl space-y-10">

        {/* Título */}
        <motion.h2
          className="text-xl sm:text-2xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.title}
        </motion.h2>

        {/* Imagens dos eventos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img.src}
              alt={img.alt}
              className="rounded-xl shadow-lg object-contain hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
            />
          ))}
        </div>

        {/* Link para mais eventos */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            to="/events"
            className="text-white font-bold underline hover:text-blue-100 transition-colors"
          >
            {t.link}
          </Link>
        </motion.div>

      </div>
    </section>
  );
}