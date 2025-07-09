import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { motion } from 'framer-motion';

//Source: https://www.cm-leiria.pt/municipio/gabinete-de-comunicacao/noticias/noticia/reabilitacao-do-castelo-de-leiria-vence-premio-no-salao-do-imobiliario-de-portugal
import CasteloLeiria from '../../assets/CasteloLeiria.jpg';

import Waves from '../../components/visuals/Waves';
import RotatingWords from '../../components/visuals/RotatingWords';

export default function SectionIntro() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionHero;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/*Background animado com o efeito de ondas */}
      <Waves
        lineColor="#00275c"
        backgroundColor="white"
        waveSpeedX={0.02}
        waveSpeedY={0.02}
        waveAmpX={30}
        waveAmpY={30}
        friction={0.1}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />

      {/*Conteúdo acima das ondas */}
      <div className="mt-8 container mx-auto  sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          bg-white/30 backdrop-blur-md shadow-md rounded-xl px-10 py-12 w-full max-w-6xl flex flex-col md:flex-row items-center gap-10 z-10
          border-1 border-[#00275c] "
        >         
           {/* Texto à esquerda */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ staggerChildren: 0.2 }}
            variants={{ hidden: {}, visible: {} }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-900 leading-tight"
              variants={{
                hidden: { opacity: 0, y: -40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              {t.title} 
            </motion.h1>

            {/* Texto fixo */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-blue-900 font-medium text-center md:text-left"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              {t.staticText}
            </motion.p>

            {/* Texto rotativo */}
            <motion.p
              className="text-2xl sm:text-3xl font-semibold text-[#00275c] mt-2 text-center md:text-left"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <RotatingWords
                texts={t.rotatingWords}
                mainClassName="inline-block text-white px-2 rounded"
                staggerFrom="last"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                style={{backgroundColor: '#2579B9' }}
              />
            </motion.p>

            <motion.a
              href="#"
              className="mt-10 inline-flex items-center gap-2 bg-[#00275c] hover:bg-[#003a80] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              {t.button}
            </motion.a>
          </motion.div>

          {/* Imagem à direita */}
          <motion.img
            src={CasteloLeiria}
            alt="Castelo de Leiria"
            className="w-full md:w-1/2 max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-contain rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.4 }}
              whileHover={{ scale: 1.07, rotate: 0 }}

          />
        </div>
      </div>
    </section>
  );
}