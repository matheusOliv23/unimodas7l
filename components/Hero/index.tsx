import React, { useState, useEffect, useRef } from "react";
import { setInterval } from "timers/promises";
import { CarouselImg } from "../Novidades/styles";
import CarouselIndicators from "./CarouselIndicators";
import CarouselItem from "./CarouselItem";
import { Carousel, CarouselContent, CarouselInner, Container } from "./styles";

interface ISlider {
  titulo: string;
  descricao: string;
  img: string;
}

interface SliderProps {
  sliders: ISlider[];
  interval?: number;
  indicators?: boolean;
  autoPlay?: boolean;
  width?: number | string;
}

export default function index({
  sliders,
  interval = 5000,
  indicators = false,
  autoPlay = true,
  width = "100%",
}: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideInterval = useRef<number | null>(null);

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : sliders.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    startSlideTimer();
    const index = currentSlide < sliders.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    if (autoPlay) {
      stopSlideTimer();
      slideInterval.current = window.setInterval(() => {
        setCurrentSlide((currentSlide) =>
          currentSlide < sliders.length - 1 ? currentSlide + 1 : 0
        );
      }, interval);
    }
  };

  const stopSlideTimer = () => {
    if (autoPlay && slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  return (
    <Container>
      <Carousel style={{ maxWidth: width }}>
        <CarouselInner
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          {sliders.map((slide, index) => (
            <CarouselItem
              key={index}
              startSlide={startSlideTimer}
              stopSlide={stopSlideTimer}
              slider={slide}
            />
          ))}
        </CarouselInner>
        {indicators && (
          <CarouselIndicators
            switchIndex={switchIndex}
            sliders={sliders}
            currentIndex={currentSlide}
          />
        )}
      </Carousel>
    </Container>
  );
}
