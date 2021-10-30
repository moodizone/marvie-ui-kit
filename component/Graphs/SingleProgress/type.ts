import React from "react";

export interface SingleProgressProps {
  /**
   * Card theme color, including bar, percent and icon-box
   */
  color: string;

  /**
   * Card title, it will ellipsis for long title automatically.
   */
  title: string;

  /**
   * Card icon.
   */
  icon: React.ReactNode;

  /**
   * Default is `0`
   */
  percent?: number;
}

export interface ProgressBarProps {
  color: string;
  percent?: number;
}
