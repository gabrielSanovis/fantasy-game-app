import { TouchableOpacity } from "react-native";
import { AppendPlayerCard } from "../molecules/AppendPlayerCard";
import { PlayerCard } from "../molecules/PlayerCard";
import { Player } from "@/models/Player";

type Props = {
  player: Player;
  onPress(): void;
  position: "ATA" | "MEI" | "DEF" | "GOL";
};

export const PlayerSlot = ({ onPress, player, position }: Props) => {
  const isEmpty = player.id === 0;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="items-center justify-center"
    >
      {isEmpty ? (
        <AppendPlayerCard position={position} onPress={onPress} />
      ) : (
        <PlayerCard player={player} onPress={onPress} />
      )}
    </TouchableOpacity>
  );
};
