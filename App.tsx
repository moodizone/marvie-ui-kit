import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import Home from "./screens/Home";
import useCachedResources from "./hooks/useCachedResources";
import { TranslationProvider } from "./locales/TranslationProvider";
import { Text, ConfigProvider } from "./lib";

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return <Text>`useCachedResources` error</Text>;
  } else {
    return (
      <TranslationProvider>
        <ConfigProvider>
          <SafeAreaView>
            <StatusBar />
            <Home />
          </SafeAreaView>
        </ConfigProvider>
      </TranslationProvider>
    );
  }
}
