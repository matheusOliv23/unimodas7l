import React, { useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import {
  Buttons,
  CarouselImg,
  Container,
  ContainerProdutos,
  Img,
  Info,
  Installment,
  Item,
  Name,
  OldPrice,
  Price,
} from "./styles";

interface IRoupas {
  name: string;
  img: string;
  price: string;
  oldPrice: string;
}

interface ComponentProps {
  roupas: IRoupas[];
}

export default function index({ roupas }: ComponentProps) {
  const carousel = useRef(null);

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth + 100;
  };
  const handleRightClick = (e: any) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth + 100;
  };
  return (
    <Container>
      <div style={{ color: "black", fontSize: "1.4rem" }}>
        Veja nossas melhores ofertas aqui
      </div>
      <ContainerProdutos>
        <CarouselImg ref={carousel}>
          {roupas.map((item, index) => (
            <Item key={index}>
              <Img>
                <img src={item.img} alt={item.name} />
              </Img>
              <Info>
                <Name>{item.name}</Name>
                <OldPrice>R$ {item.oldPrice}</OldPrice>
                <Price>Por R$ {item.price}</Price>
                <Installment>
                  Até <strong>12x</strong> de <strong>R$ 99,90</strong>
                </Installment>
              </Info>
            </Item>
          ))}
        </CarouselImg>
        <Buttons>
          <button onClick={handleLeftClick}>
            <img src="/static/right_icon.png" alt="Seta esquerda" />
          </button>
          <button onClick={handleRightClick}>
            <img src="/static/right_icon.png" alt="Seta direita" />
          </button>
        </Buttons>
      </ContainerProdutos>
    </Container>
  );
}
