import * as React from "react";
import { View } from "react-native";

import { Typography, useConfig } from "../../lib";
import { useAppTranslation } from "../../locales/TranslationProvider";
import Layout from "../../layout";

const Typographies = () => {
  const { t } = useAppTranslation();
  const { gs } = useConfig();
  return (
    <Layout>
      {[1, 2, 3, 4, 5].map((n) => (
        <View key={n}>
          {/*@ts-ignore*/}
          <Typography.Title level={n} key={n}>
            {t("weeklyProgress")}
          </Typography.Title>
        </View>
      ))}
      <View style={[gs.mb_3]}>
        <Typography.Text>{t("lorem")}</Typography.Text>
      </View>
      <View style={[gs.mb_3]}>
        <Typography.Text>{t("lorem")}</Typography.Text>
      </View>
      <View style={[gs.mb_3]}>
        <Typography.Text bold>{t("weeklyProgress")}</Typography.Text>
      </View>
      <View style={[gs.mb_3]}>
        <Typography.Text thin>{t("weeklyProgress")}</Typography.Text>
      </View>
      <View style={[gs.mb_3]}>
        <Typography.Text underlined>{t("weeklyProgress")}</Typography.Text>
      </View>
      <View style={[gs.mb_3]}>
        <Typography.Text deleted>{t("weeklyProgress")}</Typography.Text>
      </View>
      <View style={[gs.mb_3]}>
        <Typography.Text disabled>{t("weeklyProgress")}</Typography.Text>
      </View>
      <View style={[gs.mb_3]}>
        <Typography>
          <Typography.Text mark>{t("weeklyProgress")}</Typography.Text>
        </Typography>
      </View>
      <View style={[gs.mb_3]}>
        <Typography.Text code>{t("weeklyProgress")}</Typography.Text>
      </View>
      <View style={[gs.mb_3]}>
        <Typography.Text link>{t("weeklyProgress")}</Typography.Text>
      </View>
    </Layout>
  );
};

export default Typographies;
