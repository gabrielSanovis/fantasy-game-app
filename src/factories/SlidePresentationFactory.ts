 import { SlidePresentation } from "../models/SlidePresentation";

export const SlidePresentationFactory = {
  create(): SlidePresentation[] {
    return [
      {
        title: "Acompanhe os Melhores!",
        description:
          "Descubra quem está no topo do jogo com o nosso Ranking! Veja uma lista dos melhores jogadores, com nome, pontuação e posição.",
        image: require("../../assets/images/first-slide.png"),
      },
      {
        title: "Gerencie Seu Time!",
        description: "Monte e visualize o seu próprio time.",
        image: require("../../assets/images/second-slide.png"),
      },
      {
        title: "Pontuação Total do Time!",
        description:
          "Além dos dados individuais, veja a pontuação total do seu time. Acompanhe o desempenho do grupo e prepare-se para subir no ranking!",
        image: require("../../assets/images/third-slide.png"),
      },
    ];
  },
};
