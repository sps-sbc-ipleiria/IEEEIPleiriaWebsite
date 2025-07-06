import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { motion } from 'framer-motion';

export default function SectionQuoteIEEE() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionQuote;

  return (
    <section className="bg-gradient-to-b from-[#001F4D] to-[#0059B3] text-white py-20 px-6 mt-24 ">
      <div className="max-w-4xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl font-light italic leading-relaxed mb-8 justify-center"
        >
          “{t.quote}”
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="font-semibold text-lg">{t.name}</p>
          <p className="text-sm text-blue-200">{t.role}</p>
        </motion.div>
      </div>
    </section>
  );
}
