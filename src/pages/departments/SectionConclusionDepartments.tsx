import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

export default function SectionConclusionDepartments() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionConclusionDepartments;

  return (
    <section className="bg-white text-blue-900 pb-25 px-6 text-center">
      <div className="max-w-4xl mx-auto">

        {/* Título */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.title}
          <motion.span
            className="block h-1 w-20 bg-[#2579B9] rounded-full mx-auto mt-5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

        </motion.h2>


        {/* Descrição */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t.description}
        </motion.p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/events"
              className="block text-center px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 transform
                        bg-[#2579B9] text-white border-[#003366]
                        hover:bg-white hover:text-[#003366] hover:scale-105 shadow-md hover:shadow-xl"
            >
              {t.exploreEvents}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/join"
              className="block text-center px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 transform
                        bg-[#2579B9] text-white border-[#003366]
                        hover:bg-white hover:text-[#003366] hover:scale-105 shadow-md hover:shadow-xl"
            >
              {t.join}
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
