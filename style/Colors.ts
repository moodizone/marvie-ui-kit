import { ThemePalette, Palette } from "../config/type";

const red: Palette = {
  i: "#ff464f",
  ii: "#FF575F",
  iii: "#623a42",
};
const orange: Palette = {
  i: "#ff974a",
  ii: "#ff8a34",
  iii: "#624d3b",
};
const yellow: Palette = {
  i: "#ffbc25",
  ii: "#ffc542",
  iii: "#625b39",
};
const green: Palette = {
  i: "#25c685",
  ii: "#3dd598",
  iii: "#286053",
};
const blue: Palette = {
  i: "#005df2",
  ii: "#0062ff",
  iii: "#163e72",
};
const purple: Palette = {
  i: "#6952dc",
  ii: "#755fe2",
  iii: "#393d69",
};
const primary: Palette = {
  i: "#40DF9F",
  ii: "#2A3C44",
  iii: "#2A3C44",
  iv: "#22343C",
};
const secondary: Palette = {
  i: "#ffffff",
  ii: "#96a7af",
  iii: "#475e69",
  iv: "#30444e",
};

export const darkPalette: ThemePalette = {
  red,
  orange,
  yellow,
  green,
  blue,
  purple,
  secondary,
  primary,
};

export const lightPalette: ThemePalette = {
  red: { ...red, iii: "#FFE5E7" },
  orange: { ...orange, iii: "#FFEFE3" },
  yellow: { ...yellow, iii: "#FEF3D9" },
  green: { ...green, iii: "#D4F5E9" },
  blue: { ...blue, iii: "#E3EEFF" },
  purple: { ...purple, iii: "#EDEAFD" },
  secondary: {
    i: "#1A3B34",
    ii: "#899A96",
    iii: "#E4E9F3",
    iv: "#EDF1FA",
  },
  primary: {
    i: "#40DF9F",
    ii: "#FAFBFC",
    iii: "#FFFFFF",
    iv: "#FFFFFF",
  },
};
