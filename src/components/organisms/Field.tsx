import { Position, Positions } from "@/models/Position";
import { ImageBackground, View } from "react-native";
import { PlayerSlot } from "./PlayerSlot";
import { useTeamViewModel } from "@/viewmodels/useTeamViewModel";

type Props = {
  positions: Positions;
  handleFieldInformations: ReturnType<
    typeof useTeamViewModel
  >["handleFieldInformations"];
};

export const Field = ({ handleFieldInformations, positions }: Props) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/soccer-field.png")}
      className="w-full h-[617px] justify-center items-center py-12"
    >
      <View className="justify-between items-center h-full w-full">
        {(["ATA", "MEI", "DEF", "GOL"] as Position[]).map((positionKey) => (
          <View
            key={positionKey}
            className="flex-row w-full px-2 justify-center gap-2.5"
          >
            {positions[positionKey].map((player, index) => (
              <PlayerSlot
                key={index}
                player={player}
                onPress={() => handleFieldInformations(positionKey, index)}
                position={positionKey}
              />
            ))}
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};
