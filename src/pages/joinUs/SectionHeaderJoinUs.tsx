import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { motion } from 'framer-motion';

export default function SectionHeaderJoinUs() {
  const { lang } = useLanguage();
  const t = translations[lang].joinUs;

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <motion.section
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.2, once: false }}
            className="pt-16 bg-gradient-to-br from-[#dbeafe] via-white to-[#f0f9ff] shadow-lg py-14 px-4 sm:px-8 md:px-12 text-center w-full mx-auto">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.2, once: false }}
            className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight"
        >
            {t.title}
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ amount: 0.2, once: false }}
            className="text-lg sm:text-xl text-blue-900 max-w-2xl mx-auto"
        >
            {t.description}
        </motion.p>
        </motion.section>
    </>
  );
}