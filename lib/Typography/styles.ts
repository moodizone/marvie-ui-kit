import { StyleSheet } from "react-native";
import {
  BaseFontSize,
  BaseLineHeight,
  BoldFontWeight,
  ThinFontWeight,
} from "../../style";

export const styles = StyleSheet.create({
  text: {
    fontSize: BaseFontSize,
    lineHeight: BaseLineHeight,
  },
  bold: {
    fontWeight: BoldFontWeight,
  },
  thin: {
    fontWeight: ThinFontWeight,
  },
  underlined: {
    textDecorationLine: "underline",
  },
  deleted: {
    textDecorationLine: "line-through",
  },
  italic: {
    fontStyle: "italic",
  },
  disabled: {
    color: "#B1B2B1",
  },
  link: {
    color: "#1879FE",
  },
  h1: { fontSize: BaseFontSize * 2.5, lineHeight: BaseLineHeight * 2 },
  h2: { fontSize: BaseFontSize * 2, lineHeight: BaseLineHeight * 1.8 },
  h3: { fontSize: BaseFontSize * 1.5, lineHeight: BaseLineHeight * 1.4 },
  h4: { fontSize: BaseFontSize * 1.3, lineHeight: BaseLineHeight * 1.2 },
  h5: { fontSize: BaseFontSize * 1.1, lineHeight: BaseLineHeight * 1.1 },
});
