import { Tabs } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { View } from "react-native";
import { colors } from "../../styles/colors";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.white,
          borderColor: colors.primary,
          borderTopWidth: 2,
          borderStartWidth: 0.2,
          borderEndWidth: 0.2,
          height: 84,
          borderTopColor: colors.primary,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        },
        tabBarIconStyle: {
          width: "100%",
          height: "100%",
        },
        tabBarItemStyle: {
          borderTopLeftRadius: 12,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`p-3 ${
                focused ? "bg-primary" : "bg-white"
              } justify-center items-center rounded-full`}
            >
              <FontAwesome6
                size={24}
                name="ranking-star"
                color={focused ? colors.white : colors.primary}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="myTeam/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`p-3 ${
                focused ? "bg-primary" : "bg-white"
              } justify-center items-center rounded-full`}
            >
              <FontAwesome6
                size={24}
                name="people-group"
                color={focused ? colors.white : colors.primary}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
