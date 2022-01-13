import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Card } from "../index";
import { useConfig } from "../../../config";
import { Shape } from "../../Shape";
import { BookedCards } from "./type";
import { Typography } from "../../Typography";

const BookedCard: React.FC<BookedCards> = ({ icon, title, caption, theme }) => {
  const { gs, colors } = useConfig();
  const dakColor = colors[theme].iii;
  const lightColor = colors[theme].ii;

  return (
    <Card style={[{ backgroundColor: dakColor }]}>
      <View style={[gs.row, gs.acenter]}>
        <View style={[gs.static]}>
          <Shape.Square dimension={60} backgroundColor={lightColor}>
            <Typography.Text>{icon}</Typography.Text>
          </Shape.Square>
        </View>
        <View style={[gs.dynamic, gs.pl_2]}>
          <Typography.Title style={{ color: lightColor }}>
            {title}
          </Typography.Title>
          <Typography.Text style={[{ color: lightColor }, styles.opacity]}>
            {caption}
          </Typography.Text>
        </View>
      </View>
    </Card>
  );
};
export default BookedCard;

const styles = StyleSheet.create({
  opacity: {
    opacity: 0.5,
  },
});
