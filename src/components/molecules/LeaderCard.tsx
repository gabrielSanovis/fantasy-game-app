import { View } from "react-native";
import { Text } from "../atoms/Text";
import { RankedPLayer } from "@/models/RankingPlayers";
import clsx from "clsx";

type Props = Pick<RankedPLayer, "name" | "score" | "playerPosition"> & {
  size: "small" | "large";
  kind?: "first";
};

export function LeaderCard({ name, score, playerPosition, size, kind }: Props) {
  return (
    <View
      className={clsx(
        "flex-1 items-center justify-between px-1 bg-white rounded-t-[32] shadow",
        {
          "py-8": size === "small",
          "pt-12 pb-8": size === "large",
          "border-t-4 border-x-[0.1px] border-primary": kind === "first",
        }
      )}
    >
      <Text kind="caption-bold">{name}</Text>
      <View className="flex-row items-baseline gap-1">
        <Text
          kind="title"
          className={clsx({ "text-primary": kind === "first" })}
        >
          {score}
        </Text>
        <Text kind="caption">pt</Text>
      </View>
      <Text kind="body">{playerPosition}</Text>
    </View>
  );
}
