import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TextStyle, View, ViewStyle } from "react-native";

import { Button, Card, Shape, Typography, useConfig } from "../../index";
import { ContinueCardProps } from "./type";
import { lightPalette } from "../../../style/Colors";

const ContinueCard: React.FC<ContinueCardProps> = ({
  color,
  icon,
  title,
  caption,
  shapeColor,
  onPress,
}) => {
  const { gs } = useConfig();
  const textColor: TextStyle = { color: lightPalette.primary.iv };
  const backgroundColor: ViewStyle = { backgroundColor: color };
  const shapeBackgroundColor: ViewStyle = {
    backgroundColor: shapeColor ?? color,
  };

  return (
    <Card style={[backgroundColor]}>
      <View style={[gs.row, gs.acenter, gs.mb_2, gs.acenter]}>
        {icon && (
          <Shape.Square style={[shapeBackgroundColor, gs.mr_1]}>
            {icon}
          </Shape.Square>
        )}
        <Typography.Title style={[textColor, gs.mb_1]}>
          {title}
        </Typography.Title>
      </View>
      <View style={[gs.row]}>
        <View style={[gs.dynamic]}>
          <Typography.Text style={[textColor]}>{caption}</Typography.Text>
        </View>
        <View style={[gs.pl_3, gs.static, gs.jcenter]}>
          <Button.Circle onPress={onPress} color={shapeColor ?? color}>
            <AntDesign name="gift" size={20} color={"#fff"} />
          </Button.Circle>
        </View>
      </View>
    </Card>
  );
};
export default ContinueCard;
