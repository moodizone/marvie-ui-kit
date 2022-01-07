import * as React from "react";
import { GiftCardProps } from "./type";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { Card, Text, useConfig } from "../../../lib";
import { lightPalette } from "../../../style/Colors";

const GiftCard: React.FC<GiftCardProps> = ({ caption, title, theme, icon }) => {
  const { gs, colors } = useConfig();
  const background: ViewStyle = { backgroundColor: colors[theme].i };
  const shapeBackground: ViewStyle = { backgroundColor: colors[theme].ii };
  const textColor: TextStyle = { color: lightPalette.primary.iii };

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
    <Card style={[background, { overflow: "hidden" }]}>
      <View>
        {icon && <View style={[gs.mb_1, gs.acenter, gs.jcenter]}>{icon}</View>}
        <View style={[gs.mb_1]}>
          <Text style={[gs.bold, styles.title, textColor, gs.textCenter]}>
            {title}
          </Text>
        </View>
        <View style={[gs.mb_1]}>
          <Text style={[textColor, gs.textCenter]}>{caption}</Text>
        </View>
      </View>
      {topShape}
      {cornerShape}
      {circleShape}
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
  },
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

export default GiftCard;
