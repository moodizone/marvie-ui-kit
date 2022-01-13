import * as React from "react";
import { Alert, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Layout from "../../layout";
import { Colors } from "../../style/type";
import { useAppTranslation } from "../../locales/TranslationProvider";
import { useConfig } from "../../config";
import { Card } from "../../lib";

const ContinueCards = () => {
  const { t } = useAppTranslation();
  const { gs } = useConfig();

  return (
    <Layout>
      {["red", "orange", "yellow", "green", "blue", "purple"].map((c) => (
        <View style={[gs.mb_3]} key={c}>
          <Card.Continue
            theme={c as Colors}
            title={t("weeklyProgress")}
            caption={t("lorem")}
            onClick={() => Alert.alert(t("clicked"))}
            icon={<AntDesign name="star" size={24} color="#fff" />}
          />
        </View>
      ))}
    </Layout>
  );
};

export default ContinueCards;
