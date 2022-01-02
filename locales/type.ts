import i18n from "i18n-js";
import { Dispatch } from "react";

export type Locale = "en" | "fa";
interface TranslationContextValueType {
  /**
   * Translation method
   */
  t: typeof i18n.t;

  /**
   * Switch between languages
   */
  setLocale: Dispatch<Locale>;

  /**
   * Indicate current active locale
   */
  locale: Locale;
}

export type TranslationContextType = TranslationContextValueType | undefined;
