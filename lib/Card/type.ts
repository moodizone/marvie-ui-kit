import React from "react";
import { ViewProps } from "react-native";

import BookedCard from "./BookedCard";
import ContinueCard from "./ContinueCard";
import GiftCard from "./GiftCard";
import WakeUpCard from "./WakeUpCard";

export interface BaseCardProps extends ViewProps {
  /**
   * @default true
   */
  shadow?: boolean;
}

export interface CardProps extends React.FC<BaseCardProps> {
  Continue: typeof ContinueCard;
  Gift: typeof GiftCard;
  WakeUp: typeof WakeUpCard;
  Booked: typeof BookedCard;
}
