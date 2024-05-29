import { createContext, useState, useContext } from 'react';


const LanguageContext = createContext(null);
export const useLanguageContext = () => useContext(LanguageContext);


export default function LanguageContextProvider ({ children }) {
  const [language, setLanguage] = useState('en');

 

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}



