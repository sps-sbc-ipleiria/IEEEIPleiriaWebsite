import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

import LatexImage from '../../assets/events/latex.svg';
import MicroImage from '../../assets/events/microcontroladores.svg';
import PyTorchImage from '../../assets/events/pytorch.svg';

export default function SectionEvents() {
  const { lang } = useLanguage();
  const t = translations[lang].sectionEvents;

  return (
    <section className="bg-[#00275C] text-white py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto bg-[#183a6e] p-6 sm:p-10 rounded-2xl space-y-6">
            
            <h2 className="text-xl sm:text-2xl font-bold">{t.title}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <img src={LatexImage} alt="Workshop LaTeX" className="rounded-xl shadow-lg object-contain" />
                <img src={MicroImage} alt="Aula Aberta Microcontroladores" className="rounded-xl shadow-lg object-contain" />
                <img src={PyTorchImage} alt="Workshop PyTorch" className="rounded-xl shadow-lg object-contain" />
            </div>

            <div className="mt-10">
            <Link to="/events"
                className="text-white font-bold underline hover:text-blue-100 transition-colors"
            >
                {t.link}
            </Link>
            </div>

        </div>
    </section>
  );
}
