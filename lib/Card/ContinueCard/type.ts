import React from "react";
import { ColorValue } from "react-native";

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
