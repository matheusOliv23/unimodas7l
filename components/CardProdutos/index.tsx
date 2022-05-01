import React from "react";
import {
  ContainerCategoria,
  ContainerProduto,
  Image,
  ImgBox,
  InfoCategorias,
  Titulo,
} from "./styles";

interface ProdutoProps {
  nome: string;
  img: string;
  preco?: string;
}

export default function CardProdutos({ nome, img, preco }: ProdutoProps) {
  return (
    <ContainerCategoria>
      <ImgBox>
        <Image src={img} />
      </ImgBox>
      <InfoCategorias>
        <Titulo>{nome}</Titulo>
        <div>De 20,99 para 80,90</div>
      </InfoCategorias>
    </ContainerCategoria>
  );
}
