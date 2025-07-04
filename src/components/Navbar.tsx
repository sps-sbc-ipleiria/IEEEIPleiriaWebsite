import { useState } from 'react';


function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + texto */}
        <div className="flex items-center space-x-2">
          <div className="text-xl font-bold tracking-wide">IEEE</div>
          <div className="text-sm leading-tight hidden sm:block">
            <p>Politécnico de Leiria</p>
            <p className="text-xs">IEEE Student Branch</p>
          </div>
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
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Departamentos</a></li>
          <li><a href="#" className="hover:underline">Eventos</a></li>
          <li><a href="#" className="hover:underline">Quem Somos</a></li>
          <li><a href="#" className="hover:underline">Contactos</a></li>
        </ul>

        {/* Botão Join Us (desktop) */}
        <a
          href="#"
          className="hidden md:inline-block ml-4 px-4 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-blue-900 transition-colors"
        >
          Join Us
        </a>
      </div>

      {/* Menu mobile dropdown */}
        {isMobileMenuOpen && (

        //Animação    
        <div className="md:hidden px-4 pb-4 space-y-2 font-medium transition-all duration-300 ease-in-out">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block hover:underline">Home</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block hover:underline">Departamentos</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block hover:underline">Eventos</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block hover:underline">Quem Somos</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block hover:underline">Contactos</a>
            <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-2 px-4 py-2 border border-white rounded-full text-white text-center font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
            Join Us
            </a>
        </div>
        )}
    </nav>
  );
}

export default Navbar;