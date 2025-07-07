import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

export default function SectionHomeConclusion() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionHomeConclusion;

  return (
    <section className="bg-white text-blue-900 py-20 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center space-y-8">

        {/* Título final animado */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.title}
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t.subtitle}
        </motion.p>

        {/* Botões */}
        <motion.div
          className="flex justify-center gap-6 flex-wrap pt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            to="/join"
            className="px-6 py-3 rounded-lg font-semibold text-white bg-[#2579B9] border-2 border-[#003366]
                       hover:bg-white hover:text-[#003366] transition-all duration-300 shadow-md"
          >
            {t.join}
          </Link>

          <Link
            to="/departments"
            className="px-6 py-3 rounded-lg font-semibold text-[#003366] border-2 border-[#003366]
                       hover:bg-[#f0f8ff] transition-all duration-300"
          >
            {t.departments}
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
