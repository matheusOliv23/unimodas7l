import React from "react";
import { Container, Descricao, ImgContainer, Slider, Image } from "./styles";

interface ISlider {
  titulo: string;
  descricao: string;
  img: string;
}

interface SliderProps {
  sliders: ISlider[];
}

export default function index({ sliders }: SliderProps) {
  return (
    <Container>
      {sliders.map((item, index) => (
        <Slider key={index}>
          <Descricao>{item.descricao}</Descricao>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          {/* <InfoContainer>
              <Titulo>{item.titulo}</Titulo>
              <Descricao>{item.descricao}</Descricao>
              <Button link="/">CONFIRA</Button>
            </InfoContainer> */}
        </Slider>
      ))}
    </Container>
  );
}
