import { useSlidesViewModel } from "@/viewmodels/useSlidesViewModel";
import { router } from "expo-router";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SlideCard } from "../molecules/SlideCard";
import { Button } from "../molecules/Button";
import { CarouselPagination } from "../molecules/CarouselPagination";

const width = Dimensions.get("window").width;

export function OnboardingCarousel() {
  const {
    ref,
    slide,
    progress,
    slideEnd,
    onPressPagination,
    handleCarouselPagination,
  } = useSlidesViewModel();

  const handleNavigation = () => {
    router.replace("/(tab)");
  };
  return (
    <>
      <Carousel
        ref={ref}
        loop={false}
        width={width}
        height={547}
        snapEnabled={true}
        pagingEnabled={true}
        onProgressChange={progress}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={slide}
        renderItem={SlideCard}
      />

      <View className="px-8">
        {slideEnd ? (
          <Button kind="primary" size="large" onPress={handleNavigation}>
            COMEÇAR
          </Button>
        ) : (
          <CarouselPagination
            progress={progress}
            handleCarouselPagination={handleCarouselPagination}
            onPressPagination={onPressPagination}
            slide={slide}
          />
        )}
      </View>
    </>
  );
}
