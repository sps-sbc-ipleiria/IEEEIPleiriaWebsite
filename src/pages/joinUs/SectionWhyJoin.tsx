import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { motion } from 'framer-motion';
import {
  FaGlobe, FaCertificate, FaUsers, FaLightbulb,
  FaBookOpen, FaCalendarCheck, FaTrophy, FaBriefcase
} from 'react-icons/fa';

export default function SectionWhyJoin() {
  const { lang } = useLanguage();
  const t = translations[lang].joinUs.benefits;

  const items = [
    { icon: <FaGlobe className="text-4xl text-[#0b7ff3]" />, text: t.globalNetwork },
    { icon: <FaCertificate className="text-4xl text-[#0b7ff3]" />, text: t.certifications },
    { icon: <FaUsers className="text-4xl text-[#0b7ff3]" />, text: t.community },
    { icon: <FaLightbulb className="text-4xl text-[#0b7ff3]" />, text: t.innovation },
    { icon: <FaBookOpen className="text-4xl text-[#0b7ff3]" />, text: t.ieeeXplore },
    { icon: <FaCalendarCheck className="text-4xl text-[#0b7ff3]" />, text: t.eventDiscounts },
    { icon: <FaTrophy className="text-4xl text-[#0b7ff3]" />, text: t.competitions },
    { icon: <FaBriefcase className="text-4xl text-[#0b7ff3]" />, text: t.careerSupport },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.6 }
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.2, once: false }}
      className="py-16 px-25 sm:px-8 max-w-6xl mx-auto"
    >
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-12 text-center tracking-tight"
      >
        {t.title}
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: false }}
            variants={cardVariants}
            className="flex flex-col items-center bg-gradient-to-br from-[#eaf1fa] via-white to-[#f7fafd] rounded-2xl shadow-lg p-8 transition duration-300 hover:shadow-xl"
          >
            {item.icon}
            <p className="mt-6 text-base sm:text-lg font-medium text-blue-900 text-center">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
