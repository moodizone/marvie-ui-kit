import React from "react";
import { ColorValue, ViewProps } from "react-native";

import { Circle, Square } from "./index";

export interface BaseShapeProps extends ViewProps {
  backgroundColor?: ColorValue;
}
export interface SquareProps extends BaseShapeProps {
  dimension: number;
}
export interface CircleProps extends BaseShapeProps {
  dimension: number;
}

export interface ShapeProps extends React.FC<BaseShapeProps> {
  Square: typeof Square;
  Circle: typeof Circle;
}
