import * as React from "react";
import { Button, View } from "react-native";

import { useAppTranslation } from "../locales/TranslationProvider";
import { useConfig } from "../config";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const { setLocale, locale } = useAppTranslation();
  const { setDirection, setTheme, direction, scheme, gs } = useConfig();
  return (
    <View style={[gs.mb_3, gs.row, gs.jbetween]}>
      <Button
        title={scheme as string}
        onPress={() => setTheme(scheme === "light" ? "dark" : "light")}
      />
      <Button
        title={direction}
        onPress={() => {
          setDirection(direction === "ltr" ? "rtl" : "ltr");
        }}
      />
      <Button
        title={locale}
        onPress={() => {
          setLocale(locale === "en" ? "fa" : "en");
        }}
      />
      <Button title={"BACK"} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Header;
