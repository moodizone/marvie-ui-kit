import React from "react";
import { StyleSheet, View } from "react-native";
import { RingProgressType } from "./type";
import Card from "../../Card";
import { useConfig } from "../../../ConfigProvier/ConfigProvider";
import Record from "./Record";
import Text from "../../Text";

const RingProgress: React.FC<RingProgressType> = ({ title, records }) => {
  const { gs, colors } = useConfig();

  return (
    <Card style={[gs.flexDirection, gs.nowrap]}>
      <View style={[styles.start, gs.mr_2]} />
      <View style={[styles.end]}>
        <Text style={[styles.title]}>{title}</Text>
        {records.map(({ color, title, percent, },index) => (
          <Record title={title} color={color} percent={percent} key={index}/>
        ))}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  start: {
    width: 90,
    height: 90,
    backgroundColor: "wheat",
    borderRadius: 45,
    flexShrink: 0,
    flexGrow: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  end: {},
});

export default RingProgress;
