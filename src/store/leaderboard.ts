import { LeaderboardFactory } from "@/factories/LeaderboardFactory";
import { PlayerDTO } from "@/models/Player";
import { RankedPLayer } from "@/models/RankingPlayers";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LeaderboardStore = {
  rankedPlayers: RankedPLayer[];
  addPlayerCollection(players: PlayerDTO[]): void;
};

export const useLeaderboardStore = create<LeaderboardStore>()(
  persist(
    (set) => ({
      rankedPlayers: [],
      addPlayerCollection(players) {
        const ranked = players
          .sort((playerA, playerB) => playerB.score - playerA.score)
          .map((player, index) =>
            LeaderboardFactory.create({ rankPosition: index + 1, ...player })
          );
        set({ rankedPlayers: ranked });
      },
    }),
    {
      name: "async-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
