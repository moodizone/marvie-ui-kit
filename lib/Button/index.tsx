import * as React from "react";
import {
  Alert,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import Circle from "./Circle";
import Square from "./Square";
import { BaseButtonProps, ButtonProps } from "./type";
import { styles } from "./styles";
import { useConfig } from "../../config";
import Indicator from "./Indicator";

export const BaseButton: React.FC<BaseButtonProps> = ({
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

Button.Square = Square;
Button.Circle = Circle;
