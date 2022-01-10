import React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";

import { LegendProps } from "./type";
import { useConfig } from "../../config";
import {Typography} from "../Typography";

export const Legend: React.FC<LegendProps> = ({ color, title }) => {
  const { colors, gs } = useConfig();
  const textColor: TextStyle = { color: colors.secondary.ii };
  const backgroundColor: ViewStyle = { backgroundColor: color };
  return (
    <View style={[gs.row, gs.abaseline]}>
      <View style={[styles.badge, backgroundColor, gs.mr_1]} />
      <Typography.Text style={[textColor]}>{title}</Typography.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: { width: 16, height: 10, borderRadius: 10 },
});
