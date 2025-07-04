import ieeeLogo from '../../assets/IEEELogo.svg';

import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

export default function SectionIEEE() {

    const { lang } = useLanguage();
    const t = translations[lang].sectionIEEE;

    return (
        <section className="bg-[#00275C] text-white py-10 px-10">
            <div className='bg-[#183a6e] text-white px-4 py-10 md:px-10 rounded-2xl'>
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 items-center">

                    {/* Texto */}
                    <div className="md:col-span-2 space-y-6 text-justify">
                        <h2 className="text-xl sm:text-2xl font-bold text-white">{t.title}</h2>
                        <p className="text-sm md:text-base leading-relaxed">{t.paragraph1}</p>
                        <p className="text-sm md:text-base leading-relaxed">
                            <strong>{t.missionTitle}</strong> {t.paragraph2}
                        </p>
                        <p className="text-sm md:text-base leading-relaxed">
                            <strong>{t.impactTitle}</strong> {t.paragraph3}
                        </p>
                    </div>

                    {/* Imagem */}
                    <div className="flex justify-center aspect-square rounded-lg">
                        <img
                            src={ieeeLogo}
                            alt="IEEE Logo"
                            className="max-w-[250px] md:max-w-[300px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
