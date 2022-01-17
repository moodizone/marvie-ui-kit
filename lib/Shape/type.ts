import { ColorValue, ViewProps } from "react-native";

export interface BaseShapeProps extends ViewProps {
  backgroundColor?: ColorValue;
}
export interface CircleProps extends BaseShapeProps {
  dimension: number;
}
export interface SquareProps extends BaseShapeProps {
  dimension?: number;
}
