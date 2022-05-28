import React from "react";
import { CarouselContent } from "./styles";

export default function CarouselItem(
  { slider }: any,
  { stopSlide, startSlide }
) {
  return (
    <CarouselContent onMouseEnter={stopSlide} onMouseOut={startSlide}>
      <img src={slider.img} alt="Imagem" />
    </CarouselContent>
  );
}
