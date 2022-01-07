import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ROUTES } from "./ROUTES";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ROUTES.home.name}>
          {Object.values(ROUTES).map(({ name, component: Component }) => (
            <Stack.Screen
              key={name}
              name={name}
              component={Component}
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
