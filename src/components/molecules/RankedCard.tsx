import { ListRenderItemInfo, View } from "react-native";
import { Text } from "../atoms/Text";
import { RankedPLayer } from "@/models/RankingPlayers";

export function RankedCard({ item }: ListRenderItemInfo<RankedPLayer>) {
  return (
    <View className="px-6 py-4 bg-white flex-row justify-between items-center rounded-xl shadow">
      <View className="flex-row gap-10 items-center">
        <Text kind="body">{item.rankPosition}</Text>
        <View className="gap-2">
          <Text kind="subtitle">{item.name}</Text>
          <Text kind="body">{item.playerPosition}</Text>
        </View>
      </View>
      <View className="flex-row items-baseline gap-1">
        <Text kind="title">{item.score}</Text>
        <Text kind="caption">pt</Text>
      </View>
    </View>
  );
}
