import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "../atoms/Text";
import { Player } from "@/models/Player";

type Props = {
  onPress(): void;
  player: Player;
};

export const PlayerCard = ({ onPress, player }: Props) => {
  const [firstName, lastName] = player.name.split(" ");
  let nickname = firstName;
  if (lastName !== undefined) {
    nickname = `${firstName[0]}.${lastName}`;
  }
  player.name = nickname;
  return (
    <TouchableOpacity onPress={onPress} className="items-center">
      <View className="bg-tip rounded-md border-b-2 border-x px-1 border-primary items-center justify-center mt-[-1]">
        <Text kind="extra-condensed" className="text-white">
          {player.score}
        </Text>
      </View>
      <View className="w-16 h-16 bg-tip rounded-t-xl border-t border-x border-primary">
        <Image
          className="flex-1 w-full"
          source={require("../../../assets/images/t-shirt.png")}
        />
      </View>
      <View className="bg-tip rounded-md border-b-2 border-x border-primary w-[70] items-center justify-center mt-[-1]">
        <Text kind="extra-condensed" className="text-white">
          {nickname}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
