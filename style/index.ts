import { TextStyle, ViewStyle } from "react-native";

type StyleKey =
  | "direction"
  | "flexDirection"
  | "textAlign"
  | "pl_0"
  | "pl_1"
  | "pl_2"
  | "pl_3"
  | "pl_4"
  | "pl_5"
  | "pl_6"
  | "pr_0"
  | "pr_1"
  | "pr_2"
  | "pr_3"
  | "pr_4"
  | "pr_5"
  | "pr_6"
  | "ml_0"
  | "ml_1"
  | "ml_2"
  | "ml_3"
  | "ml_4"
  | "ml_5"
  | "ml_6"
  | "mr_0"
  | "mr_1"
  | "mr_2"
  | "mr_3"
  | "mr_4"
  | "mr_5"
  | "mr_6";

export type GeneralStyle = Record<StyleKey, ViewStyle | TextStyle>;

export const LTRStyles: GeneralStyle = {
  direction: { direction: "ltr" },
  flexDirection: { flexDirection: "row" },
  textAlign: { textAlign: "left" },

  // Padding
  pl_0: { paddingLeft: 0 },
  pl_1: { paddingLeft: 4 },
  pl_2: { paddingLeft: 8 },
  pl_3: { paddingLeft: 12 },
  pl_4: { paddingLeft: 16 },
  pl_5: { paddingLeft: 20 },
  pl_6: { paddingLeft: 24 },
  pr_0: { paddingRight: 0 },
  pr_1: { paddingRight: 4 },
  pr_2: { paddingRight: 8 },
  pr_3: { paddingRight: 12 },
  pr_4: { paddingRight: 16 },
  pr_5: { paddingRight: 20 },
  pr_6: { paddingRight: 24 },

  //Margin
  ml_0: { marginLeft: 0 },
  ml_1: { marginLeft: 4 },
  ml_2: { marginLeft: 8 },
  ml_3: { marginLeft: 12 },
  ml_4: { marginLeft: 16 },
  ml_5: { marginLeft: 20 },
  ml_6: { marginLeft: 24 },
  mr_0: { marginRight: 0 },
  mr_1: { marginRight: 4 },
  mr_2: { marginRight: 8 },
  mr_3: { marginRight: 12 },
  mr_4: { marginRight: 16 },
  mr_5: { marginRight: 20 },
  mr_6: { marginRight: 24 },
};

export const RTLStyles: GeneralStyle = {
  direction: { direction: "rtl" },
  flexDirection: { flexDirection: "row-reverse" },
  textAlign: { textAlign: "right" },

  // Padding
  pl_0: { paddingRight: 0 },
  pl_1: { paddingRight: 4 },
  pl_2: { paddingRight: 8 },
  pl_3: { paddingRight: 12 },
  pl_4: { paddingRight: 16 },
  pl_5: { paddingRight: 20 },
  pl_6: { paddingRight: 24 },
  pr_0: { paddingLeft: 0 },
  pr_1: { paddingLeft: 4 },
  pr_2: { paddingLeft: 8 },
  pr_3: { paddingLeft: 12 },
  pr_4: { paddingLeft: 16 },
  pr_5: { paddingLeft: 20 },
  pr_6: { paddingLeft: 24 },

  //Margin
  ml_0: { marginRight: 0 },
  ml_1: { marginRight: 4 },
  ml_2: { marginRight: 8 },
  ml_3: { marginRight: 12 },
  ml_4: { marginRight: 16 },
  ml_5: { marginRight: 20 },
  ml_6: { marginRight: 24 },
  mr_0: { marginLeft: 0 },
  mr_1: { marginLeft: 4 },
  mr_2: { marginLeft: 8 },
  mr_3: { marginLeft: 12 },
  mr_4: { marginLeft: 16 },
  mr_5: { marginLeft: 20 },
  mr_6: { marginLeft: 24 },
};
