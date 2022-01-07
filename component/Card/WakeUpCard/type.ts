import { Colors } from "../../../style/type";
import { ImageSourcePropType } from "react-native";

export interface WakeUpCardProps {
  firstLine: string;
  secondLine?: string;
  image: ImageSourcePropType;
  theme: Colors;
}
