// pages/events/2025/MdiLlms.tsx
import EventoEspecial from "../EventSpecial";
import { useLanguage } from "../../../contexts/LanguageContext";
import { translations } from "../../../translations";

export default function MdiMSP() {
  const { lang } = useLanguage();
  const t = translations[lang].MdiMSP;

  return (
    <EventoEspecial
      title={t.title}
      subtitle={t.subtitle}
      date={t.date}
      location={t.location}
      description={t.description}
      highlights={t.highlights}
      images={[
        "/events/2025/mdi1.jpg",
        "/events/2025/mdi2.jpg",
        "/events/2025/mdi3.jpg",
        "/events/2025/mdi4.jpg",
      ]}
    />
  );
}
