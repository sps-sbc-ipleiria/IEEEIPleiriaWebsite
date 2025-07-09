import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";
import { motion } from "framer-motion";
import Threads from "../../components/visuals/Thread";

export default function SectionEventsIntro() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionEventsIntro;

  return (
    <section className="relative w-full min-h-screen text-blue-900 flex items-center justify-center px-6">
      {/* Threads Background */}
      <div className="absolute inset-0 z-1">
        <Threads
          amplitude={1.5}
          distance={0.5}
          enableMouseInteraction={true}
          color={[0.0, 0.39, 0.92]}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl" >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
        >
          {t.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        //className="mt-6 text-lg sm:text-xl text-blue-900 leading-relaxed">
          className="mt-6 text-lg sm:text-xl text-blue-900 leading-relaxed px-6 py-4 rounded-xl bg-white backdrop-blur-xs shadow-md">
            {t.description}
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <button
            onClick={() =>
              document
                .getElementById("eventos-ano")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-10 px-6 py-3 bg-white border-blue-800 text-blue-900 font-semibold rounded-xl shadow-lg border-2 hover:bg-blue-100 transition"
          >
            {t.button}
          </button>
        </motion.div>
      </div>
    </section>
  );
}