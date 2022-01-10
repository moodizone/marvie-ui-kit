import * as React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";

import { ContinueCardProps } from "./type";
import { Card,  Typography, useConfig } from "../../index";
import { lightPalette } from "../../../style/Colors";

const dimension = 50;
const ContinueCard: React.FC<ContinueCardProps> = ({
  theme,
  icon,
  title,
  caption,
  onClick,
}) => {
  const { gs, colors } = useConfig();
  const textColor: TextStyle = { color: lightPalette.primary.iv };
  const backgroundColor: ViewStyle = { backgroundColor: colors[theme].i };
  const shade: ViewStyle = { backgroundColor: colors[theme].ii };

  return (
    <Card style={[backgroundColor]}>
      <View style={[gs.row, gs.acenter, gs.mb_2]}>
        {icon && (
          <View
            style={[
              gs.mr_2,
              gs.acenter,
              gs.jcenter,
              styles.iconContainer,
              shade,
            ]}
          >
            {icon}
          </View>
        )}
        <View>
          <Typography.Title style={[textColor, gs.mb_1]}>
            {title}
          </Typography.Title>
        </View>
      </View>
      <View style={[gs.row]}>
        <View style={[gs.dynamic]}>
          <Typography.Text style={[textColor]}>{caption}</Typography.Text>
        </View>
        <View style={[gs.pl_3, gs.static, gs.jcenter]}>
          {/*TODO*/}
          <Typography.Text>Button</Typography.Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: dimension,
    height: dimension,
    borderRadius: 12,
  },
});

export default ContinueCard;
