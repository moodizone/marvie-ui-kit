import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ContinueCards from "../screens/ContinueCards";
import Home from "../screens/Home";
import Progress from "../screens/Progress";
import { ROUTES } from "./ROUTES";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  const Components = {
    home: Home,
    progress: Progress,
    continueCard: ContinueCards,
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ROUTES.home.name}>
          {Object.values(ROUTES).map(({ name }) => (
            <Stack.Screen
              key={name}
              name={name}
              component={Components[name]}
              options={{
                headerBackButtonMenuEnabled: true,
              }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
