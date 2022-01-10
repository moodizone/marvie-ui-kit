import React from "react";
import { TextProps } from "react-native";

import { Paragraph, Title, Text } from "./index";

export interface BaseTypographyProps extends TextProps {
  /**
   * @default `false`
   */
  italic?: boolean;
  /**
   * @default `false`
   */
  underlined?: boolean;
  /**
   * If `true` provided, `Typography` should nested within another `Typography`
   * @default `false`
   */
  mark?: boolean;
  /**
   * @default `yellow`
   */
  markColor?: string;
  /**
   * @default `false`
   */
  code?: boolean;
  /**
   * @default `false`
   */
  bold?: boolean;
  /**
   * @default `false`
   */
  disabled?: boolean;
  /**
   * @default `false`
   */
  link?: boolean;
  /**
   * @default `false`
   */
  thin?: boolean;
  /**
   * @default `false`
   */
  deleted?: boolean;
}
export interface TypographyProps extends React.FC<BaseTypographyProps> {
  Paragraph: typeof Paragraph;
  Text: typeof Text;
  Title: typeof Title;
}
export interface TitleType extends BaseTypographyProps {
  /**
   * @default `5`
   */
  level?: 1 | 2 | 3 | 4 | 5;
}

