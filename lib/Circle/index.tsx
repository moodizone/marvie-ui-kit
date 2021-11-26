import React from "react";
import Svg, { Circle as RNSCircle } from "react-native-svg";

import { CircleProps } from "./type";
import { StyleSheet, View } from "react-native";
import { useConfig } from "../ConfigProvider";

const Circle: React.FC<CircleProps> = ({
  circleDimension,
  strokeWidth,
  stroke,
  percent = 100,
  emptyStrokeColor,
}) => {
  if (Number.isNaN(strokeWidth))
    throw Error(
      `'strokeWidth' should be integer while '${typeof strokeWidth}' provided`
    );
  const { gs } = useConfig();
  const radius = (circleDimension - (strokeWidth as number)) / 2;
  const circumference = 2 * 3.14 * radius;
  const offSet = (1 - percent / 100) * circumference;
  const cx = circleDimension / 2;
  const cy = circleDimension / 2;
  return (
    <View style={[gs.w100, gs.h100, gs.relative]}>
      <Svg
        width={circleDimension}
        height={circleDimension}
        style={[styles.svg, gs.absolute]}
      >
        {emptyStrokeColor && (
          <RNSCircle
            strokeWidth={strokeWidth}
            fill={"none"}
            stroke={emptyStrokeColor}
            strokeDasharray={`${circumference} ${circumference}`}
            cx={cx}
            cy={cy}
            r={radius}
          />
        )}
        <RNSCircle
          strokeWidth={strokeWidth}
          fill={"none"}
          stroke={stroke}
          strokeDashoffset={offSet}
          strokeDasharray={`${circumference} ${circumference}`}
          cx={cx}
          cy={cy}
          r={radius}
          transform={`rotate(-90,${cx},${cy})`}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  svg: {
    left: 0,
    right: 0,
  },
});

export default Circle;
