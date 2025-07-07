import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import PESLogo from '../../assets/branches/PES.svg';

export default function SectionPES() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionPES;

  return (
    <section className="text-[#007934] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center md:text-left"
        >
        {t.title}
        </motion.h2>

        {/* Header com logo + texto */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          
          {/* Descrição */}
          <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg sm:text-xl leading-relaxed text-[#003366] text-justify"
          >
              {t.description}
          </motion.p>

          {/* Logo */}
          <motion.img
              src={PESLogo}
              alt="IEEE Power & Energy Society Logo"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-40 sm:w-48 md:w-52 flex-shrink-0 mx-auto md:mx-0"
          />

        </div>

        {/* Missão e contexto */}
        <div className="bg-[#f0f9f4] border-2 border-[#007934] p-6 rounded-lg mb-12 shadow">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-4 text-[#007934]"
          >
            {t.about.title}
          </motion.h3>

          <ul className="list-disc list-inside text-[#003366] space-y-2 text-base sm:text-lg text-justify">
            {t.about.points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Atividades */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {t.activities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg hover:bg-[#f0fdf4] transition"
            >
              <div className="flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[#003366] text-justify">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link para eventos */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center text-lg font-medium"
        >
          <Link
            to="/events"
            className="text-[#007934] underline hover:text-[#005f29] transition"
          >
            {t.seeEvents}
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
