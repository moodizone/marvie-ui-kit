import React from "react";
import { Button, View } from "react-native";

import ArrowUp from "../assets/icons/ArrowUp";
import Container from "../component/Layout/Container";
import SingleProgress from "../component/Graphs/SingleProgress/SingleProgress";
import { useConfig } from "../lib/ConfigProvider";
import RingProgress from "../component/Graphs/RingProgress";
import { useAppTranslation } from "../locales/TranslationProvider";

const salad = require("../assets/images/salad.png");

const Home = () => {
  const { t, setLocale, locale } = useAppTranslation();
  const { setDirection, setTheme, direction, scheme, gs } = useConfig();
  return (
    <Container>
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
      </View>
      <View style={[gs.mb_3]}>
        <SingleProgress
          color={"#FF575F"}
          title={t("weeklyProgress")}
          icon={<ArrowUp />}
          percent={15}
        />
      </View>
      <View style={[gs.mb_3]}>
        <RingProgress
          title={t("weeklyProgress")}
          records={[
            { color: "#FF575F", title: t("tomato"), percent: 30 },
            { color: "#ffbc25", title: t("orange"), percent: 30 },
            { color: "#25c685", title: t("cucumber"), percent: 30 },
          ]}
          image={salad}
        />
      </View>
    </Container>
  );
};

export default Home;
