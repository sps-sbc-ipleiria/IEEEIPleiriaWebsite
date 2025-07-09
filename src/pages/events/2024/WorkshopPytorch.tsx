import EventBlock from "../../events/EventBlock";
import { useLanguage } from "../../../contexts/LanguageContext";
import { translations } from "../../../translations";

import pytorchImage from "/events/2024/pytorch.svg";

export default function WorkshopLatex() {
  const { lang } = useLanguage();
  const t = translations[lang].pytorchWorkshop;

  return (
    <EventBlock
      image={pytorchImage}
      title={t.title}
      type={t.type}
      date={t.date}
      location={t.location}
      description={t.description}
    />
  );
}