import {
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
} from "react-native-reanimated";
import { useState, useRef, useMemo } from "react";
import { SlidePresentationFactory } from "../factories/SlidePresentationFactory";
import { ICarouselInstance } from "react-native-reanimated-carousel";

export function useSlidesViewModel() {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const [isLastItem, setisLastItem] = useState(false);
  const slide = useMemo(() => SlidePresentationFactory.create(), []);

  useAnimatedReaction(
    () => progress.value,
    (currentValue, previousValue) => {
      if (currentValue !== previousValue) {
        if (currentValue > 1) runOnJS(setisLastItem)(true);
        if (currentValue < 2) runOnJS(setisLastItem)(false);
      }
    }
  );

  const handleCarouselPagination = () => {
    const currentIndex = progress.value;
    const LAST_INDEX = slide.length - 1;

    if (currentIndex >= LAST_INDEX) return;

    const NEXT = 1;
    const goToNextItem = currentIndex + NEXT;

    onPressPagination(goToNextItem);
  };

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return {
    ref,
    slide,
    slideEnd: isLastItem,
    progress,
    onPressPagination,
    handleCarouselPagination,
  };
}
