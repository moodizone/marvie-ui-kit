import React from "react";
import { Text } from "react-native";

import Router from "./router";
import useCachedResources from "./hooks/useCachedResources";
import { ConfigProvider } from "./lib";
import { TranslationProvider } from "./locales/TranslationProvider";

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return <Text>`useCachedResources` error</Text>;
  } else {
    return (
      <TranslationProvider>
        <ConfigProvider>
          <Router />
        </ConfigProvider>
      </TranslationProvider>
    );
  }
}
