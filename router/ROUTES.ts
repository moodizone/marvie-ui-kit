export type RouteName = "home" | "progresses" | "continueCards" | "giftCards"|'wakeUpCards'|'buttons';

interface RouteType {
  name: RouteName;
}

export const ROUTES: Record<RouteName, RouteType> = {
  home: { name: "home" },
  progresses: { name: "progresses" },
  continueCards: { name: "continueCards" },
  giftCards: { name: "giftCards" },
  wakeUpCards: { name: "wakeUpCards" },
  buttons: { name: "buttons" },
};
