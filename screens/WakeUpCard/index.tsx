import * as React from "react";
import { View } from "react-native";

import Layout from "../../layout";
import { Card } from "../../lib";
import { WakeUpCardProps } from "../../lib/Card/WakeUpCard/type";
import { useAppTranslation } from "../../locales/TranslationProvider";
import { useConfig } from "../../config";

const rabbit = require("../../assets/images/rabbit.png");
const _3vertical = require("../../assets/images/3vertical.png");
const chick = require("../../assets/images/chick.png");

const WakeUpCards = () => {
  const { t } = useAppTranslation();
  const { gs } = useConfig();
  const items: WakeUpCardProps[] = [
    {
      image: rabbit,
      firstLine: t("weeklyProgress"),
      secondLine: t("weeklyProgress"),
      theme: "green",
    },
    {
      image: chick,
      firstLine: t("weeklyProgress"),
      secondLine: t("weeklyProgress"),
      theme: "yellow",
    },
    {
      image: _3vertical,
      firstLine: t("weeklyProgress"),
      secondLine: t("weeklyProgress"),
      theme: "red",
    },
  ];

  return (
    <Layout>
      <View style={[gs.acenter, gs.jcenter]}>
        <View style={{ width: "50%" }}>
          {items.map((item, index) => (
            <View style={[gs.mb_1]} key={index}>
              <Card.WakeUp
                firstLine={item.firstLine}
                image={item.image}
                theme={item.theme}
              />
            </View>
          ))}
        </View>
      </View>
    </Layout>
  );
};

export default WakeUpCards;
