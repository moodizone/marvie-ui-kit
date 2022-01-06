import { ColorSchemeName } from "react-native";
import { CommonStyle, GeneralStyle } from "../style";
import {Direction, ThemePalette} from "../style/type";

export interface ConfigState {
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

  /**
   * Application direction.
   * @default is `ltr`
   */
  direction: Direction;

  /**
   * Some common styles gather in this object for prevent duplication and easy-switch between `rtl` and 'ltr'.
   * gs : general styles
   */
  gs: GeneralStyle & CommonStyle;
}

export interface ConfigAction {
  type: ColorSchemeName | Direction;
}

export interface ConfigContextValues extends ConfigState {
  /**
   * Change app theme
   * @param t
   */
  setTheme(t: ColorSchemeName): void;

  /**
   * Change app direction
   * @param d
   */
  setDirection(d: Direction): void;
}

export type ConfigContext = ConfigContextValues | undefined;
