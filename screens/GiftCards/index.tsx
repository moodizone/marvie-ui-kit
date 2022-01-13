import * as React from "react";
import { View } from "react-native";
import {AntDesign} from "@expo/vector-icons";

import Layout from "../../layout";
import { Colors } from "../../style/type";
import { useAppTranslation } from "../../locales/TranslationProvider";
import {Card, useConfig} from "../../lib";

const GiftCards = () => {
  const { t } = useAppTranslation();
  const { gs } = useConfig();

  return (
    <Layout>
      {["red", "orange", "yellow", "green", "blue", "purple"].map((c) => (
        <View style={[gs.mb_3]} key={c}>
          <Card.Gift
            theme={c as Colors}
            title={t("weeklyProgress")}
            caption={t("lorem")}
            icon={<AntDesign name="gift" size={24} color="#fff" />}
          />
        </View>
      ))}
    </Layout>
  );
};

export default GiftCards;
