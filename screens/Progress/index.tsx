import * as React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import RingProgress from "../../component/Graphs/RingProgress";
import SingleProgress from "../../component/Graphs/SingleProgress/SingleProgress";
import { useAppTranslation } from "../../locales/TranslationProvider";
import { useConfig } from "../../config";
import Layout from "../../layout";

const salad = require("../../assets/images/salad.png");

const Progress = () => {
  const { t } = useAppTranslation();
  const { gs } = useConfig();

  return (
    <Layout>
      <View style={[gs.mb_3]}>
        <SingleProgress
          color={"#FF575F"}
          title={t("weeklyProgress")}
          icon={<AntDesign name="arrowup" size={24} color="#fff" />}
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
    </Layout>
  );
};

export default Progress;
