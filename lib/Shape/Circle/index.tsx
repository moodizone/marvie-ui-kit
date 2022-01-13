import * as React from "react";
import { ViewStyle } from "react-native";

import { CircleProps } from "./type";
import { Shape } from "../index";
import { useConfig } from "../../../config";

const Circle: React.FC<CircleProps> = ({
  children,
  style,
  backgroundColor,
  dimension,
  ...otherProps
}) => {
  const { gs } = useConfig();
  const dimensionStyles: ViewStyle = {
    width: dimension,
    height: dimension,
    borderRadius: dimension,
  };
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
export default Circle;
