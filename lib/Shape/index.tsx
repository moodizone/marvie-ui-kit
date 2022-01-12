import * as React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

import { CircleProps, ShapeProps, SquareProps } from "./type";
import { useConfig } from "../../config";

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

export const Square: React.FC<SquareProps> = ({
  children,
  style,
  backgroundColor,
  dimension,
  ...otherProps
}) => {
  const dimensionStyles: ViewStyle = { width: dimension, height: dimension };
  return (
    <Shape
      backgroundColor={backgroundColor}
      style={[styles.overflowHidden, style, dimensionStyles]}
      {...otherProps}
    >
      {children}
    </Shape>
  );
};

export const Circle: React.FC<CircleProps> = ({
  children,
  style,
  backgroundColor,
  dimension,
  ...otherProps
}) => {
  const dimensionStyles: ViewStyle = {
    width: dimension,
    height: dimension,
    borderRadius: dimension,
  };
  return (
    <Shape
      backgroundColor={backgroundColor}
      style={[styles.overflowHidden, style, dimensionStyles]}
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
  overflowHidden: {
    overflow: "hidden",
  },
});
