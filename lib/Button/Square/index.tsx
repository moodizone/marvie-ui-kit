import * as React from "react";
import { ViewStyle } from "react-native";

import { Button } from "../index";
import { ButtonDimension } from "../../../style";
import { SquareButtonType } from "./type";
import { useConfig } from "../../../config";

const Square: React.FC<SquareButtonType> = ({
  square,
  circle,
  style,
  title,
  dimension = ButtonDimension,
  icon,
  ...otherProps
}) => {
  const calculatedStyles: ViewStyle = {
    width: dimension,
    height: dimension,
    borderRadius: 12,
  };
  const { gs } = useConfig();
  return (
    <Button
      square
      circle={false}
      title={!icon ? title : undefined}
      icon={icon}
      style={[gs.ofh, calculatedStyles, style]}
      {...otherProps}
    />
  );
};

export default Square;
