import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";

import Home from "./screens/Home";
import useCachedResources from "./hooks/useCachedResources";
import { ConfigProvider } from "./lib/ConfigProvider";
import { TranslationProvider } from "./locales/TranslationProvider";

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return <Text>`useCachedResources` error</Text>;
  } else {
    return (
      <TranslationProvider>
        <ConfigProvider>
          <SafeAreaView>
            <StatusBar/>
            <Home/>
          </SafeAreaView>
        </ConfigProvider>
      </TranslationProvider>
    );
  }
}
