import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ContinueCards from "../screens/ContinueCards";
import GiftCards from "../screens/GiftCards";
import Home from "../screens/Home";
import Progress from "../screens/Progress";
import { RootStackParamList } from "../types";
import { RouteName, ROUTES } from "./ROUTES";
import WakeUpCards from "../screens/WakeUpCard";
import Buttons from "../screens/Buttons";
import Typographies from "../screens/Typographies/typographies";
import BookedCards from "../screens/BookedCards";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  const Components: Record<RouteName, React.ComponentType<any>> = {
    home: Home,
    progresses: Progress,
    continueCards: ContinueCards,
    giftCards: GiftCards,
    wakeUpCards: WakeUpCards,
    buttons: Buttons,
    typographies: Typographies,
    bookedCards: BookedCards,
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ROUTES.bookedCards.name}>
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
