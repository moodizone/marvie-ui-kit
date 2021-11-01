import { LegendProps } from "../Legend/type";

type RecordType = Omit<LegendProps, "title">;
type ModeType = "stick" | "nest";

export interface CircularProgressProps {
  /**
   * `stick` evaluate **total** records percentage and sum should not pass `100%`
   *
   * `nest` evaluate **each** record's percentage individually in range [0,100].
   *
   * @default `nest`
   */
  mode?: ModeType;

  /**
   * - Maximum 3 records for presenting
   */
  records: RecordType[];
}
