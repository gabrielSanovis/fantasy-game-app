import { View } from "react-native";
import { RankedPLayer } from "@/models/RankingPlayers";
import { LeaderCard } from "../molecules/LeaderCard";

type Props = {
  leaders: RankedPLayer[];
};

export function LeadersSection({ leaders }: Props) {
  return (
    <View className="flex-row items-end">
      {leaders.map((player) => (
        <LeaderCard
          key={player.rankPosition}
          size={player.rankPosition === 1 ? "large" : "small"}
          kind={player.rankPosition === 1 ? "first" : undefined}
          name={player.name}
          playerPosition={player.playerPosition}
          score={player.score}
        />
      ))}
    </View>
  );
}
