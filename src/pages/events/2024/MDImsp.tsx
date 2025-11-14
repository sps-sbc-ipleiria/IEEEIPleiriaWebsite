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
        "/events/2024/mdimsp/capa1.png",
        "/events/2024/mdimsp/1.jpg",
        "/events/2024/mdimsp/2.jpg",
        "/events/2024/mdimsp/3.jpg",
        "/events/2024/mdimsp/4.jpg",
        "/events/2024/mdimsp/5.jpg",
        "/events/2024/mdimsp/6.jpg",
        "/events/2024/mdimsp/7.jpg",
        "/events/2024/mdimsp/8.jpg",
        "/events/2024/mdimsp/9.jpg",
        "/events/2024/mdimsp/10.jpg",
        "/events/2024/mdimsp/11.jpg",
        "/events/2024/mdimsp/12.jpg",
      ]}
    />
  );
}
