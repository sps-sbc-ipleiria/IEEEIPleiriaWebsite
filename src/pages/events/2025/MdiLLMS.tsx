// pages/events/2025/MdiLlms.tsx
import EventoEspecial from "../EventSpecial";
import { useLanguage } from "../../../contexts/LanguageContext";
import { translations } from "../../../translations";

export default function MdiLlms() {
  const { lang } = useLanguage();
  const t = translations[lang].mdiLlms;

  return (
    <EventoEspecial
      title={t.title}
      subtitle={t.subtitle}
      date={t.date}
      location={t.location}
      description={t.description}
      highlights={t.highlights}
      images={[
        "/events/2025/MDIllm/capa.jpeg",
        "/events/2025/MDIllm/mdi1.jpeg",
        "/events/2025/MDIllm/mdi2.jpeg",
        "/events/2025/MDIllm/mdi3.jpeg",
        "/events/2025/MDIllm/mdi4.jpeg",
        "/events/2025/MDIllm/mdi5.jpeg",
      ]}
    />
  );
}
