import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

import { motion } from "framer-motion";


export default function SectionHero() {

    const { lang } = useLanguage();
    const t = translations[lang].sectionHeroDepartments;

    return (
        <section
            className="relative w-full min-h-screen text-white flex items-center justify-center px-6"
            style={{
                background: "linear-gradient(0deg, rgba(255,255,255,1) 7%, rgba(191,213,236,1) 15%, rgba(132,175,218,1) 28%, rgba(53,124,195,1) 45%, rgba(0,89,179,1) 57%, rgba(0,57,123,1) 77%, rgba(0,31,77,1) 93%)",
            }}
        >

            {/* Background SVG animado opcional */}
            <div className="absolute inset-0 opacity-20 z-0">
                <img
                src="/background-tech.svg"
                alt="background tech"
                className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 text-center max-w-3xl">
                <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
                >
                {t.title}
                </motion.h1>

                <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-6 text-lg sm:text-xl text-blue-200"
                >
                {t.subtitle}
                </motion.p>

                <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                    document
                    .getElementById("departamentos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-10 px-6 py-3 bg-white text-blue-900 font-semibold rounded-xl shadow-lg hover:bg-blue-100 transition" 
                >
                {t.button}
                </motion.button>
            </div>
        </section>
  );
}
