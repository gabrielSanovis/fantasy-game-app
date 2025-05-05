import { Player } from "@/models/Player";
import { Positions } from "@/models/Position";

export function generatePositionFromFormation(
  formation: [number, number, number],
  player: Player
): Positions {
  const [def, mei, ata] = formation;
  return {
    DEF: Array.from({ length: def }, () => ({ ...player })),
    MEI: Array.from({ length: mei }, () => ({ ...player })),
    ATA: Array.from({ length: ata }, () => ({ ...player })),
    GOL: Array.from({ length: 1 }, () => ({ ...player })),
  };
}
