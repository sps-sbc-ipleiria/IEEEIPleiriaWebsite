import { useState } from 'react';

import IEEEPolitecnico from '../assets/IEEEPolitecnico.svg';

//Tradução
const translations = {
  pt: {
    home: 'Início',
    departments: 'Departamentos',
    events: 'Eventos',
    about: 'Quem Somos',
    contacts: 'Contactos',
    join: 'Junta-te a nós',
  },
  en: {
    home: 'Home',
    departments: 'Departments',
    events: 'Events',
    about: 'About Us',
    contacts: 'Contacts',
    join: 'Join Us',
  },
};

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'pt' | 'en'>('pt'); // 'pt' por defeito

  return (

    <nav className="text-white shadow-md border-b-3 border-white" style={{backgroundColor: '#00275C' }}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + texto */}
        <div className="flex items-center space-x-2">
          <a href="#" className="flex items-center">
            <img src={IEEEPolitecnico} alt="Logo IEEE" className="h-10 w-auto" />

            {/* <div className="text-sm leading-tight hidden sm:block">
              <p>Politécnico de Leiria</p>
              <p className="text-xs">IEEE Student Branch</p>
            </div> */}
          </a>
        </div>

        {/* Botão de menu mobile (hambúrguer) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6 font-medium">
            <li><a href="#">{translations[lang].home}</a></li>
            <li><a href="#">{translations[lang].departments}</a></li>
            <li><a href="#">{translations[lang].events}</a></li>
            <li><a href="#">{translations[lang].about}</a></li>
            <li><a href="#">{translations[lang].contacts}</a></li>
        </ul>

 
        {/* Botões Join Us e seleção de idioma */}
        <div className="hidden md:flex items-center">
          {/* Botão Join Us (desktop) */}
          <a
            href="#"
            className="hidden md:inline-block ml-4 px-4 py-2 border-2 border-white rounded-lg
                  text-white font-semibold hover:bg-white hover:text-blue-200 transition-colors"
            style={{backgroundColor: '#2579B9' }}
          >
            {translations[lang].join}
          </a>
        
          {/* Botão de seleção de idioma */}
          <div className="ml-2">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as 'pt' | 'en')}
              className="bg-transparent text-white font-medium outline-none align-items-center cursor-pointer flex"
            >
              <option className="text-black" value="pt">🇵🇹</option>
              <option className="text-black" value="en">🇬🇧</option>
            </select>
          </div>

        </div>

      </div>

      {/* Menu mobile dropdown */}
        {isMobileMenuOpen && (

        //Animação    
        <div className="md:hidden px-4 pb-4 space-y-5 font-medium transition-all duration-300 ease-in-out pt-3 border-t-yellow-100 ">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block hover:underline">Home</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block hover:underline">Departamentos</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block hover:underline">Eventos</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block hover:underline">Quem Somos</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block hover:underline">Contactos</a>
            <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-2 px-4 py-2 border border-white rounded-full text-white text-center font-semibold hover:bg-white hover:text-blue-900 transition-colors  bg-blue-400"
            >
            Join Us
            </a>
        </div>
        )}
    </nav>
  );
}

export default Navbar;