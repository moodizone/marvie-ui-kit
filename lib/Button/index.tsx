import * as React from "react";
import {
  ActivityIndicator,
  Alert,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { BaseButtonProps, ButtonProps, CircleButtonProps } from "./type";
import { Typography } from "../Typography";
import { styles } from "./styles";
import { useConfig } from "../../config";

const BaseButton: React.FC<BaseButtonProps> = ({
  disabled = false,
  color = "primary",
  type = "solid",
  loading = false,
  square = false,
  circle = false,
  style,
  title,
  titleStyles,
  icon,
  ...otherProps
}) => {
  const { colors, gs } = useConfig();
  const calculatedStyles: StyleProp<ViewStyle>[] = [];
  const paletteColor = colors[color].i;
  let textColor: TextStyle = { color: "#fff" };
  const gap: ViewStyle = !(circle || square) ? gs.mr_1 : {};

  if (type === "solid") {
    calculatedStyles.push(styles.solid);
    calculatedStyles.push({ backgroundColor: paletteColor });
    calculatedStyles.push({ borderColor: paletteColor });
  } else if (type === "outlined") {
    calculatedStyles.push(styles.outlined);
    calculatedStyles.push({ borderColor: paletteColor });
    textColor = { color: paletteColor };
  } else if (type === "ghost") {
    calculatedStyles.push(styles.ghost);
    textColor = { color: paletteColor };
  }

  if (disabled || loading) {
    calculatedStyles.push(styles.disabled);
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.btn, calculatedStyles, style]}
      onPress={() => Alert.alert("clicked")}
      {...otherProps}
    >
      <View style={[gs.row, gs.jcenter, gs.acenter]}>
        {loading && (
          <ActivityIndicator
            style={gap}
            color={type === "solid" ? "#fff" : paletteColor}
          />
        )}
        {icon && !(loading && (square || circle)) && (
          <View style={[gap]}>{icon}</View>
        )}
        {title && !(loading && (square || circle)) && (
          <Typography.Title style={[styles.title, textColor, titleStyles]}>
            {title}
          </Typography.Title>
        )}
      </View>
    </TouchableOpacity>
  );
};

export const Button: ButtonProps = (props) => {
  return <BaseButton {...props} />;
};
export const Circle: React.FC<CircleButtonProps> = ({
  square,
  circle,
  style,
  title,
  icon,
  ...otherProps
}) => {
  return (
    <BaseButton
      square={false}
      circle
      title={!icon ? title : undefined}
      icon={icon}
      style={[styles.circle, style]}
      {...otherProps}
    />
  );
};
export const Square: React.FC<CircleButtonProps> = ({
  square,
  circle,
  style,
  title,
  icon,
  ...otherProps
}) => {
  return (
    <BaseButton
      square
      circle={false}
      title={!icon ? title : undefined}
      icon={icon}
      style={[styles.square, style]}
      {...otherProps}
    />
  );
};

Button.Square = Square;
Button.Circle = Circle;
