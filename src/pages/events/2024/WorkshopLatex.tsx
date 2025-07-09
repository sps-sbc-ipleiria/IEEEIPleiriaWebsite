import EventBlock from "../../events/EventBlock";
import { useLanguage } from "../../../contexts/LanguageContext";
import { translations } from "../../../translations";

import latexImage from "/events/2024/latex.svg";

export default function WorkshopLatex() {
  const { lang } = useLanguage();
  const t = translations[lang].workshopLatex;

  return (
    <EventBlock
      image={latexImage}
      title={t.title}
      type={t.type}
      date={t.date}
      location={t.location}
      description={t.description}
      reverse
    />
  );
}