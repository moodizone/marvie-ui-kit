import React from "react";

import useCachedResources from "./hooks/useCachedResources";
import { ConfigProvider } from "./ConfigProvier/ConfigProvider";
import Home from "./screens/Home";
import { SafeAreaView, StatusBar, Text } from "react-native";

export default function App() {
  // const isLoadingComplete = useCachedResources();
  // console.log("App.tsx -> 222 : ", 222);
  // if (!isLoadingComplete) {
  //   return <Text>`useCachedResources` error</Text>;
  // } else {
    return (
      <ConfigProvider>
        <SafeAreaView>
          <StatusBar />
          <Home />
        </SafeAreaView>
      </ConfigProvider>
    );
  // }
}
