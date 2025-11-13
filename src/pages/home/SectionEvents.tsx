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
    { src: PyTorchImage, alt: 'Workshop PyTorch', annual: true },
    { src: LatexImage, alt: 'Workshop LaTeX' },
    { src: MicroImage, alt: 'Aula Aberta Microcontroladores' },
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

        {/* Imagens dos eventos
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
        </div> */}

        {/* Segunda grelha (com potencial badge “anual”) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={`bottom-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              className="relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-xl shadow-lg object-contain hover:scale-105 transition-transform duration-300 w-full"
              />

              {/* Badge azul — aparece apenas se annual=true */}
              {img.annual && (
                <span className="absolute top-10 right-45 bg-blue-900 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
                  Repete-se anualmente
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Segunda grelha — versão carrossel horizontal
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4">
            {images.map((img, i) => (
              <motion.div
                key={`carousel-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * i, duration: 0.6 }}
                className="relative flex-shrink-0 w-[90%] sm:w-[45%] md:w-[30%] lg:w-[28%]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="rounded-xl shadow-lg object-contain hover:scale-105 transition-transform duration-300 w-full"
                />

                {img.annual && (
                  <span className="absolute top-2 right-2 bg-blue-900 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
                    Repete-se anualmente
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div> */}



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