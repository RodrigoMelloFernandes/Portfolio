import { createContext, useState } from 'react';
import propTypes from 'prop-types';
import portuguese from 'data/portugueseVersion.json';
import english from 'data/englishVersion.json';

export const LanguageContext = createContext();
export function LanguageContextProvider({children}) {
  
  let [language, setLanguage] = useState(true);

  function HandleLanguage(language) {
    let handleLanguage = language ? portuguese : english;
    return handleLanguage;
  }
  return (
    <LanguageContext.Provider value={{ language, setLanguage, HandleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageContextProvider.propTypes = {
  children: propTypes.any,
};

