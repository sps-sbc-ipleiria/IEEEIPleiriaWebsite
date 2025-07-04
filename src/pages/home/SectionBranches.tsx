import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

import { Link } from 'react-router-dom';
import IEEEComputer from '../../assets/branches/CS.svg';
import IEEESignal from '../../assets/branches/SPS.svg';
import IEEEPES from '../../assets/branches/PES.svg';

export default function sectionBranches() {

    const { lang } = useLanguage();
    const t = translations[lang].sectionBranches;

    return (
        <section className="bg-white text-blue-900 py-12 px-4 md:px-10">
            <div className="max-w-7xl mx-auto space-y-6" >
                
                <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#2579B9' }}>{t.title}</h2>

                <p className="text-sm md:text-base leading-relaxed text-justify font-[750]" style={{ color: '#04314C' }}>{t.paragraph1}</p>

                <p className="text-sm md:text-base leading-relaxed text-justify font-bold" style={{ color: '#04314C' }}>{t.paragraph2}</p>

                <div className="flex flex-wrap items-center justify-between mt-6">
                    
                    <img src={IEEESignal} alt="Signal Processing Society"
                    className="h-20 sm:h-28 md:h-40 lg:h-60 object-contain"/>
                    
                    <img src={IEEEComputer} alt="Computer Society"
                    className="h-20 sm:h-28 md:h-40 lg:h-60 object-contain"/>
                    
                    <img src={IEEEPES} alt="Power & Energy Society"
                    className="h-20 sm:h-28 md:h-40 lg:h-60 object-contain"/>

                </div>

                <div className="mt-6">
                    <Link to="/departments"   className="font-[950] underline hover:text-blue-900 transition-colors" style={{ color: '#2579B9' }}>
                    {t.link}
                    </Link>
                </div>

            </div>
        </section>
    );
}
