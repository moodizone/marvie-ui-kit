import { CircleProps as RNSCircleProps } from "react-native-svg";
export interface CircleProps extends RNSCircleProps {
  /**
   * Size of circle including radius and strokeWidth.
   *
   * `radius = (circleDimension - strokeWidth) / 2`
   */
  circleDimension: number;

  /**
   * stroke color for empty part of circle
   */
  emptyStrokeColor?: string;

  /**
   * How much stroke will be painted. In [0,100] range
   * Default `100`
   */
  percent?: number;
}
