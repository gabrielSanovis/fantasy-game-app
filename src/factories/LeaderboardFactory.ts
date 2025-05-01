import { RankedPLayer } from "@/models/RankingPlayers";
import { z } from "zod";

const RawPlayerSchema = z.object({
  name: z.string(),
  position: z.string(),
  team: z.string(),
  score: z.number(),
  rankPosition: z.number(),
});

type RawPlayer = z.infer<typeof RawPlayerSchema>;

export const LeaderboardFactory = {
  create(player: object): RankedPLayer {
    const parsed = RawPlayerSchema.parse(player);
    return toRankedPlayer(parsed);
  },
};

const toRankedPlayer = (data: RawPlayer): RankedPLayer => {
  return {
    name: data.name,
    playerPosition: data.position,
    team: data.team,
    score: data.score.toFixed(1),
    rankPosition: data.rankPosition,
  };
};
