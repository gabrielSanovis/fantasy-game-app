import { RankedPLayer } from "@/models/RankingPlayers";
import { z } from "zod";

const RawPlayerSchema = z.object({
  id: z.number(),
  name: z.string(),
  position: z.string(),
  team: z.string(),
  score: z.number(),
  rankPosition: z.number(),
});

export const LeaderboardFactory = {
  create(player: object): RankedPLayer {
    const parsed = RawPlayerSchema.parse(player);
    return {
      id: parsed.id,
      name: parsed.name,
      playerPosition: parsed.position,
      team: parsed.team,
      score: parsed.score.toFixed(1),
      rankPosition: parsed.rankPosition,
    };
  },
};

