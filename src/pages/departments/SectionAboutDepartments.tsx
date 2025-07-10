import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { motion } from "framer-motion";

export default function SectionAboutDepartments() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionAboutDepartments;

  return (
    <section className="bg-white text-blue-900 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-4xl font-bold mb-6"
            >
                {t.title}
            </motion.h2>

            <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-12 text-center"
            >
                {t.description}
            </motion.p>

            <div className="grid md:grid-cols-3 gap-10 text-left">
            
            {/* Workshops */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4"
            >
                <h3 className="text-xl font-bold">{t.workshops.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed text-justify">
                {t.workshops.text}
                </p>
            </motion.div>

            {/* Conferences */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex flex-col gap-4"
            >
                <h3 className="text-xl font-bold">{t.conferences.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed text-justify">
                {t.conferences.text}
                </p>
            </motion.div>

            {/* Community */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-col gap-4"
            >
                <h3 className="text-xl font-bold">{t.community.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed text-justify">
                {t.community.text}
                </p>
            </motion.div>
            </div>
        </div>
    </section>
  );
}