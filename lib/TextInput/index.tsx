import * as React from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";

import { BaseFontSize, BaseLineHeight } from "../../style";
import { BaseInputProps } from "./type";
import { useConfig } from "../../config";

export const TextInput = React.forwardRef<RNTextInput, BaseInputProps>(
  ({ style, icon, iconOnPress, ...otherProps }, ref) => {
    const { scheme, gs } = useConfig();
    const border: TextStyle = {
      borderBottomColor: scheme === "dark" ? "#15242A" : "#F2F4F2",
    };

    return (
      <View style={[gs.row, gs.acenter, gs.jcenter, border, styles.container]}>
        <RNTextInput
          style={[styles.input, gs.dynamic, gs.textAlign, style]}
          ref={ref}
          {...otherProps}
        />
        {icon && (
          <TouchableOpacity style={[gs.static, gs.ml_1]} onPress={iconOnPress}>
            {icon}
          </TouchableOpacity>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
  },
  input: {
    fontSize: BaseFontSize,
    lineHeight: BaseLineHeight,
    paddingTop: 8,
    paddingBottom: 8,
  },
});
