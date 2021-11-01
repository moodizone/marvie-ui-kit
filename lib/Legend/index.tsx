import React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";

import Text from "../../component/Text";
import { LegendProps } from "./type";
import { useConfig } from "../../ConfigProvier/ConfigProvider";

const Legend: React.FC<LegendProps> = ({ color, title }) => {
  const { colors, gs } = useConfig();
  const textColor: TextStyle = { color: colors.secondary.ii };
  const backgroundColor: ViewStyle = { backgroundColor: color };
  return (
    <View style={[gs.flexDirection, gs.abaseline]}>
      <View style={[styles.badge, backgroundColor, gs.mr_1]} />
      <Text style={[textColor, gs.textAlign]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: { width: 16, height: 10, borderRadius: 10 },
});

export default Legend;
