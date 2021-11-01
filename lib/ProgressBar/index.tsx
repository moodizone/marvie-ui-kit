import React from "react";
import { ProgressBarProps } from "./type";
import { Animated, StyleSheet, View } from "react-native";
import { useConfig } from "../../ConfigProvier/ConfigProvider";

const ProgressBar: React.FC<ProgressBarProps> = ({ percent = 0, color }) => {
  const { colors, gs } = useConfig();
  const backgroundColor = colors.primary.ii;
  const animatedWidth = React.useRef<Animated.Value>(
    new Animated.Value(0)
  ).current;

  React.useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: percent,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [animatedWidth, percent]);

  return (
    <View
      style={[{ backgroundColor }, gs.direction, styles.container, gs.w100]}
    >
      <Animated.View
        style={[
          {
            backgroundColor: color,
            width: animatedWidth.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
          },
          gs.h100,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    borderRadius: 6,
    overflow: "hidden",
  },
});

export default ProgressBar;
