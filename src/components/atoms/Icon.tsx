import { TextStyle, ViewStyle } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

type IconLibrary = "FontAwesome" | "FontAwesome6";

type Props = {
  lib?: IconLibrary;
  name: keyof typeof FontAwesome.glyphMap | keyof typeof FontAwesome6.glyphMap;
  size?: number;
  color?: string;
  style?: TextStyle | ViewStyle;
}

export function Icon({
  lib = "FontAwesome6",
  name,
  size = 24,
  color = "black",
  style,
}: Props) {
  const IconComponent = lib === "FontAwesome" ? FontAwesome : FontAwesome6;

  return <IconComponent name={name as string} size={size} color={color} style={style} />;
}
