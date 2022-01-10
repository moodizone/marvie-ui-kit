import * as React from "react";

import { Card, Typography, useConfig } from "../../index";
import { Image, TextStyle, View, ViewStyle } from "react-native";
import { WakeUpCardProps } from "./type";
import { lightPalette } from "../../../style/Colors";

const WakeUpCard: React.FC<WakeUpCardProps> = ({
  theme,
  image,
  firstLine,
  secondLine,
}) => {
  const { gs, colors } = useConfig();
  const backgroundColor: ViewStyle = { backgroundColor: colors[theme].ii };
  const textColor: TextStyle = { color: lightPalette.primary.iv };

  return (
    <Card style={[backgroundColor]}>
      <View style={[gs.mb_4]}>
        <Typography.Title style={[textColor]}>{firstLine}</Typography.Title>
        {secondLine && (
          <Typography.Title style={[gs.mb_1, textColor]}>
            {secondLine}
          </Typography.Title>
        )}
      </View>
      <View>
        <Image
          resizeMethod={"scale"}
          resizeMode={"contain"}
          source={image}
          style={{ height: 100 }}
        />
      </View>
    </Card>
  );
};

export default WakeUpCard;
