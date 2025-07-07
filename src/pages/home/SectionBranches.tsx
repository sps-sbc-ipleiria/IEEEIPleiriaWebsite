import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

import { Link } from 'react-router-dom';
import IEEEComputer from '../../assets/branches/CS.svg';
import IEEESignal from '../../assets/branches/SPS.svg';
import IEEEPES from '../../assets/branches/PES.svg';

import { motion } from 'framer-motion';

export default function SectionBranches() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionBranches;

  return (
    <section className="bg-white text-blue-900 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl font-bold"
          style={{ color: '#2579B9' }}
        >
          {t.title}
        </motion.h2>

        {/* Parágrafo 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm md:text-base leading-relaxed text-justify font-[750]"
          style={{ color: '#00275C' }}
        >
          {t.paragraph1}
        </motion.p>

        {/* Parágrafo 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm md:text-base leading-relaxed text-justify font-bold"
          style={{ color: '#00275C' }}
        >
          {t.paragraph2}
        </motion.p>

        {/* Logos das sociedades */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.img
            src={IEEESignal}
            alt="Signal Processing Society"
            className="h-20 sm:h-28 md:h-40 lg:h-52 object-contain hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.08 }}
          />
          <motion.img
            src={IEEEComputer}
            alt="Computer Society"
            className="h-20 sm:h-28 md:h-40 lg:h-52 object-contain hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.08 }}
          />
          <motion.img
            src={IEEEPES}
            alt="Power & Energy Society"
            className="h-20 sm:h-28 md:h-40 lg:h-52 object-contain hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.08 }}
          />
        </motion.div>

        {/* Link para explorar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-8"
        >
          <Link
            to="/departments"
            className="font-[950] underline hover:text-blue-900 transition-colors"
            style={{ color: '#2579B9' }}
          >
            {t.link}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}