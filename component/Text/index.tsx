import React from "react";
import { StyleSheet, TextProps, Text as RNText } from "react-native";

const Text: React.FC<TextProps> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <RNText style={[styles.text, style]} {...otherProps}>
      {children}
    </RNText>
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
