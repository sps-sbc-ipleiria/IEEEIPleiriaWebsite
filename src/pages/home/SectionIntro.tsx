import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { motion } from 'framer-motion';

//Source: https://www.cm-leiria.pt/municipio/gabinete-de-comunicacao/noticias/noticia/reabilitacao-do-castelo-de-leiria-vence-premio-no-salao-do-imobiliario-de-portugal
import CasteloLeiria from '../../assets/CasteloLeiria.jpg';

import BlurText from '../../components/visuals/BlurText';

export default function SectionIntro() {

    const { lang } = useLanguage();
    const t = translations[lang].sectionHero;

    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-6 sm:gap-10 bg-gradient-to-br from-white to-slate-100 overflow-hidden pt-32 pb-32">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Texto animado à esquerda */}
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              transition={{ staggerChildren: 0.2 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-900 leading-tight "
                variants={{
                  hidden: { opacity: 0, y: -40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              >
                {t.title}
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0 text-justify"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              >
                {t.description}
              </motion.p>

              <motion.a
                href="#"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              >
                {t.button}
              </motion.a>
            </motion.div>

            <br />

            {/* Imagem animada à direita (em cima no mobile) */}
            <motion.img
              src={CasteloLeiria}
              alt="Castelo de Leiria"
              className="w-full md:w-1/2 max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-contain rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.4 }}
            />

        </div>
      </section>
    );
  }