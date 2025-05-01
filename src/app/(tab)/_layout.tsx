import { Tabs } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { View } from "react-native";
import { colors } from "../../styles/colors";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          overflow: "hidden",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          borderTopWidth: 2,
          borderLeftWidth: 0.2,
          borderRightWidth: 0.2,
          borderColor: colors.primary,
          height: 70,
        },
        tabBarIconStyle: {
          width: "100%",
          height: "100%",
        },
        tabBarItemStyle: {
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              className={`${
                focused ? "bg-primary" : "bg-white"
              } p-3 justify-center items-center rounded-full`}
            >
              <FontAwesome6 size={size} name="ranking-star" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="myTeam/index"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              className={`p-3 ${
                focused ? "bg-primary" : "bg-white"
              } justify-center items-center rounded-full`}
            >
              <FontAwesome6 size={size} name="people-group" color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
