import * as React from "react";
import { ColorValue, ViewProps } from "react-native";

import Circle from "./Circle";
import Square from "./Square";

export interface BaseShapeProps extends ViewProps {
  backgroundColor?: ColorValue;
}

export interface ShapeProps extends React.FC<BaseShapeProps> {
  Square: typeof Square;
  Circle: typeof Circle;
}
