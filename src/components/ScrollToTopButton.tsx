// src/components/ScrollToTopButton.tsx
import { useEffect, useState } from "react";
import setaImg from "../assets/icons/ArrowToTop.svg";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300); // Mostra o botão após algum scroll
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    (
        //Mostra a animação de scroll para o topo e aparecimento smooth do botão
        <button
            onClick={scrollToTop}
            className={`fixed bottom-10 right-10 z-50 p-3 rounded-full shadow-lg hover:bg-[#004B86] transition-all duration-300 ease-in-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'} 
                `}
        >
            <img src={setaImg} alt="Voltar ao topo" className="w-10 h-10" />
        </button>
    )
  );
}
