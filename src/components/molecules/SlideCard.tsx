import { SlidePresentation } from "@/models/SlidePresentation";
import { Image, View } from "react-native";
import { CarouselRenderItemInfo } from "react-native-reanimated-carousel/lib/typescript/types";
import { Text } from "../atoms/Text";

type Props = CarouselRenderItemInfo<SlidePresentation>;

export function SlideCard({ index, item }: Props) {
  return (
    <View
      key={index}
      className="flex-1 justify-center p-6 gap-6 bg-white rounded-xl shadow"
    >
      <Image
        className="flex-1 w-full"
        resizeMode="contain"
        source={item.image}
      />
      <View className="gap-2">
        <Text kind="title">{item.title}</Text>
        <Text kind="subtitle">{item.description}</Text>
      </View>
    </View>
  );
}
