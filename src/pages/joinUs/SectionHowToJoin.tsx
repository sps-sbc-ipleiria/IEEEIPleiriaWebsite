import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { motion } from 'framer-motion';

export default function SectionHowToJoin() {
  const { lang } = useLanguage();
  const t = translations[lang].joinUs.cta;

  return (
    <>
        <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.3, once: false }}
        className="py-20 px-6 bg-gradient-to-r from-blue-100 to-blue-200 text-center rounded-3xl max-w-4xl mx-auto shadow-lg"
        >
        <h3 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            {t.message}
        </h3>

        <p className="text-lg text-blue-800 mb-8 max-w-2xl mx-auto">{t.subtext}</p>

        <a
            href="/contacts" // <-- podes trocar por um link para formulário local se quiseres
            className="inline-block bg-[#0b7ff3] text-white text-lg font-semibold py-3 px-8 rounded-full shadow hover:bg-blue-700 transition"
        >
            {t.button}
        </a>
        </motion.section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </>
  );
}