import * as React from "react";
import { Alert, View } from "react-native";

import ContinueCard from "../../component/Card/ContinueCard";
import Layout from "../../layout";
import Star from "../../assets/icons/Star";
import { Colors } from "../../style/type";
import { useAppTranslation } from "../../locales/TranslationProvider";
import { useConfig } from "../../config";

const ContinueCards = () => {
  const { t } = useAppTranslation();
  const { gs } = useConfig();

  return (
    <Layout>
      {["red", "orange", "yellow", "green", "blue", "purple"].map((c) => (
        <View style={[gs.mb_3]} key={c}>
          <ContinueCard
            theme={c as Colors}
            title={t("weeklyProgress")}
            caption={t("lorem")}
            onClick={() => Alert.alert(t("clicked"))}
            icon={<Star />}
          />
        </View>
      ))}
    </Layout>
  );
};

export default ContinueCards;
