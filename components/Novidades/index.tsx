import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import {
  CarouselImg,
  Container,
  ContainerProdutos,
  Img,
  Info,
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
  return (
    <Container>
      <ContainerProdutos>
        <CarouselImg>
          {roupas.map((item, index) => (
            <Item key={index}>
              <Img>
                <img src={item.img} alt={item.name} />
              </Img>
              <Info>
                <Name>{item.name}</Name>
                <OldPrice>{item.oldPrice}</OldPrice>
                <Price>{item.price}</Price>
              </Info>
            </Item>
          ))}
        </CarouselImg>
      </ContainerProdutos>
    </Container>
  );
}
