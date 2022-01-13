import * as React from "react";
import { ActivityIndicator } from "react-native";
import { BaseButtonProps } from "./type";
import { useConfig } from "../../config";

const Indicator: React.FC<Pick<BaseButtonProps, "color" | "type">> = ({
  color,
  type,
}) => {
  const { gs } = useConfig();
  return (
    <ActivityIndicator
      style={[gs.mx_1]}
      color={type === "solid" ? "#fff" : color}
    />
  );
};

export default Indicator;
