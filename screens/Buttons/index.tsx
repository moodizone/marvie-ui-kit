import * as React from "react";
import { View } from "react-native";

import Layout from "../../layout";
import { Button } from "../../lib/Button";
import { useConfig } from "../../config";
import { Colors } from "../../style/type";
import { useAppTranslation } from "../../locales/TranslationProvider";
import Gift from "../../assets/icons/Gift";

const Buttons = () => {
  const { gs, colors } = useConfig();
  const { t } = useAppTranslation();

  return (
    <Layout>
      {["red", "orange", "yellow", "green", "blue", "purple"].map((c) => (
        <View style={[gs.mb_3]} key={c}>
          <Button
            icon={<Gift color={"#fff"} />}
            title={t("weeklyProgress")}
            titleStyles={{ textTransform: "uppercase" }}
            type={"solid"}
            color={c as Colors}
            style={[gs.mb_1]}
          />
          <Button.Square
            loading
            icon={<Gift color={colors[c as Colors].i as string} />}
            title={t("weeklyProgress")}
            type={"outlined"}
            color={c as Colors}
            style={[gs.mb_1]}
          />
          <Button
            icon={<Gift color={colors[c as Colors].i as string} />}
            title={t("weeklyProgress")}
            type={"ghost"}
            color={c as Colors}
            style={[gs.mb_1]}
          />
        </View>
      ))}
    </Layout>
  );
};

export default Buttons;
