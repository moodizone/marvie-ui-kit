import React from "react";
import { Image, StyleSheet, TextStyle, View } from "react-native";

import {
  Card,
  Legend,
  CircularProgress,
  useConfig,
  Typography,
} from "../../../lib";
import { RingProgressType } from "./type";

const RingProgress: React.FC<RingProgressType> = ({
  title,
  records,
  image,
}) => {
  const { gs, colors } = useConfig();
  const textColor: TextStyle = { color: colors.secondary.i };

  return (
    <Card style={[gs.row, gs.nowrap]}>
      <View
        style={[
          styles.start,
          gs.static,
          gs.mr_2,
          gs.jcenter,
          gs.acenter,
          gs.relative,
        ]}
      >
        <View style={[gs.absolute]}>
          {image && <Image style={[styles.img]} source={image} />}
        </View>
        <CircularProgress records={records} mode={"stick"} />
      </View>
      <View style={[gs.dynamic]}>
        <Typography.Title
          ellipsizeMode={"tail"}
          numberOfLines={1}
          style={[textColor]}
        >
          {title}
        </Typography.Title>
        {records.map(({ color, title, percent }, index) => (
          <Legend title={title} color={color} percent={percent} key={index} />
        ))}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  start: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  img: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default RingProgress;
