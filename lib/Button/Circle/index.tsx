import * as React from "react";
import { ViewStyle } from "react-native";

import { ButtonDimension } from "../../../style";
import { CircleButtonProps } from "./type";
import { useConfig } from "../../../config";
import { Button } from "../index";

const Circle: React.FC<CircleButtonProps> = ({
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
    borderRadius: dimension,
  };
  const { gs } = useConfig();
  return (
    <Button
      square={false}
      circle
      title={!icon ? title : undefined}
      icon={icon}
      style={[gs.ofh, calculatedStyles, style]}
      {...otherProps}
    />
  );
};

export default Circle;
