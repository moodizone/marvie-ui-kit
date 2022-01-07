import * as React from "react";
import { View } from "react-native";

import Layout from "../../layout";
import { useConfig } from "../../lib";
import { Colors } from "../../style/type";
import { useAppTranslation } from "../../locales/TranslationProvider";
import GiftCard from "../../lib/Card/GiftCard";
import Gift from "../../assets/icons/Gift";

const GiftCards = () => {
  const { t } = useAppTranslation();
  const { gs } = useConfig();

  return (
    <Layout>
      {["red", "orange", "yellow", "green", "blue", "purple"].map((c) => (
        <View style={[gs.mb_3]} key={c}>
          <GiftCard
            theme={c as Colors}
            title={t("weeklyProgress")}
            caption={t("lorem")}
            icon={<Gift />}
          />
        </View>
      ))}
    </Layout>
  );
};

export default GiftCards;
