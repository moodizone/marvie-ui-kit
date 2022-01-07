import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Layout from "../layout";
import {  ROUTES } from "../router/ROUTES";
import { Text } from "../lib";
import { useConfig } from "../config";

const Home = () => {
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
