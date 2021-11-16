import React from "react";
import { ScrollView } from "react-native";
import { useConfig } from "../../ConfigProvier/ConfigProvider";

const Container: React.FC = ({ children, ...otherProps }) => {
  const { gs } = useConfig();
  return (
    <ScrollView style={[gs.pr_3, gs.pl_3, gs.w100, gs.h100]} {...otherProps}>
      {children}
    </ScrollView>
  );
};

export default Container;
