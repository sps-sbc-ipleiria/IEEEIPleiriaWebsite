import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { motion } from 'framer-motion';

import CasteloLeiria from '../../assets/CasteloLeiria.jpg';
import RotatingWords from '../../components/visuals/RotatingWords';

export default function SectionIntro() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionHero;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#eaf3fa] to-[#dbeafe] overflow-hidden">
      {/* Animated floating shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#2579B9]/20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-[#00275c]/20 rounded-full blur-2xl z-0"
        animate={{ scale: [1, 1.08, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mt-10 relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-6 py-20 gap-16">
        {/* Left: Text */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ staggerChildren: 0.2 }}
          variants={{ hidden: {}, visible: {} }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00275c] to-[#2579B9] mb-6 drop-shadow-lg"
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            {t.title}
          </motion.h1>

          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-[#2579B9] to-[#00275c] rounded-full mb-6 mx-auto md:mx-0"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-[#00275c] font-medium mb-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            {t.staticText}
          </motion.p>

          <motion.div
            className="text-2xl sm:text-3xl font-semibold mt-2 mb-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <RotatingWords
              texts={t.rotatingWords}
              mainClassName="inline-block text-white px-3 py-1 rounded shadow-lg"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              style={{ backgroundColor: '#2579B9' }}
            />
          </motion.div>

          <motion.a
            href="#"
            className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-[#2579B9] to-[#00275c] hover:from-[#003a80] hover:to-[#2579B9] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2579B9] focus:ring-offset-2"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(37,121,185,0.25)' }}
          >
            {t.button}
          </motion.a>
        </motion.div>

        {/* Right: Image with glassmorphism */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className="relative bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-4 md:p-8 border border-white/40"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <img
              src={CasteloLeiria}
              alt="Castelo de Leiria"
              className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] object-cover rounded-2xl shadow-lg border-2 border-[#2579B9]/30"
              style={{ boxShadow: '0 8px 32px 0 rgba(37,121,185,0.15)' }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#2579B9]/30 rounded-full blur-xl z-0"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}