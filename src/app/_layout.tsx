import { Slot } from "expo-router";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_600SemiBold,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import {
  SairaCondensed_800ExtraBold
} from "@expo-google-fonts/saira-condensed";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";
import { useLeaderboardStore } from "@/store/leaderboard";
import data from "../../data.json";
import { useEffect } from "react";
import Toast from 'react-native-toast-message';
import "../styles/global.css";

export default function Layout() {
  const { addPlayerCollection } = useLeaderboardStore();
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_600SemiBold,
    Roboto_700Bold,
    SairaCondensed_800ExtraBold
  });


  useEffect(() => {
    console.log(data[0])
    addPlayerCollection(data);
  }, []);

  if (!fontsLoaded)
    return (
      <ActivityIndicator className="flex-1 bg-background items-center justify-center" />
    );

  return (
    <GestureHandlerRootView>
      <Slot />
      <Toast />
    </GestureHandlerRootView>
  );
}
