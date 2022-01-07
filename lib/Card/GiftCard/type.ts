import React from "react";
import { Colors } from "../../../style/type";

export interface GiftCardProps {
  theme: Colors;
  icon?: React.ReactNode;
  title: string;
  caption: string;
}
