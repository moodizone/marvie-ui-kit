import * as React from "react";
import { ViewStyle } from "react-native";

import { Shape } from "../index";
import { SquareProps } from "./type";
import { useConfig } from "../../../config";
import { ButtonDimension } from "../../../style";

const Square: React.FC<SquareProps> = ({
  children,
  style,
  backgroundColor,
  dimension = ButtonDimension,
  ...otherProps
}) => {
  const dimensionStyles: ViewStyle = { width: dimension, height: dimension };
  const { gs } = useConfig();
  return (
    <Shape
      backgroundColor={backgroundColor}
      style={[gs.ofh, style, dimensionStyles]}
      {...otherProps}
    >
      {children}
    </Shape>
  );
};
export default Square;
