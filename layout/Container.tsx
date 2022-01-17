import React from "react";
import { ScrollView, ScrollViewProps } from "react-native";
import { useConfig } from "../config";

const Container: React.FC<ScrollViewProps> = ({
  children,
  style,
  ...otherProps
}) => {
  const { gs } = useConfig();
  return (
    <ScrollView style={[gs.px_3, gs.w100, gs.h100, style]} {...otherProps}>
      {children}
    </ScrollView>
  );
};

export default Container;
