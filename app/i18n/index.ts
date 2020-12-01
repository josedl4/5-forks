import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from './en.json';
import es from './es.json';

const DEFAULT_LANG = 'en';

const resources = { en, es };

const getLanguage = () => {
    let locale = Localization.locale;
    locale = locale ? locale.split('-')[0] : locale;
    return locale && resources[locale] ? locale : DEFAULT_LANG;
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: getLanguage(),
        fallbackLng: DEFAULT_LANG,
        keySeparator: '.',
        interpolation: {
            escapeValue: false
        }
    });


export default i18n;