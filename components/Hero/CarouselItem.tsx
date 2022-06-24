import React from "react";
import {
  CarouselContent,
  CarouselItemContainer,
  ItemButton,
  Subtitle,
  TextContainer,
  Title,
} from "./styles";

interface ISlider {
  titulo: string;
  descricao: string;
  img: string;
}

interface SliderProps {
  slider: ISlider;
  stopSlide: () => void;
  startSlide: () => void;
}

export default function CarouselItem({
  slider,
  stopSlide,
  startSlide,
}: SliderProps) {
  return (
    <CarouselContent onMouseEnter={stopSlide} onMouseOut={startSlide}>
      <CarouselItemContainer>
        <TextContainer>
          <Title>Ótimas </Title>
          <Title> ofertas!</Title>
          {/* <Subtitle>{slider.descricao}</Subtitle>
          <ItemButton type="button" href="#hero">
            Confira nossas ofertas
          </ItemButton> */}
        </TextContainer>

        <img src={slider.img} height="80rem" alt="Imagem" />
      </CarouselItemContainer>
    </CarouselContent>
  );
}
