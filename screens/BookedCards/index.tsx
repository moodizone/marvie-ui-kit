import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

import Layout from "../../layout";
import { Card, useConfig } from "../../lib";
import { useAppTranslation } from "../../locales/TranslationProvider";
import { Colors } from "../../style/type";

const ghost = require("../../assets/images/ghost.png");

const BookedCards = () => {
  const { gs } = useConfig();
  const { t } = useAppTranslation();
  return (
    <Layout>
      {["red", "orange", "yellow", "green", "blue", "purple"].map((c) => (
        <View style={[gs.mb_1]} key={c}>
          <Card.Booked
            theme={c as Colors}
            title={t("weeklyProgress")}
            caption={t("weeklyProgress")}
            icon={<Image source={ghost} style={[styles.img]} />}
          />
        </View>
      ))}
    </Layout>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 36,
    height: 36,
  },
});

export default BookedCards;
