import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { useConfig } from "../../config";

interface CardProps extends ViewProps {
  /**
   * @default true
   */
  shadow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  shadow = true,
  children,
  style,
  ...otherProps
}) => {
  const { colors } = useConfig();
  const backgroundColor = colors.secondary.iv;
  return (
    <View
      style={[shadow && styles.shadow, styles.card, { backgroundColor }, style]}
      {...otherProps}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 24,
    borderRadius: 12,
  },
  shadow: {
    shadowColor: "#19282F",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
