import { FlatList, View } from "react-native";
import { Text } from "@/components/atoms/Text";
import { LeadersSection } from "@/components/organisms/LeadersSection";
import { RankedCard } from "@/components/molecules/RankedCard";
import { useLeaderboardViewModel } from "@/viewmodels/useLeaderboardViewModel";

export function Leaderboard() {
  const { leaders, rankedPlayers } = useLeaderboardViewModel();

  return (
    <FlatList
      data={rankedPlayers}
      ListHeaderComponent={() => (
        <View>
          <Text kind="title">RANKING</Text>
          <LeadersSection
            leaders={leaders}
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
