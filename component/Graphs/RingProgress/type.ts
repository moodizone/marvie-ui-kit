export interface RecordType {
  /**
   * Record label for presenting. It will ellipsis for more than one line.
   */
  title:string;

  /**
   * Label and stroke color.
   */
  color:string;

  /**
   * Percentage in `[0:100]` range.
   * @default 0
   */
  percent:number;
}
export interface RingProgressType{
  /**
   * card title
   */
  title:string;

  /**
   * - Maximum 3 records for presenting
   * - Sum of record percentage should **NOT** be more than `100`
   */
  records:RecordType[]
}
