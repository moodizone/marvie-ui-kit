import {BaseButtonProps} from "../type";

export interface SquareButtonType extends BaseButtonProps {
  /**
   * - icon has higher priority than title
   * @default `ButtonDimension`
   */
  dimension?: number;
}
