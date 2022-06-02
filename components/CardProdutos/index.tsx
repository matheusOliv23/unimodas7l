import React from "react";
import {
  CarouselImg,
  Img,
  Info,
  Installment,
  Item,
  Name,
  OldPrice,
  Price,
} from "../Novidades/styles";

interface ProdutoProps {
  nome: string;
  img: string;
  oldPrice?: string;
  price?: string;
  nParcela: string;
  valorParcela: string;
}

export default function CardProdutos({
  nome,
  img,
  oldPrice,
  price,
  nParcela,
  valorParcela,
}: ProdutoProps) {
  return (
    <CarouselImg>
      <Item>
        <Img>
          <img src={img} alt={nome} />
        </Img>
        <Info>
          <Name>{nome}</Name>
          <OldPrice>R$ {oldPrice}</OldPrice>
          <Price>Por R$ {price}</Price>

          <Installment>
            Até <strong>{nParcela}x</strong> de{" "}
            <strong>R$ {valorParcela}</strong>
          </Installment>
        </Info>
      </Item>
    </CarouselImg>
  );
}
