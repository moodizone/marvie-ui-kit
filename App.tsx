import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";

import Home from "./screens/Home";
import useCachedResources from "./hooks/useCachedResources";
import { ConfigProvider } from "./ConfigProvier/ConfigProvider";

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return <Text>`useCachedResources` error</Text>;
  } else {
    return (
      <ConfigProvider>
        <SafeAreaView>
          <StatusBar />
          <Home />
        </SafeAreaView>
      </ConfigProvider>
    );
  }
}
