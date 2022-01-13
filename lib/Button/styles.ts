import { StyleSheet } from "react-native";
import { ButtonDimension } from "../../style";

export const styles = StyleSheet.create({
  btn: {
    height: ButtonDimension,
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    opacity: 1,
  },
  title: {
    textAlign: "center",
    textTransform: "capitalize",
  },
  disabled: {
    opacity: 0.5,
  },
  outlined: {
    backgroundColor: "transparent",
  },
  solid: {
    borderColor: "transparent",
  },
  ghost: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
});
