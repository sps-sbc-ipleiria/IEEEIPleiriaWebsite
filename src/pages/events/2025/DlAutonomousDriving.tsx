// pages/events/2025/MdiLlms.tsx
import EventoEspecial from "../EventSpecial";
import { useLanguage } from "../../../contexts/LanguageContext";
import { translations } from "../../../translations";

export default function DlAutonomousDriving() {
  const { lang } = useLanguage();
  const t = translations[lang].dlAutonomous;

  return (
    <EventoEspecial
      title={t.title}
      subtitle={t.subtitle}
      date={t.date}
      location={t.location}
      description={t.description}
      highlights={t.highlights}
      images={[
        "/events/2025/DlAutonomous/dl1.jpg",
        "/events/2025/DlAutonomous/dl2.jpg",
        "/events/2025/DlAutonomous/dl3.jpg",
        "/events/2025/DlAutonomous/dl4.jpg",
        "/events/2025/DlAutonomous/dl5.jpg",
        "/events/2025/DlAutonomous/dl6.jpg",
      ]}
    />
  );
}