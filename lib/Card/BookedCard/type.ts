import React from "react";

import { Colors } from "../../../style/type";

export interface BookedCards {
  theme: Colors;
  title: string;
  caption?: string;
  icon: React.ReactNode;
}
