import { PropsWithChildren } from "react";
import { View } from "react-native";
import { Text } from "../atoms/Text";

type Props = PropsWithChildren<{title: string}>;

export const ScreenContainerTemplate = ({ children, title }: Props) => {
  return (
    <View className="items-center p-4 gap-7">
      <Text kind="title" className="font-bold text-2xl text-start w-full">
        {title}
      </Text>
      {children}
    </View>
  );
};
