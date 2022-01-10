import React from "react";
import { StyleSheet, TextStyle, View } from "react-native";

import { SingleProgressProps } from "./type";
import { ProgressBar, Card, useConfig, Typography } from "../../../lib";

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
      <View style={[gs.row, gs.nowrap]}>
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
          <View style={[gs.nowrap, gs.row]}>
            <Typography.Title
              ellipsizeMode={"tail"}
              numberOfLines={1}
              style={[textColor, gs.dynamic, gs.pr_1]}
            >
              {title}
            </Typography.Title>
            {percent && (
              <Typography.Title
                style={[{ color }, gs.static]}
              >{`${percent}%`}</Typography.Title>
            )}
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
});

export default SingleProgress;
