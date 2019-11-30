import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES_AR from './assets/locales/es_AR/translation.json';
import translationEN_US from './assets/locales/en_US/translation.json';

// the translations
const resources = {
	es_AR: {
		translation: translationES_AR
	},
	en_US: {
		translation: translationEN_US
	}
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: 'es_AR',

		keySeparator: '.', // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;
