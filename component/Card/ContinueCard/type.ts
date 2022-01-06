import React from "react";

export interface ContinueCardProps {
  icon?: React.ReactNode;
  title: string;
  caption: string;
  onClick: () => void;
}
