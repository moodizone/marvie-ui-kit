import { TextInputProps } from "react-native";
import React from "react";

export interface BaseInputProps extends TextInputProps {
  icon?: React.ReactNode;
  iconOnPress?: () => void;
}
