import React from "react";
import { TextStyle, TouchableOpacityProps } from "react-native";

import { Colors } from "../../style/type";

export type ButtonType = "solid" | "outlined" | "ghost";
export interface ButtonProps extends TouchableOpacityProps {
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
   * | `solid`    | white     | C               | C            |
   * | `outlined` | C         | transparent     | C            |
   * | `ghost`    | C         | transparent     | transparent  |
   *
   * C represent color value (next property)
   * @default `solid`
   */
  type?: ButtonType;

  /**
   * Choose text, background and border's color based on `type`
   * @default `primary`
   */
  color?: Colors;

  /**
   * indicate shape of button.
   * If it pass `true`, one of `icon` or `title` should be provided for better appearance.
   * Loading indicator will replace `icon` or `title` during spinning.
   *
   * @default false,
   */
  circle?: boolean;
  square?: boolean;

  title?: string;
  icon?: React.ReactNode;
  titleStyles?: TextStyle;
}
