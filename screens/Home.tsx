import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Layout from "../layout";
import { useAppTranslation } from "../locales/TranslationProvider";
import { useConfig } from "../config";
import { Text } from "../lib";
import { ROUTES } from "../router/ROUTES";

const Home = () => {
  const { t } = useAppTranslation();
  const { gs } = useConfig();
  const navigation = useNavigation();
  return (
    <Layout>
      {Object.values(ROUTES).map(({ name }) => (
        <View style={[gs.mb_1]} key={name}>
          <TouchableOpacity onPress={() => navigation.navigate(name)}>
            <Text>{name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </Layout>
  );
};

export default Home;
