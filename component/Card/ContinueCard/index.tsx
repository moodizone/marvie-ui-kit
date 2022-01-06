import * as React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";

import { ContinueCardProps } from "./type";
import { Card, Text, useConfig } from "../../../lib";

const dimension = 50;
const ContinueCard: React.FC<ContinueCardProps> = ({
  icon,
  title,
  caption,
  onClick,
}) => {
  const { gs, colors } = useConfig();
  const textColor: TextStyle = { color: colors.secondary.i };
  const backgroundColor: ViewStyle = { backgroundColor: colors.green.ii };
  const shade: ViewStyle = { backgroundColor: "#4EE5AB" };

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
          <Text
            style={[textColor, gs.bold, gs.mb_1, gs.textAlign, styles.title]}
          >
            {title}
          </Text>
        </View>
      </View>
      <View style={[gs.row]}>
        <View style={[gs.dynamic]}>
          <Text style={[textColor, gs.textAlign]}>{caption}</Text>
        </View>
        <View style={[gs.pl_3, gs.static, gs.jcenter]}>
          {/*TODO*/}
          <Text>Button</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
  },
  iconContainer: {
    width: dimension,
    height: dimension,
    borderRadius: 12,
  },
});

export default ContinueCard;
