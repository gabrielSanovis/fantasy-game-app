import { View } from "react-native";
import { Text } from "../atoms/Text";
import { RankedPLayer } from "@/models/RankingPlayers";

type Props = {
  first: RankedPLayer;
  second: RankedPLayer;
  third: RankedPLayer;
};

export function LeadersSection({ first, second, third }: Props) {
  return (
    <View className="flex-row items-end">
      <View className="flex-1 items-center justify-between py-8 px-1 bg-white rounded-t-[32] shadow">
        <Text kind="caption-bold">{second.name}</Text>
        <View className="flex-row items-baseline gap-1">
          <Text kind="title">{second.score}</Text>
          <Text kind="caption">pt</Text>
        </View>
        <Text kind="body">{second.playerPosition}</Text>
      </View>

      <View className="flex-1 items-center justify-between pt-12 pb-8 px-1 bg-white rounded-t-[32] border-t-4 border-x-[0.1px] border-primary shadow">
        <Text kind="caption-bold">{first.name}</Text>
        <View className="flex-row items-baseline gap-1">
          <Text kind="title" className="text-primary">
            {first.score}
          </Text>
          <Text kind="caption">pt</Text>
        </View>
        <Text kind="body">{first.playerPosition}</Text>
      </View>

      <View className="flex-1 items-center justify-between py-8 px-1 bg-white rounded-t-[32] shadow">
        <Text kind="caption-bold">{third.name}</Text>
        <View className="flex-row items-baseline gap-1">
          <Text kind="title">{third.score}</Text>
          <Text kind="caption">pt</Text>
        </View>
        <Text kind="body">{third.playerPosition}</Text>
      </View>
    </View>
  );
}
