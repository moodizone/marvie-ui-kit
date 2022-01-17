import * as React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

import { BaseShapeProps } from "./type";
import { useConfig } from "../../config";
import { CircleProps, SquareProps } from "./type";
import { ButtonDimension } from "../../style";

// =========================================
// Shape
// =========================================
export interface ShapeProps extends React.FC<BaseShapeProps> {
  Square: typeof Square;
  Circle: typeof Circle;
}

export const Shape: ShapeProps = ({
  children,
  backgroundColor,
  style,
  ...otherProps
}) => {
  const { gs } = useConfig();
  const bgColor: ViewStyle = { backgroundColor };
  return (
    <View
      style={[gs.acenter, gs.jcenter, styles.container, bgColor, style]}
      {...otherProps}
    >
      {children}
    </View>
  );
};

// =========================================
// Circle Shape
// =========================================
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

// =========================================
// Square Shape
// =========================================
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

Shape.Square = Square;
Shape.Circle = Circle;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
  },
});
