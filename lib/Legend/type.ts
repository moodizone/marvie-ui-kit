export interface LegendProps {
  /**
   * Record label for presenting. It will ellipsis for more than one line.
   */
  title: string;

  /**
   * Label and stroke color.
   */
  color: string;

  /**
   * Percentage in `[0:100]` range.
   * @default 0
   */
  percent: number;
}
