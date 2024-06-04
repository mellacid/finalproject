// AreYouReady.jsx
import {useLanguageContext} from "../context/LanguageContext";
import { getTranslation } from "../translations/translations";


function areYouReady() {
  const {language} = useLanguageContext();
  const t = getTranslation(language);
  return (
    <div>
      <h1 className="areYouReady">{t.areYouReady}</h1>
    </div>
  );
}

export default areYouReady;
