import { Player } from "@/models/Player";
import { Positions } from "@/models/Position";
import { generatePositionFromFormation } from "@/utils/generatePositionFromFormation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TeamStore = {
  positions: Positions;
  assignPlayerToPosition: (player: Player, index?: number) => void;
};

const initialPlayer: Player = {
  id: 0,
  name: "",
  playerPosition: "",
  team: "",
  score: "",
};

export const useTeam = create<TeamStore>()(
  persist(
    (set, get) => ({
      positions: generatePositionFromFormation([4, 5, 1], initialPlayer),
      assignPlayerToPosition: (player, index = 0) => {
        const current = get().positions;

        const isAlreadyAssigned = [
          ...current.GOL,
          ...current.DEF,
          ...current.MEI,
          ...current.ATA,
        ].some((p) => p.id === player.id);

        if (isAlreadyAssigned) {
          Toast.show({
            type: "info",
            text1: "Este jogador já foi adicionado ao time.",
          });
          return;
        }

        const playerPosition = player.playerPosition as keyof Positions;

        if (["DEF", "MEI", "ATA", "GOL"].includes(playerPosition)) {
          const listAPosition = [...(current[playerPosition] as Player[])];

          if (index < listAPosition.length) {
            listAPosition[index] = player;
            set((state) => ({
              positions: {
                ...state.positions,
                [playerPosition]: listAPosition,
              },
            }));
          }
        }
      },
    }),
    {
      name: "async-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
