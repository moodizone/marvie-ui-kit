import * as React from "react";
import { ViewStyle } from "react-native";

import Indicator from "../Indicator";
import { BaseButton } from "../index";
import { ButtonDimension } from "../../../style";
import { CircleButtonProps } from "./type";
import { useConfig } from "../../../config";

const Circle: React.FC<CircleButtonProps> = ({
  style,
  dimension = ButtonDimension,
  children,
  type,
  color,
  loading,
  ...otherProps
}) => {
  const calculatedStyles: ViewStyle = {
    width: dimension,
    height: dimension,
    borderRadius: dimension,
  };
  const { gs } = useConfig();
  return (
    <BaseButton
      loading={loading}
      type={type}
      color={color}
      style={[gs.ofh, calculatedStyles, style]}
      {...otherProps}
    >
      {loading ? <Indicator type={type} color={color} /> : children}
    </BaseButton>
  );
};

export default Circle;
