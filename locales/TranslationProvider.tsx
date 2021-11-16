import * as React from "react";
import i18n from "i18n-js";

import en from "./en.json";
import fa from "./fa.json";
import { Locale, TranslationContextType } from "./type";

const defaultLocale = "en";
i18n.defaultLocale = defaultLocale;
i18n.locale = defaultLocale;
i18n.translations = { fa, en };
i18n.fallbacks = true;

const TranslationContext =
  React.createContext<TranslationContextType>(undefined);
TranslationContext.displayName = "TranslationContext";

const TranslationProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<Locale>(defaultLocale);
  const setLocale = (lng: Locale) => {
    i18n.locale = lng;
    setState(lng);
  };
  const value: TranslationContextType = { t: i18n.t, setLocale, locale: state };
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

function useAppTranslation() {
  const context = React.useContext<TranslationContextType>(TranslationContext);
  if (context === undefined)
    throw Error(
      "`useTranslation` hook should be used within `<TranslationProvider />`"
    );
  return context;
}

export { useAppTranslation, TranslationProvider };
