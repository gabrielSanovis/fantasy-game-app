import { Slot } from "expo-router";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_600SemiBold,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../styles/global.css";
import { ActivityIndicator } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_600SemiBold,
    Roboto_700Bold,
  });

  if (!fontsLoaded)
    return (
      <ActivityIndicator className="flex-1 bg-background items-center justify-center" />
    );

  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
}
