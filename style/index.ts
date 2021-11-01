import { TextStyle, ViewStyle } from "react-native";

type GeneralStyleKey =
  | "direction"
  | "flexDirection"
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

type CommonStyleKey = 'wrap'| 'nowrap'| 'jbetween'| 'jcenter'| 'jend'| 'jstart'| 'jaround'| 'jevenly';

export type GeneralStyle = Record<GeneralStyleKey, ViewStyle | TextStyle>;
export type CommonStyle = Record<CommonStyleKey, ViewStyle | TextStyle>;
const _0=0;
const _1=8;
const _2=16;
const _3=24;
const _4=32;
const _5=40;

export const LTRStyles: GeneralStyle = {
  direction: { direction: "ltr" },
  flexDirection: { flexDirection: "row" },
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
  flexDirection: { flexDirection: "row-reverse" },
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
  mr_2: { marginLeft: _2},
  mr_3: { marginLeft: _3 },
  mr_4: { marginLeft: _4 },
  mr_5: { marginLeft: _5 },
};

export const CommonStyles:CommonStyle ={
  wrap:{flexWrap:"wrap"},
  nowrap:{flexWrap:"nowrap"},
  jbetween:{justifyContent:"space-between"},
  jcenter:{justifyContent:"center"},
  jend:{justifyContent:"flex-end"},
  jstart:{justifyContent:"flex-start"},
  jaround:{justifyContent:"space-around"},
  jevenly:{justifyContent:"space-evenly"},
}
