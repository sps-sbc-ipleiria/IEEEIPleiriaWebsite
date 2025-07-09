import EventBlock from "../../events/EventBlock";
import { useLanguage } from "../../../contexts/LanguageContext";
import { translations } from "../../../translations";

import microControladoresImage from "/events/2024/microcontroladores.svg";

export default function WorkshopLatex() {
  const { lang } = useLanguage();
  const t = translations[lang].microchipLecture;

  return (
    <EventBlock
      image={microControladoresImage}
      title={t.title}
      type={t.type}
      date={t.date}
      location={t.location}
      description={t.description}
    />
  );
}