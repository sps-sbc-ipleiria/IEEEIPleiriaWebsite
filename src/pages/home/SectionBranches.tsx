import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

import IEEEComputer from '../../assets/branches/CS.svg';
import IEEESignal from '../../assets/branches/SPS.svg';
import IEEEPES from '../../assets/branches/PES.svg';


export default function SectionBranches() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionBranches;

  return (
    <section className="bg-white text-blue-900 py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto bg-white/80 rounded-3xl shadow-xl p-8 md:p-14 flex flex-col items-center">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 relative"
          style={{ color: '#2579B9' }}
        >
          {t.title}
          <motion.span
            className="block h-1 w-16 bg-[#2579B9] rounded-full mx-auto mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.h2>

        {/* Parágrafos */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg leading-relaxed text-center font-medium mt-4"
          style={{ color: '#00275C' }}
        >
          {t.paragraph1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base md:text-lg leading-relaxed text-center font-semibold mt-2"
          style={{ color: '#00275C' }}
        >
          {t.paragraph2}
        </motion.p>

        {/* Logos das sociedades */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 w-full items-center justify-items-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.img
            src={IEEESignal}
            alt="Signal Processing Society"
            className="h-20 sm:h-28 md:h-32 object-contain rounded-xl shadow-md bg-white p-2 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.08, boxShadow: '0 4px 24px #2579B933' }}
          />
          <motion.img
            src={IEEEComputer}
            alt="Computer Society"
            className="h-20 sm:h-28 md:h-32 object-contain rounded-xl shadow-md bg-white p-2 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.08, boxShadow: '0 4px 24px #2579B933' }}
          />
          <motion.img
            src={IEEEPES}
            alt="Power & Energy Society"
            className="h-20 sm:h-28 md:h-32 object-contain rounded-xl shadow-md bg-white p-2 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.08, boxShadow: '0 4px 24px #2579B933' }}
          />
        </motion.div>

        {/* Link para explorar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            to="/departments"
            className="inline-block px-6 py-2 rounded-full border-2 border-[#2579B9] text-[#2579B9] font-bold bg-white hover:bg-[#2579B9] hover:text-white transition-colors duration-200 shadow-sm"
          >
            {t.link}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}