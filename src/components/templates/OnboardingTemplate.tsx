import { PropsWithChildren } from "react";
import { View } from "react-native";
import { Text } from "../atoms/Text";
import { Icon } from "../atoms/Icon";
import { colors } from "@/styles/colors";

export function OnboardingTamplate({ children }: PropsWithChildren) {
  return (
    <View className="flex-1 bg-background justify-between py-8">
      <View className="flex-row px-8">
        <Text kind="title">FANTASY</Text>
        <Icon
          lib="FontAwesome"
          name="circle"
          size={12}
          color={colors.primary}
        />
      </View>
      {children}
    </View>
  );
}
