import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>('pt');

  // Atualiza o estado e guarda no sessionStorage
  const setLang = (newLang: Language) => {
    setLangState(newLang);
    sessionStorage.setItem('lang', newLang);
  };

  // Ao carregar, verifica se há valor no sessionStorage
  useEffect(() => {
    const storedLang = sessionStorage.getItem('lang') as Language | null;
    if (storedLang === 'pt' || storedLang === 'en') {
      setLangState(storedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
