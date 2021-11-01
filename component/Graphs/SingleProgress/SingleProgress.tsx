import React from "react";
import { StyleSheet, TextStyle, View } from "react-native";

import { SingleProgressProps } from "./type";
import { useConfig } from "../../../ConfigProvier/ConfigProvider";
import Card from "../../../lib/Card";
import ProgressBar from "../../../lib/ProgressBar";
import Text from "../../Text";

const SingleProgress: React.FC<SingleProgressProps> = ({
  color,
  icon,
  percent = 0,
  title,
}) => {
  const { colors, gs } = useConfig();
  const textColor: TextStyle = { color: colors.secondary.i };

  return (
    <Card>
      <View style={[gs.flexDirection, gs.nowrap, gs.flexDirection]}>
        <View
          style={[
            { backgroundColor: color },
            styles.start,
            gs.jcenter,
            gs.acenter,
            gs.static,
          ]}
        >
          {icon}
        </View>
        <View style={[gs.dynamic, gs.jbetween, gs.pl_2]}>
          <View style={[gs.nowrap, gs.flexDirection]}>
            <Text
              ellipsizeMode={"tail"}
              numberOfLines={1}
              style={[textColor, gs.dynamic, gs.pr_1, gs.textAlign]}
            >
              {title}
            </Text>
            <Text style={[{ color }, gs.static]}>{`${percent}%`}</Text>
          </View>
          <ProgressBar color={color} percent={percent} />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  start: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  title: {
    fontWeight: "bold",
  },
  percent: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default SingleProgress;
