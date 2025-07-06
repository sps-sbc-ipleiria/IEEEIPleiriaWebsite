import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { motion } from 'framer-motion';

export default function NotFound() {
  const { lang } = useLanguage();
  const t = translations[lang].notFound;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#dbe9f8] text-center px-4">
      <div className="max-w-xl">
        {/* Número  404*/}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[8rem] font-extrabold text-blue-900 drop-shadow-md"
        >
          404
        </motion.h1>

        {/* Título*/}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4"
        >
          {t.title}
        </motion.h2>

        {/* Descrição com efeito de entrada */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base sm:text-lg text-blue-700 mb-8 leading-relaxed font-semibold"
        >
          {t.description}
        </motion.p>

        {/* Botão de voltar */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg hover:bg-blue-800"
        >
          {t.link}
        </motion.a>
      </div>
    </section>
  );
}
