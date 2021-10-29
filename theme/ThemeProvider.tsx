import React from "react";
import { Appearance } from "react-native";

import { ThemeAction, ThemeContext, ThemeState } from "./type";
import { darkPalette, lightPalette } from "./Colors";

const MavieThemeContext = React.createContext<ThemeContext>(undefined);
MavieThemeContext.displayName = "MavieThemeContext";

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "dark":
      return { colors: darkPalette, scheme: "dark" };
    case "light":
      return { colors: lightPalette, scheme: "light" };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const ThemeProvider: React.FC = ({ children }) => {
  const lazyInitializer = (): ThemeState => {
    const scheme = Appearance.getColorScheme();
    if (scheme === "light") return { colors: lightPalette, scheme: "light" };
    return { colors: darkPalette, scheme: "dark" };
  };

  const [state, dispatch] = React.useReducer(
    themeReducer,
    undefined,
    lazyInitializer
  );
  const value: ThemeContext = [state, dispatch];
  return (
    <MavieThemeContext.Provider value={value}>{children}</MavieThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = React.useContext(MavieThemeContext);
  if (context === undefined) {
    throw new Error("`useTheme` must use within a `ThemeProvider`");
  }
  return context;
};

export { ThemeProvider, useTheme };
