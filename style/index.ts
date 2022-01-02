import { TextStyle, ViewStyle } from "react-native";

export type GeneralStyleKey =
  | "direction"
  | "row"
  | "textAlign"
  | "pl_0"
  | "pl_1"
  | "pl_2"
  | "pl_3"
  | "pl_4"
  | "pl_5"
  | "pr_0"
  | "pr_1"
  | "pr_2"
  | "pr_3"
  | "pr_4"
  | "pr_5"
  | "ml_0"
  | "ml_1"
  | "ml_2"
  | "ml_3"
  | "ml_4"
  | "ml_5"
  | "mr_0"
  | "mr_1"
  | "mr_2"
  | "mr_3"
  | "mr_4"
  | "mr_5";

export type CommonStyleKey =
  | "col"
  | "static"
  | "dynamic"
  | "wrap"
  | "nowrap"
  | "jbetween"
  | "jcenter"
  | "jend"
  | "jstart"
  | "jaround"
  | "jevenly"
  | "astart"
  | "aend"
  | "acenter"
  | "astretch"
  | "abaseline"
  | "absolute"
  | "relative"
  | "w100"
  | "h100"
  | "pt_0"
  | "pt_1"
  | "pt_2"
  | "pt_3"
  | "pt_4"
  | "pt_5"
  | "pb_0"
  | "pb_1"
  | "pb_2"
  | "pb_3"
  | "pb_4"
  | "pb_5"
  | "mt_0"
  | "mt_1"
  | "mt_2"
  | "mt_3"
  | "mt_4"
  | "mt_5"
  | "mb_0"
  | "mb_1"
  | "mb_2"
  | "mb_3"
  | "mb_4"
  | "mb_5";

export type GeneralStyle = Record<GeneralStyleKey, ViewStyle | TextStyle>;
export type CommonStyle = Record<CommonStyleKey, ViewStyle | TextStyle>;
const _0 = 0;
const _1 = 8;
const _2 = 16;
const _3 = 24;
const _4 = 32;
const _5 = 40;

export const LTRStyles: GeneralStyle = {
  direction: { direction: "ltr" },
  row: { flexDirection: "row" },
  textAlign: { textAlign: "left" },

  // Padding
  pl_0: { paddingLeft: _0 },
  pl_1: { paddingLeft: _1 },
  pl_2: { paddingLeft: _2 },
  pl_3: { paddingLeft: _3 },
  pl_4: { paddingLeft: _4 },
  pl_5: { paddingLeft: _5 },
  pr_0: { paddingRight: _0 },
  pr_1: { paddingRight: _1 },
  pr_2: { paddingRight: _2 },
  pr_3: { paddingRight: _3 },
  pr_4: { paddingRight: _4 },
  pr_5: { paddingRight: _5 },

  //Margin
  ml_0: { marginLeft: _0 },
  ml_1: { marginLeft: _1 },
  ml_2: { marginLeft: _2 },
  ml_3: { marginLeft: _3 },
  ml_4: { marginLeft: _4 },
  ml_5: { marginLeft: _5 },
  mr_0: { marginRight: _0 },
  mr_1: { marginRight: _1 },
  mr_2: { marginRight: _2 },
  mr_3: { marginRight: _3 },
  mr_4: { marginRight: _4 },
  mr_5: { marginRight: _5 },
};
export const RTLStyles: GeneralStyle = {
  direction: { direction: "rtl" },
  row: { flexDirection: "row-reverse" },
  textAlign: { textAlign: "right" },

  // Padding
  pl_0: { paddingRight: _0 },
  pl_1: { paddingRight: _1 },
  pl_2: { paddingRight: _2 },
  pl_3: { paddingRight: _3 },
  pl_4: { paddingRight: _4 },
  pl_5: { paddingRight: _5 },
  pr_0: { paddingLeft: _0 },
  pr_1: { paddingLeft: _1 },
  pr_2: { paddingLeft: _2 },
  pr_3: { paddingLeft: _3 },
  pr_4: { paddingLeft: _4 },
  pr_5: { paddingLeft: _5 },

  //Margin
  ml_0: { marginRight: _0 },
  ml_1: { marginRight: _1 },
  ml_2: { marginRight: _2 },
  ml_3: { marginRight: _3 },
  ml_4: { marginRight: _4 },
  ml_5: { marginRight: _5 },
  mr_0: { marginLeft: _0 },
  mr_1: { marginLeft: _1 },
  mr_2: { marginLeft: _2 },
  mr_3: { marginLeft: _3 },
  mr_4: { marginLeft: _4 },
  mr_5: { marginLeft: _5 },
};
export const CommonStyles: CommonStyle = {
  col: { flexDirection: "column" },
  wrap: { flexWrap: "wrap" },
  nowrap: { flexWrap: "nowrap" },
  jbetween: { justifyContent: "space-between" },
  jcenter: { justifyContent: "center" },
  jend: { justifyContent: "flex-end" },
  jstart: { justifyContent: "flex-start" },
  jaround: { justifyContent: "space-around" },
  jevenly: { justifyContent: "space-evenly" },
  astart: { alignItems: "flex-start" },
  aend: { alignItems: "flex-end" },
  acenter: { alignItems: "center" },
  astretch: { alignItems: "stretch" },
  abaseline: { alignItems: "baseline" },
  static: { flexGrow: 0, flexShrink: 0 },
  dynamic: { flexGrow: 1, flexShrink: 1 },
  absolute: { position: "absolute" },
  relative: { position: "relative" },
  w100: { width: "100%" },
  h100: { height: "100%" },
  pt_0: { paddingTop: _0 },
  pt_1: { paddingTop: _1 },
  pt_2: { paddingTop: _2 },
  pt_3: { paddingTop: _3 },
  pt_4: { paddingTop: _4 },
  pt_5: { paddingTop: _5 },
  pb_0: { paddingTop: _0 },
  pb_1: { paddingTop: _1 },
  pb_2: { paddingTop: _2 },
  pb_3: { paddingTop: _3 },
  pb_4: { paddingTop: _4 },
  pb_5: { paddingTop: _5 },
  mt_0: { paddingTop: _0 },
  mt_1: { paddingTop: _1 },
  mt_2: { paddingTop: _2 },
  mt_3: { paddingTop: _3 },
  mt_4: { paddingTop: _4 },
  mt_5: { paddingTop: _5 },
  mb_0: { paddingTop: _0 },
  mb_1: { paddingTop: _1 },
  mb_2: { paddingTop: _2 },
  mb_3: { paddingTop: _3 },
  mb_4: { paddingTop: _4 },
  mb_5: { paddingTop: _5 },
};
