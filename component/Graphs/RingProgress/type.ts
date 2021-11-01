import { ImageSourcePropType } from "react-native";
import { LegendProps } from "../../../lib/Legend/type";

export interface RingProgressType {
  /**
   * card title
   */
  title: string;

  /**
   * Image address or data [optional]
   */
  image?: ImageSourcePropType;

  /**
   * - Maximum 3 records for presenting
   * - Sum of record percentage should **NOT** be more than `100`
   */
  records: LegendProps[];
}
