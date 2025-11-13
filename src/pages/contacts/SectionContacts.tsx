import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function SectionContacts() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionContact;

  return (
    <section className="bg-white text-blue-900 min-h-screen flex items-center justify-center px-4 md:px-10 pt-13">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Texto + info */}
        <div className="space-y-6">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.title}
          </motion.h2>

          <motion.p
            className="text-lg text-blue-900 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <ul className="space-y-4 text-base">
              {/* <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#2579B9]" /> <span>+351 912 345 678</span>
              </li> */}
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#2579B9]" /> <span>ieee@ipleiria.pt</span>
              </li>
              {/* <li className="flex items-center gap-3">
                <FaInstagram className="text-[#2579B9]" />
                <a href="https://instagram.com/ieeeipleiria" target="_blank" className="hover:underline">@ieeeipleiria</a>
              </li>
              <li className="flex items-center gap-3">
                <FaFacebook className="text-[#2579B9]" />
                <a href="https://facebook.com/ieeeipleiria" target="_blank" className="hover:underline">IEEE IPLeiria</a>
              </li> */}
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#2579B9]" /> <span>ESTG, IPLeiria - Campus 2, Leiria</span>
              </li>
            </ul>
           </motion.div>
        </div>

        {/* Mapa embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full h-80 rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1534.115997600368!2d-8.821927620484647!3d39.73443929672617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2spt!4v1751911446597!5m2!1spt-PT!2spt"             
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default SectionContacts;