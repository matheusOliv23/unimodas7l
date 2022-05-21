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

export default function index() {
  return (
    <Container>
      <ContainerProdutos>
        <CarouselImg>
          <Item>
            <Img>
              <img
                src="https://imgcentauro-a.akamaihd.net/230x230/93828502.jpg"
                alt="Tenis"
              />
            </Img>
            <Info>
              <Name>Tenis</Name>
              <OldPrice>30</OldPrice>
              <Price>17</Price>
            </Info>
          </Item>
        </CarouselImg>
      </ContainerProdutos>
    </Container>
  );
}
