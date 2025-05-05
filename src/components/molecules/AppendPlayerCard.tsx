import { TouchableOpacity } from "react-native";
import { Text } from "../atoms/Text";
import { Icon } from "../atoms/Icon";
import { colors } from "@/styles/colors";

type Props = {
  onPress(): void;
  position: "ATA" | "MEI" | "DEF" | "GOL" 
};

export const AppendPlayerCard = ({ onPress, position }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-[70] h-[70] rounded-3xl justify-center items-center border-2 border-primary_light bg-tip"
    >
      <Text kind="extra-condensed" className="text-white text-xl">
        {position}
      </Text>
      <Icon name={"plus"} size={16} color={colors.primary_light} />
    </TouchableOpacity>
  );
};
