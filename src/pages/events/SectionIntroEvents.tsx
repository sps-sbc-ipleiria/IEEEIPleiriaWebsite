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
      <div className="bg-white-100 absolute inset-0 z-1"> 
        <Threads
          amplitude={1.5}
          distance={0.5}
          enableMouseInteraction={true}
          color={[0.0, 0.39, 0.92]}
        /> 
      </div>


      {/* <div className="absolute inset-0 z-1 overflow-hidden"> */}

      {/* FUNDO LINEAR UNIFORME IEEE */}
        {/* <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #BCDAF7 0%, #BCDAF7 100%)",
          }}
        /> */}

        {/* VINHETA PARA DAR PROFUNDIDADE */}
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.25), rgba(0,0,0,0.15) 75%)",
            mixBlendMode: "soft-light",
          }}
        /> */}

        {/* GRID IEEE VISÍVEL E LIMPO */}
        {/* <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.45) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.45) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        /> */}

        {/* LUZ CENTRAL MAIS NÍTIDA */}
        {/* <div
          className="absolute top-[25%] left-1/2 w-[100%] h-[60%] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,255,255,0) 70%)",
            filter: "blur(60px)",
            opacity: 0.55,
          }}
        />

      </div> */}



      <div className="relative z-10 text-center max-w-4xl " >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold flex items-center "
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