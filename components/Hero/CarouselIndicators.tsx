import React from "react";
import { CarouselButtonItem, CarouselIndicator } from "./styles";
export default function CarouselIndicators({
  sliders,
  currentIndex,
  switchIndex,
}) {
  const isActive = true;

  return (
    <CarouselIndicator>
      {sliders.map((_, index) => (
        <CarouselButtonItem
          key={index}
          onClick={() => switchIndex(index)}
          isActive={currentIndex === index ? true : false}
        ></CarouselButtonItem>
      ))}
    </CarouselIndicator>
  );
}
