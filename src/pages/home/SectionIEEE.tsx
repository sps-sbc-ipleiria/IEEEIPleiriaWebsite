import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { motion } from 'framer-motion';

import ieeeLogo from '../../assets/IEEELogo.svg';

export default function SectionIEEE() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionIEEE;

  return (
    <section className="relative py-16 px-4 bg-[#00275C] flex justify-center items-center min-h-[60vh]">
      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-14">
    
        {/* Left: Text */}
        <motion.div
          className="flex-3 space-y-7 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ staggerChildren: 0.2 }}
          variants={{ hidden: {}, visible: {} }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 relative"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            {t.title}
            <motion.span
              className="mt-5 block h-0.5 w-16 bg-[#7ecbff] rounded-full mx-auto md:mx-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.h2>

          <motion.p
            className="mt-5 text-base md:text-lg text-white/90 leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            {t.paragraph1}
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-white/90 leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <strong className="text-[#7ecbff]">{t.missionTitle}</strong> {t.paragraph2}
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-white/90 leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <strong className="text-[#7ecbff]">{t.impactTitle}</strong> {t.paragraph3}
          </motion.p>
        </motion.div>

        {/*Logo Animado */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            className="bg-[#e4efff] backdrop-blur-xl rounded-2xl p-6 border border-white/20"
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src={ieeeLogo}
              alt="IEEE Logo"
              className="max-w-[160px] md:max-w-[200px] object-contain"
              style={{ filter: 'drop-shadow(0 2px 12px #7ecbff44)' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}