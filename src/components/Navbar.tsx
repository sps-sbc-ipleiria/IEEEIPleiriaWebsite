import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import IEEEPolitecnico from '../assets/IEEEPolitecnico.svg';
import { useLanguage } from '../contexts/LanguageContext';

import { translations } from '../translations';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang].navbar;
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t.home },
    { to: '/departments', label: t.departments },
    { to: '/events', label: t.events },
    // { to: '/about', label: t.about },
    { to: '/contacts', label: t.contacts },
  ];

  return (
    <motion.nav
      className="fixed w-full z-50 text-white shadow-md border-b-3 border-white bg-[#00275C]"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-x-4 h-20">
        {/* Logo + texto */}
        <motion.a
          href="/"
          className="flex items-center"
          whileHover={{ scale: 1.07 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        >
          <img src={IEEEPolitecnico} alt="Logo IEEE" className="h-10 w-auto" />
        </motion.a>

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
        <ul className="hidden md:flex space-x-6 font-medium h-full items-center">
          {navLinks.map((link) => (
            <li key={link.to} className="h-full flex items-center">
              <Link
                to={link.to}
                className={`relative px-1 py-1 transition-colors duration-200 group ${location.pathname === link.to ? 'text-[#7ecbff]' : 'text-white'}`}
              >
                {link.label}
                <span className="block h-0.5 bg-[#7ecbff] rounded-full transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left" style={{ transformOrigin: 'left' }}></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Botões Join Us e seleção de idioma */}
        <div className="hidden md:flex items-center">
          {/* Botão Join Us (desktop) */}
          <motion.a
            href="/join"
            className="hidden md:inline-block ml-4 px-4 py-2 border-2 border-white rounded-lg text-white font-semibold hover:bg-white hover:text-blue-200 transition-colors"
            style={{ backgroundColor: '#2579B9' }}
            whileHover={{ scale: 1.08, backgroundColor: '#1e335c' }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            {t.join}
          </motion.a>
          {/* Botão de seleção de idioma */}
          <div className="ml-4">
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden px-4 pb-4 space-y-5 font-medium pt-3 border-t-yellow-100 bg-[#00275C]"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block hover:underline"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/join"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-2 px-4 py-2 border border-white rounded-full text-white text-center font-semibold hover:bg-white hover:text-blue-900 transition-colors bg-blue-400"
            >
              {t.join}
            </Link>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as 'pt' | 'en')}
              className="bg-transparent text-white font-medium outline-none align-items-center cursor-pointer flex"
            >
              <option className="text-black" value="pt">🇵🇹</option>
              <option className="text-black" value="en">🇬🇧</option>
            </select>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;