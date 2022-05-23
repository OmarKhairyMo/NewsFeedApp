import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';
import EN from './lang/EN.json'
import AR from "./lang/AR.json"

// the translations
const resources = {
    en: {
        translation: EN
    },
    ar: {
        translation: AR
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: I18nManager.isRTL ? 'ar' : 'en',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;