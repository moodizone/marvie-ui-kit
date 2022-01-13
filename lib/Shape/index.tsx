import * as React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

import Circle from "./Circle";
import Square from "./Square";
import { ShapeProps } from "./type";
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

Shape.Square = Square;
Shape.Circle = Circle;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
  },
});
