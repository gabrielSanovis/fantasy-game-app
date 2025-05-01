import { useLeaderboardStore } from "@/store/leaderboard";
import { useMemo } from "react";
import { FlatList, View } from "react-native";
import { Text } from "@/components/atoms/Text";
import { LeadersSection } from "@/components/molecules/LeadersSection";
import { RankedCard } from "@/components/molecules/RankedCard";

export function Leaderboard() {
  const { rankedPlayers } = useLeaderboardStore();

  const leaders = useMemo(() => {
    const leaders = rankedPlayers.slice(0, 3);
    return {
      first: leaders[0],
      second: leaders[1],
      third: leaders[2],
    };
  }, [rankedPlayers]);

  return (
    <FlatList
      data={rankedPlayers.slice(3)}
      ListHeaderComponent={() => (
        <View>
          <Text kind="title">RANKING</Text>
          <LeadersSection
            first={leaders.first}
            second={leaders.second}
            third={leaders.third}
          />
        </View>
      )}
      contentContainerStyle={{
        paddingInline: 32,
        paddingTop: 32,
        paddingBottom: 100,
        gap: 8,
      }}
      renderItem={RankedCard}
    />
  );
}
