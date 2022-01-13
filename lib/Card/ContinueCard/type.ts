import React from "react";
import { Colors } from "../../../style/type";

export interface ContinueCardProps {
  theme: Colors;
  icon?: React.ReactNode;
  title: string;
  caption: string;
  onPress: () => void;
}
