import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations";

interface TeamCardProps {
  image: string;    
  name: string;
  roleKey: keyof typeof translations["pt"]["roles"];
  objectPosition?: "object-top" | "object-center";

}


export default function Card({ image, name, roleKey }: TeamCardProps) {
  const { lang } = useLanguage();
  const role = translations[lang].roles[roleKey];

  return (
    <div className="relative flex flex-col items-center w-64 h-full">

      {/* Card */}
      <div className="relative z-20 mt-16 w-[200px] h-[350px] bg-white rounded-2xl shadow-xl flex flex-col">
        {/* Image section */}
        <div className="h-[240px] w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-t-2xl"
          />
        </div>

        {/* Text section */}
        <div className="flex-1 flex flex-col justify-center items-center p-4">
          <h3 className="font-bold text-xl text-[#00275c] text-center leading-tight">
            {name}
          </h3>
          <p className="text-sm text-blue-500 font-medium mt-1 text-center">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}