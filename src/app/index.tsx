import { OnboardingCarousel } from "@/components/organisms/OnboardingCarousel";
import { OnboardingTamplate } from "@/components/templates/OnboardingTemplate";
import * as React from "react";

export default function OnboardingScreen() {
  return (
    <OnboardingTamplate>
      <OnboardingCarousel />
    </OnboardingTamplate>
  );
}
