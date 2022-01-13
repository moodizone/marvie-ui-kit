import {BaseButtonProps} from "../type";
import {ColorValue} from "react-native";

export interface CircleButtonProps extends BaseButtonProps {
  /**
   * - icon has higher priority than title
   * @default equal to `ButtonDimension`
   */
  dimension?: number;

  hasShade?: ColorValue;
}
