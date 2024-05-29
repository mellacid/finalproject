import en from './en.json';
import de from './de.json';

const translations = {
  en,
  de,
};

export const getTranslation = (language) => translations[language];
