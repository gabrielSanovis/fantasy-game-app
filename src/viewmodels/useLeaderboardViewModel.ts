import { useLeaderboardStore } from "@/store/leaderboard";
import { useMemo } from "react";

export function useLeaderboardViewModel() {
  const { rankedPlayers } = useLeaderboardStore();

  const { leadersInOrder, remainingPlayers } = useMemo(() => {
    const [first, second, third, ...rest] = rankedPlayers;

    const leadersInOrder = [second, first, third].filter(Boolean);
    const remainingPlayers = rest;
    
    return { leadersInOrder, remainingPlayers };
  }, [rankedPlayers]);

  return { rankedPlayers: remainingPlayers, leaders: leadersInOrder };
}
