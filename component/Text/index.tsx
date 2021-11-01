import React from "react";
import { StyleSheet, TextProps } from "react-native";

const Text: React.FC<TextProps> = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "space-mono",
    fontSize: 14,
    lineHeight: 24,
  },
});

export default Text;
