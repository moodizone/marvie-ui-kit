import React from "react";

import useCachedResources from "./hooks/useCachedResources";
import { ConfigProvider } from "./ConfigProvier/ConfigProvider";
import Home from "./screens/Home";
import { SafeAreaView, StatusBar } from "react-native";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
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
