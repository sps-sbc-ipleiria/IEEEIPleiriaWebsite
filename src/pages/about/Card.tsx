import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";
import { motion } from "framer-motion";

interface TeamCardProps {
  image: string;
  name: string;
  roleKey: keyof typeof translations["pt"]["roles"];
  objectPosition?: "object-top" | "object-center";
}

export default function TeamCard({
  image,
  name,
  roleKey,
  objectPosition = "object-center",
}: TeamCardProps) {
  const { lang } = useLanguage();
  const role = translations[lang].roles[roleKey];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="relative flex flex-col items-center w-[240px] h-[340px] bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden border border-[#dfeee0] hover:border-[#78bd1f] transition-all duration-300 "
    >
      {/* Image section */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover ${objectPosition} transition-transform duration-500 hover:scale-105`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Text section */}
      <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-sm py-3 px-2 text-center rounded-t-2xl">
        <h3 className="font-semibold text-[#00275c] text-lg leading-tight truncate">
          {name}
        </h3>
        <p className="text-sm text-emerald-700 font-medium mt-1">{role}</p>
      </div>
    </motion.div>
  );
}
