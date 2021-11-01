import React from "react";
import { View } from "react-native";

import Circle from "../Circle";
import { CircularProgressProps } from "./type";
import { useConfig } from "../../ConfigProvier/ConfigProvider";

const CircularProgress: React.FC<CircularProgressProps> = ({
  records = [],
  mode = "nest",
}) => {
  // =========================================
  // Init
  // =========================================
  const { colors, gs } = useConfig();
  const emptyStrokeColor = colors.primary.iii;
  const circleDimension = 90;
  const strokeWidth = 8;
  const maxRecord = 3;

  // extract maximum `maxRecord` records
  const topMaxRecord = records.filter((r, i) => i <maxRecord);

  // change record percentage based on `mode`
  const normalizedRecords = topMaxRecord
    .map(({ percent, color }, i) => {
      if (mode === "stick") {
        // sum of self and previous percentage
        const newPercent = topMaxRecord.reduce((acc, curr, currIndex) => {
          if (currIndex < i) return acc + curr.percent;
          return acc;
        }, percent);
        return { color, percent: newPercent };
      }
      return { color, percent };
    })
    // sort ascending
    .sort((a, b) => b.percent - a.percent);

  // =========================================
  // Subcomponents
  // =========================================
  const emptyCircle = (
    <View style={[gs.absolute]}>
      <Circle
        circleDimension={circleDimension}
        strokeWidth={strokeWidth}
        stroke={emptyStrokeColor as string}
      />
    </View>
  );
  if (!normalizedRecords.length)
    return <View style={[gs.h100, gs.w100, gs.relative]}>{emptyCircle}</View>;

  const stickContent = (
    <>
      {emptyCircle}
      {normalizedRecords.map(({ color, percent }, i) => (
        <View style={[gs.absolute]}>
          <Circle
            circleDimension={circleDimension}
            strokeWidth={strokeWidth}
            stroke={color as string}
            percent={percent}
            key={`stick_${i}`}
          />
        </View>
      ))}
    </>
  );

  const nestContent = normalizedRecords.map(({ color, percent }, i) => {
    const newDimension = Math.floor(
      circleDimension * (1 - i / maxRecord)
    );
    return (
      <View
        style={[gs.absolute, gs.w100, gs.h100, gs.jcenter, gs.acenter]}
        key={`nest_${i}`}
      >
        <View
          style={{
            width: newDimension,
            height: newDimension,
          }}
        >
          <Circle
            circleDimension={newDimension}
            strokeWidth={strokeWidth}
            stroke={color as string}
            percent={percent}
            emptyStrokeColor={emptyStrokeColor as string}
          />
        </View>
      </View>
    );
  });

  // =========================================
  // Render
  // =========================================
  return (
    <View style={[gs.h100, gs.w100, gs.relative]}>
      {mode === "stick" ? stickContent : nestContent}
    </View>
  );
};

export default CircularProgress;
