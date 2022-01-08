import * as React from "react";
import {
  ActivityIndicator,
  Alert,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { ButtonDimension } from "../../style";
import { ButtonProps } from "./type";
import { Text } from "../Text";
import { useConfig } from "../../config";

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  color = "primary",
  type = "solid",
  loading = false,
  square = false,
  circle = false,
  children,
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
  const gap: ViewStyle = !circle && !square ? gs.mr_1 : {};

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

  if (square) {
    calculatedStyles.push(styles.square);
  } else if (circle) {
    calculatedStyles.push(styles.circle);
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
          <Text style={[styles.title, gs.bold, textColor, titleStyles]}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: ButtonDimension,
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    opacity: 1,
  },
  square: {
    width: ButtonDimension,
    overflow: "hidden",
  },
  circle: {
    width: ButtonDimension,
    borderRadius: ButtonDimension / 2,
  },
  title: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 16,
  },
  disabled: {
    opacity: 0.5,
  },
  outlined: {
    backgroundColor: "transparent",
  },
  solid: {
    borderColor: "transparent",
  },
  ghost: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
});

export default Button;
