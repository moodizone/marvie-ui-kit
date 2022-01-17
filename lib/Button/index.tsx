import * as React from "react";

import { BaseButtonProps } from "./type";
import Indicator from "./Indicator";
import { useConfig } from "../../config";
import {
  Alert,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./styles";
import { CircleButtonProps, SquareButtonType } from "./type";
import { ButtonDimension } from "../../style";

// =========================================
// Base Button
// =========================================
const BaseButton: React.FC<BaseButtonProps> = ({
  disabled = false,
  color,
  type = "solid",
  loading = false,
  style,
  children,
  ...otherProps
}) => {
  const { gs, colors } = useConfig();
  const sanitizedColor = color ?? colors.primary.i;
  const calculatedStyles: StyleProp<ViewStyle>[] = [];

  if (type === "solid") {
    calculatedStyles.push({ backgroundColor: sanitizedColor });
    calculatedStyles.push({ borderColor: sanitizedColor });
    calculatedStyles.push(styles.solid);
  } else if (type === "outlined") {
    calculatedStyles.push({ borderColor: sanitizedColor });
    calculatedStyles.push(styles.outlined);
  } else if (type === "ghost") {
    calculatedStyles.push(styles.ghost);
  }

  if (disabled || loading) {
    calculatedStyles.push(styles.disabled);
  }

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[styles.btn, calculatedStyles, style]}
      onPress={() => Alert.alert("clicked")}
      {...otherProps}
    >
      <View style={[gs.row, gs.jcenter, gs.acenter]}>{children}</View>
    </TouchableOpacity>
  );
};

// =========================================
// Button
// =========================================
export interface ButtonProps extends React.FC<BaseButtonProps> {
  Circle: typeof Circle;
  Square: typeof Square;
}
export const Button: ButtonProps = ({
  loading,
  color,
  type,
  children,
  ...otherProps
}) => {
  return (
    <BaseButton loading={loading} color={color} type={type} {...otherProps}>
      {loading && <Indicator type={type} color={color} />}
      {children}
    </BaseButton>
  );
};

// =========================================
// Circle
// =========================================
const Circle: React.FC<CircleButtonProps> = ({
  style,
  dimension = ButtonDimension,
  children,
  type,
  color,
  loading,
  ...otherProps
}) => {
  const calculatedStyles: ViewStyle = {
    width: dimension,
    height: dimension,
    borderRadius: dimension,
  };
  const { gs } = useConfig();
  return (
    <BaseButton
      loading={loading}
      type={type}
      color={color}
      style={[gs.ofh, calculatedStyles, style]}
      {...otherProps}
    >
      {loading ? <Indicator type={type} color={color} /> : children}
    </BaseButton>
  );
};

// =========================================
// Square
// =========================================
const Square: React.FC<SquareButtonType> = ({
  style,
  dimension = ButtonDimension,
  children,
  loading,
  type,
  color,
  ...otherProps
}) => {
  const calculatedStyles: ViewStyle = {
    width: dimension,
    height: dimension,
    borderRadius: 12,
  };
  const { gs } = useConfig();
  return (
    <BaseButton
      loading={loading}
      type={type}
      color={color}
      style={[gs.ofh, calculatedStyles, style]}
      {...otherProps}
    >
      {loading ? <Indicator type={type} color={color} /> : children}
    </BaseButton>
  );
};

Button.Square = Square;
Button.Circle = Circle;
