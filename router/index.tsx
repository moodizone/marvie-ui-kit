import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "../layout/Header";
import { ROUTES } from "./ROUTES";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.home.name}>
        {Object.values(ROUTES).map(({ name, component: Component }) => (
          <Stack.Screen
            key={name}
            name={name}
            component={Component}
            options={{
              header: () => <Header />,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
