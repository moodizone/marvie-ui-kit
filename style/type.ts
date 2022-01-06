import {ColorValue} from "react-native";

/**
 * Color groups. Each group have several variant with different intensity.
 */
export type Colors =
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
export type ColorVariant = "i" | "ii" | "iii" | "iv";
export type Direction = "ltr" | "rtl";

export type Palette = Partial<Record<ColorVariant, ColorValue>>;

export type ThemePalette = Record<Colors, Palette>;
