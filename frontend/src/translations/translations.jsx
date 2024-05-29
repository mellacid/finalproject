import en from "./en.json";
import de from "./de.json";
import it from "./it.json";
import pl from "./pl.json";
import tr from "./tr.json";

const translations = {
  en,
  de,
  it,
  pl,
  tr,
};

export const getTranslation = (language) => translations[language];
