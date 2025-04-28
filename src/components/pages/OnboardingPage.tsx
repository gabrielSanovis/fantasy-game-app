import { OnboardingCarousel } from "../organisms/OnboardingCarousel";
import { OnboardingTamplate } from "../templates/OnboardingTemplate";

export function OnboardingPage() {
  return (
    <OnboardingTamplate>
      <OnboardingCarousel />
    </OnboardingTamplate>
  );
}
