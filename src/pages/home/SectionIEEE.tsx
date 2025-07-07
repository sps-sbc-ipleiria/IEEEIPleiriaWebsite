import ieeeLogo from '../../assets/IEEELogo.svg';

import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

import { motion } from 'framer-motion';

export default function SectionIEEE() {

    const { lang } = useLanguage();
    const t = translations[lang].sectionIEEE;

     return (
    <section className="bg-[#00275C] text-white py-10 px-6 md:px-10">
      <div className="bg-[#183a6e] text-white border-2 px-4 py-5 md:px-10 rounded-2xl shadow-xl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-center">

          {/* Texto com animação */}
          <motion.div
            className="md:col-span-2 space-y-6 text-justify"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white">{t.title}</h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-sm md:text-base leading-relaxed"
            >
              {t.paragraph1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm md:text-base leading-relaxed"
            >
              <strong>{t.missionTitle}</strong> {t.paragraph2}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm md:text-base leading-relaxed"
            >
              <strong>{t.impactTitle}</strong> {t.paragraph3}
            </motion.p>
          </motion.div>

          {/* Imagem com animação */}
          <motion.div
            className="flex justify-center aspect-square rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img
              src={ieeeLogo}
              alt="IEEE Logo"
              className="max-w-[250px] md:max-w-[300px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}