import React from "react";
import { ColorSchemeName, ColorValue } from "react-native";

/**
 * Color groups. Each group have several variant with different intensity.
 */
type Colors =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "primary"
  | "secondary";

/**
 * Colors intensity
 */
type ColorVariant = "i" | "ii" | "iii" | "iv";

export type Palette = Partial<Record<ColorVariant, ColorValue>>;

export type ThemePalette = Record<Colors, Palette>;

export interface ThemeState {
  /**
   * In future it should change to support other schemes like `mint`, `tint` , ...
   * @default `dark`
   */
  scheme: ColorSchemeName;

  /**
   * color palette for current scheme
   * @default `darkPalette`
   */
  colors: ThemePalette;
}

export interface ThemeAction {
  type: ColorSchemeName;
}

export type ThemeContext =
  | [ThemeState, React.Dispatch<ThemeAction>]
  | undefined;
