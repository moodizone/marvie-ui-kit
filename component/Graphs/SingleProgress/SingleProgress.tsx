import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { SingleProgressProps } from "./type";
import { useConfig } from "../../../ConfigProvier/ConfigProvider";
import Card from "../../Card/Card";
import ProgressBar from "./ProgressBar";

const SingleProgress: React.FC<SingleProgressProps> = ({
  color,
  icon,
  percent = 0,
  title,
}) => {
  const { colors, gs } = useConfig();
  const backgroundColor = colors.secondary.iv;
  const textColor = colors.secondary.i;

  return (
    <Card style={{ backgroundColor }}>
      <View style={[styles.container, gs.flexDirection]}>
        <View style={[{ backgroundColor: color }, styles.start]}>{icon}</View>
        <View style={[styles.end, gs.pl_6]}>
          <View style={[styles.titleContainer, gs.flexDirection]}>
            <Text
              ellipsizeMode={"tail"}
              numberOfLines={1}
              style={[
                { color: textColor },
                styles.title,
                gs.pr_2,
                gs.textAlign,
              ]}
            >
              {title}
            </Text>
            <Text style={[{ color }, styles.percent]}>{`${percent}%`}</Text>
          </View>
          <ProgressBar color={color} percent={percent} />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  start: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    flexGrow: 0,
  },
  end: {
    flexShrink: 1,
    flexGrow: 1,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    flexShrink: 1,
    flexGrow: 1,
  },
  titleContainer: {
    flexWrap: "nowrap",
  },
  percent: {
    flexShrink: 0,
    flexGrow: 0,
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default SingleProgress;