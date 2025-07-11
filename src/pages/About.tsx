import { useLanguage } from '../contexts/LanguageContext';
import TeamCard from '../pages/about/Card';
import { translations } from '../translations';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function About() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionAbout;

  const sectionStyles = {
    sps: "bg-[#f6faef] border-[#78bd1f] border-1",
    pes: "bg-[#f1fbf6] border-[#007934] border-1",
    cs:  "bg-[#fff8f0] border-[#f7941d] border-1",
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.12, duration: 0.6 }
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaf1fa] via-[#f7fafd] to-[#e3eaf6] py-12 px-2 sm:px-4 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="pt-30 text-4xl sm:text-5xl font-extrabold text-[#00275c] mb-4 tracking-tight text-center"
      >
        {t.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg sm:text-xl text-blue-900 mb-14 text-center max-w-2xl"
      >
        {t.description}
      </motion.p>

      {/* === SPS === */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.1, once: false }}
        className={`w-full max-w-6xl mb-16 rounded-3xl shadow-lg px-6 py-10 ${sectionStyles.sps}`}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-2 text-[#78bd1f] text-center tracking-tight"
        >
          {t.departments.sps.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-[#62a40d] text-center"
        >
          {t.departments.sps.description}
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {[
            { image: "/assets/cards/sps/Nicolas.png", name: "Nicolas Vasconcellos", roleKey: "president" },
            { image: "/assets/cards/sps/Daniel.jpg", name: "Daniel Nicolau", roleKey: "vicePresident" },
            { image: "/assets/cards/sps/Nuno.jpg", name: "Nuno Fernandes", roleKey: "secretary" },
            { image: "/assets/cards/sps/Rúben.jpg", name: "Rúben Francisco", roleKey: "treasurer" },
            { image: "/assets/cards/sps/Marco.jpg", name: "Marco Rebelo", roleKey: "webmaster" },
            { image: "/assets/cards/sps/asd.jpg", name: "Pessoal a add1", roleKey: "treasurer" },
            { image: "/assets/cards/sps/asd.jpg", name: "Pessoal a add2", roleKey: "treasurer" },
            { image: "/assets/cards/sps/asd.jpg", name: "Pessoal a add3", roleKey: "treasurer" },

          ].map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* === PES === */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.3, once: true }}
        className={`w-full max-w-6xl mb-16 rounded-3xl shadow-lg px-6 py-10 ${sectionStyles.pes}`}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-2 text-[#007934] text-center tracking-tight"
        >
          {t.departments.pes.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-[#007934] text-center mb-8"
        >
          {t.departments.pes.description}
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          {[
            { image: "/assets/cards/sps.jpg", name: "João Costa", roleKey: "president" },
            { image: "/assets/cards/sps.jpg", name: "Ana Silva", roleKey: "vicePresident" },
            { image: "/assets/cards/sps.jpg", name: "Carlos Lima", roleKey: "secretary" },
            { image: "/assets/cards/sps.jpg", name: "Maria Sousa", roleKey: "member" },
          ].map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              variants={cardVariants}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* === CS === */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.3, once: true }}
        className={`w-full max-w-6xl mb-10 rounded-3xl shadow-lg px-6 py-10 ${sectionStyles.cs}`}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-2 text-[#f7941d] text-center tracking-tight"
        >
          {t.departments.cs.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-[#f7941d] text-center mb-8"
        >
          {t.departments.cs.description}
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          {[
            { image: "/assets/cards/sps.jpg", name: "João Costa", roleKey: "president" },
            { image: "/assets/cards/sps.jpg", name: "Ana Silva", roleKey: "vicePresident" },
            { image: "/assets/cards/sps.jpg", name: "Carlos Lima", roleKey: "secretary" },
            { image: "/assets/cards/sps.jpg", name: "Maria Sousa", roleKey: "member" },
          ].map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              variants={cardVariants}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/*Conclusao*/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-8 max-w-3xl px-4"
      >
        <p className="text-lg sm:text-xl text-gray-700 font-medium">
          {t.conclusion}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto"
      >
        <a
          href="/join"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/join";
          }}
          className="mt-10 block text-center px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 transform
            bg-[#2579B9] text-white border-[#003366]
            hover:bg-white hover:text-[#003366] hover:scale-105 shadow-md hover:shadow-xl"
        >
          {t.join}
        </a>
      </motion.div>

    </div>
  );
}

export default About;
