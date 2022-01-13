import React from "react";
import { ColorValue, TouchableOpacityProps } from "react-native";

import Square from "./Square";
import Circle from "./Circle";

export type ButtonVariant = "solid" | "outlined" | "ghost";

export interface BaseButtonProps extends TouchableOpacityProps {
  /**
   * - disable pressing
   * - display indicator on button
   * - hide icon or text if `circle` or `square` is `true`
   *
   * @default false
   */
  loading?: boolean;

  /**
   *
   * | name       | textColor | backgroundColor | borderColor  |
   * | :--------- | :-------- | :-------------- | :----------- |
   * | `solid`    | white     | `color`         | `color`      |
   * | `outlined` | `color`   | transparent     | `color`      |
   * | `ghost`    | `color`   | transparent     | transparent  |
   *
   * C represent color value (next property)
   * @default `solid`
   */
  type?: ButtonVariant;

  /**
   * Choose text, background and border's color based on `type`
   * @default `primary.i`
   */
  color?: ColorValue;
}
export interface ButtonProps extends React.FC<BaseButtonProps> {
  Circle: typeof Circle;
  Square: typeof Square;
}
