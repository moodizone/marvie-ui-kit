import * as React from "react";
import Home from "../screens/Home";
import Progress from "../screens/Progress";
import ContinueCards from "../screens/ContinueCards";

export type RouteName = "home" | "progress" | "continueCard";

interface RouteType {
  name: RouteName;
  component: React.ComponentType<any>;
}

export const ROUTES: Record<RouteName, RouteType> = {
  home: { name: "home", component: Home },
  progress: { name: "progress", component: Progress },
  continueCard: { name: "continueCard", component: ContinueCards },
};
