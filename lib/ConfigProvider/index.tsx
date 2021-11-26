import React from "react";
import { ColorSchemeName } from "react-native";

import { CommonStyles, LTRStyles, RTLStyles } from "../../style";
import { ConfigAction, ConfigContext, ConfigState, Direction } from "./type";
import { darkPalette, lightPalette } from "./Colors";

const MavieThemeContext = React.createContext<ConfigContext>(undefined);
MavieThemeContext.displayName = "MavieThemeContext";

const themeReducer = (
  state: ConfigState,
  action: ConfigAction
): ConfigState => {
  switch (action.type) {
    case "dark":
      return { ...state, colors: darkPalette, scheme: "dark" };
    case "light":
      return { ...state, colors: lightPalette, scheme: "light" };
    case "ltr":
      return {
        ...state,
        gs: { ...LTRStyles, ...CommonStyles },
        direction: "ltr",
      };
    case "rtl":
      return {
        ...state,
        gs: { ...RTLStyles, ...CommonStyles },
        direction: "rtl",
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const ConfigProvider: React.FC = ({ children }) => {
  const [{ direction, scheme, colors, gs }, dispatch] = React.useReducer(
    themeReducer,
    {
      direction: "ltr",
      scheme: "dark",
      colors: darkPalette,
      gs: { ...LTRStyles, ...CommonStyles },
    }
  );
  const setTheme = (type: ColorSchemeName) => dispatch({ type });
  const setDirection = (type: Direction) => dispatch({ type });
  const value: ConfigContext = {
    direction,
    scheme,
    colors,
    gs,
    setTheme,
    setDirection,
  };
  return (
      <MavieThemeContext.Provider value={value}>
        {children}
      </MavieThemeContext.Provider>
  );
};

const useConfig = () => {
  const context = React.useContext(MavieThemeContext);
  if (context === undefined) {
    throw new Error("`useConfig` must use within a `ConfigProvider`");
  }
  return context;
};

export { ConfigProvider, useConfig };
