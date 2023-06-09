import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

// Инициализация:
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        how: "How do you want your egg today?",
        choice: "How to choose the egg"
      }
    },
    it: {
      translation: {
        how: "Come vuoi il tuo uovo oggi?",
        choice: "Come scegliere l'uovo"
      }
    }
  },
  lng: "en", 
  fallbackLng: "en"
});

// // В компоненте:
// const { t } = useTranslation();
// <div>{t('how')}</div>
// // Или используя готовый компонент:
// const { t } = useTranslation();
// <Trans t={t}>how</Trans>

// // Переключение:
// const { i18n } = useTranslation();
// i18n.changeLanguage('it');