import React from "react";
import { ColorValue, ImageSourcePropType, ViewProps } from "react-native";

import { Colors } from "../../style/type";

export interface BaseCardProps extends ViewProps {
  /**
   * @default true
   */
  shadow?: boolean;
}
export interface BookedCards {
  theme: Colors;
  title: string;
  caption?: string;
  icon: React.ReactNode;
}
export interface ContinueCardProps {
  /**
   * whole card backgroundColor
   */
  color: ColorValue;

  /**
   * shape backgroundColor
   */
  shapeColor?: ColorValue;
  icon?: React.ReactNode;
  title: string;
  caption: string;
  onPress: () => void;
}
export interface GiftCardProps {
  theme: Colors;
  icon?: React.ReactNode;
  title: string;
  caption: string;
}
export interface WakeUpCardProps {
  firstLine: string;
  secondLine?: string;
  image: ImageSourcePropType;
  theme: Colors;
}
