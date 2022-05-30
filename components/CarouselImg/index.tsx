import React, { useState } from "react";
import { Container, ContainerDots, Dot, Img, Slider } from "./style";

interface ISlider {
  titulo: string;
  descricao: string;
  img: string;
}

interface SliderProps {
  sliders: ISlider[];
}

export default function index({ sliders }: SliderProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  function handleClick(direction: string) {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <Container>
      {sliders.map((item, index) => (
        <Slider key={index}>
          <Img src={item.img} />
          teste teste
        </Slider>
      ))}
    </Container>
  );
}
