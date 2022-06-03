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
  nParcela: string;
  valorParcela: string;
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
      <div
        id="hero"
        style={{ color: "#062631", fontSize: "1.8rem", fontWeight: 500 }}
      >
        Confira aqui os nossos destaques da semana
      </div>
      <span style={{ color: "#062631", fontSize: "1.2rem" }}>
        <strong>Atenção!</strong> Consulte disponibilidade de tamanhos e cores
        pelo nosso <strong>canal de atendimento</strong>.
      </span>
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
                  Até <strong>{item.nParcela}x</strong> de{" "}
                  <strong>R$ {item.valorParcela}</strong>
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
