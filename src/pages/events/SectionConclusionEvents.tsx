import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";
import { motion } from "framer-motion";

export default function SectionConclusionEvents() {
  const { lang } = useLanguage();
  const t = translations[lang].eventsConclusion;

  return (
    <motion.section
      className="w-full text-center bg-gradient-to-b from-white to-blue-50 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900">
          {t.title}
           <motion.span
            className="block h-1 w-20 bg-[#2579B9] rounded-full mx-auto mt-5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </h2>

       
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg sm:text-xl">
          {t.description}
        </p>

        <motion.a
          href="/join"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block text-center px-6 py-3 rounded-xl  font-semibold border-2 transition-all duration-300 transform
                        bg-[#2579B9] text-white border-[#003366]
                        hover:bg-white hover:text-[#003366] hover:scale-105 shadow-md hover:shadow-xl"
        >
          {t.button}
        </motion.a>
      </div>
    </motion.section>
  );
}
