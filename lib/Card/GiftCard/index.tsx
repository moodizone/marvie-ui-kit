import * as React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";

import { Card, Typography, useConfig } from "../../index";
import { GiftCardProps } from "./type";
import { lightPalette } from "../../../style/Colors";

const GiftCard: React.FC<GiftCardProps> = ({ caption, title, theme, icon }) => {
  const { gs, colors } = useConfig();
  const background: ViewStyle = { backgroundColor: colors[theme].i };
  const shapeBackground: ViewStyle = { backgroundColor: colors[theme].ii };
  const textColor: TextStyle = { color: lightPalette.primary.iv };

  const topShape = (
    <Card
      shadow={false}
      style={[shapeBackground, styles.shape, styles.topShape]}
    />
  );
  const cornerShape = (
    <Card
      shadow={false}
      style={[shapeBackground, styles.shape, styles.cornerShape]}
    />
  );
  const circleShape = (
    <Card
      shadow={false}
      style={[shapeBackground, styles.shape, styles.circle]}
    />
  );

  return (
    <Card style={[background, gs.ofh]}>
      <View>
        {icon && <View style={[gs.mb_1, gs.acenter, gs.jcenter]}>{icon}</View>}
        <View style={[gs.mb_1]}>
          <Typography.Title style={[textColor, gs.textCenter]}>
            {title}
          </Typography.Title>
        </View>
        <View style={[gs.mb_1]}>
          <Typography.Text style={[textColor, gs.textCenter]}>
            {caption}
          </Typography.Text>
        </View>
      </View>
      {topShape}
      {cornerShape}
      {circleShape}
    </Card>
  );
};
export default GiftCard;

const styles = StyleSheet.create({
  shape: {
    position: "absolute",
    zIndex: -1,
  },
  topShape: {
    width: "40%",
    height: 100,
    top: -10,
    left: "30%",
  },
  cornerShape: {
    width: 100,
    height: 100,
    bottom: 0,
    left: 0,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    bottom: 24,
    right: 24,
  },
});
