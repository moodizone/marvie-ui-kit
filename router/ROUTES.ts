export type RouteName = "home" | "progress" | "continueCard" | "giftCard";

interface RouteType {
  name: RouteName;
}

export const ROUTES: Record<RouteName, RouteType> = {
  home: { name: "home" },
  progress: { name: "progress" },
  continueCard: { name: "continueCard" },
  giftCard: { name: "giftCard" },
};
