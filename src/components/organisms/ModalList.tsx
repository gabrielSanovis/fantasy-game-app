// ModalList.tsx
import { Player } from "@/models/Player";
import { useLeaderboardStore } from "@/store/leaderboard";
import { useTeam } from "@/store/team";
import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Button } from "../molecules/Button";

type Props = {
  visible: boolean;
  onClose: () => void;
  fieldInformation: {
    fieldPosition: "ATA" | "MEI" | "DEF" | "GOL" | null;
    index: number | null;
  };
};

export default function ModalList({
  visible,
  onClose,
  fieldInformation,
}: Props) {
  const { rankedPlayers } = useLeaderboardStore();
  const { assignPlayerToPosition } = useTeam();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione um Jogador</Text>
          <ScrollView className="pb-5 mb-5">
            {rankedPlayers
              .filter(
                (player) =>
                  player.playerPosition === fieldInformation.fieldPosition
              )
              .map(({ id, name, playerPosition, score, team }) => (
                <TouchableOpacity
                  key={id}
                  style={styles.playerCard}
                  onPress={() => {
                    assignPlayerToPosition(
                      {
                        id,
                        name,
                        playerPosition,
                        score,
                        team,
                      },
                      fieldInformation.index ?? 0
                    );
                    onClose();
                  }}
                >
                  <Text style={styles.playerName}>{name}</Text>
                  <Text style={styles.playerName}>{playerPosition}</Text>
                </TouchableOpacity>
              ))}
          </ScrollView>
          <Button onPress={onClose} kind="primary" size="medium">
            Fechar
          </Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    padding: 20,
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    maxHeight: "80%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  playerCard: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  playerName: {
    fontSize: 16,
  },
});
