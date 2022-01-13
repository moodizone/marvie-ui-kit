import * as React from "react";
import { ViewStyle } from "react-native";

import Indicator from "../Indicator";
import { BaseButton } from "../index";
import { ButtonDimension } from "../../../style";
import { SquareButtonType } from "./type";
import { useConfig } from "../../../config";

const Square: React.FC<SquareButtonType> = ({
  style,
  dimension = ButtonDimension,
  children,
  loading,
  type,
  color,
  ...otherProps
}) => {
  const calculatedStyles: ViewStyle = {
    width: dimension,
    height: dimension,
    borderRadius: 12,
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

export default Square;
