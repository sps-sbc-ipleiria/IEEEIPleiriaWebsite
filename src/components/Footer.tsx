import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-[#00275C] text-white pt-10 pb-6 px-4  border-t-4 border-[#7ecbff] shadow-lg"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-center">
        {/* Identidade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center text-center"
        >
          <h4 className="text-2xl font-extrabold mb-2 text-[#7ecbff] tracking-tight">{t.identity}</h4>
          <p className="text-sm text-blue-100 leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        {/* Navegação */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-left text-center"
        >
            <h5 className="text-lg font-semibold mb-2 text-white">{t.navigation}</h5>
            <div className="grid grid-cols-2 text-center">
                <ul className="space-y-2 text-sm">
                    <li>
                        <a href="/" className="hover:text-[#7ecbff] transition-colors duration-200">
                            {t.links.intro}
                        </a>
                    </li>
                    <li>
                        <a href="/events" className="hover:text-[#7ecbff] transition-colors duration-200">
                            {t.links.events}
                        </a>
                    </li>
                    <li>
                        <a href="/departments" className="hover:text-[#7ecbff] transition-colors duration-200">
                            {t.links.departments}
                        </a>
                    </li>
                </ul>
                <ul className="space-y-2 text-sm">
                    <li>
                        <a href="/contacts" className="hover:text-[#7ecbff] transition-colors duration-200">
                            {t.links.contacts}
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-[#7ecbff] transition-colors duration-200">
                            {t.links.about}
                        </a>
                    </li>
                    <li>
                        <a href="/join" className="hover:text-[#7ecbff] transition-colors duration-200">
                            {t.links.join}
                        </a>
                    </li>
                </ul>
            </div>
        </motion.div>

        {/* Contactos e redes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center text-center"
        >
          <h5 className="text-lg font-semibold mb-2 text-white">{t.contacts}</h5>
          <p className="text-sm mb-2 text-blue-100">{t.email}</p>
          <p className="text-sm mb-4 text-blue-100">{t.location}</p>
          {/* <div className="flex gap-4 text-2xl justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.2, color: "#7ecbff" }}
              href="https://instagram.com" target="_blank" className="hover:text-[#7ecbff] transition-colors"
            ><FaInstagram /></motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#7ecbff" }}
              href="https://linkedin.com" target="_blank" className="hover:text-[#7ecbff] transition-colors"
            ><FaLinkedin /></motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#7ecbff" }}
              href="https://youtube.com" target="_blank" className="hover:text-[#7ecbff] transition-colors"
            ><FaYoutube /></motion.a>
          </div> */}
        </motion.div>
      </div>

      <hr className="my-8 border-[#7ecbff] opacity-60" />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-sm text-blue-200 text-center"
      >
        {t.copyright}
      </motion.p>
    </motion.footer>
  );
}
