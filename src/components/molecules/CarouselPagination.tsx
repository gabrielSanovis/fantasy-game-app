import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Pagination } from "react-native-reanimated-carousel";
import { Icon } from "../atoms/Icon";
import { SharedValue } from "react-native-reanimated";
import { SlidePresentation } from "@/models/SlidePresentation";
import { colors } from "@/styles/colors";
import { Text } from "../atoms/Text";
import { router } from "expo-router";

type Props = {
  progress: SharedValue<number>;
  slide: SlidePresentation[];
  onPressPagination: (index: number) => void;
  handleCarouselPagination: () => void;
};

export function CarouselPagination({
  progress,
  slide,
  onPressPagination,
  handleCarouselPagination,
}: Props) {

  const handleNavigation = () => {
    router.replace("/(tab)")
  }
  return (
    <View className="flex-row justify-between items-center">
      <Text kind="body" onPress={handleNavigation}>
        Pular
      </Text>

      <Pagination.Basic
        progress={progress}
        data={slide}
        activeDotStyle={{ backgroundColor: colors.primary }}
        dotStyle={{
          backgroundColor: colors.primary_light,
          borderRadius: 50,
        }}
        containerStyle={{ gap: 8 }}
        onPress={onPressPagination}
      />

      <TouchableOpacity
        style={{ overflow: "hidden" }}
        onPress={handleCarouselPagination}
        className="bg-primary px-4 py-2 rounded-xl"
      >
        <Icon name="chevron-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
