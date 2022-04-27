import React from "react";
import { ContainerProduto, Image } from "./styles";

interface ProdutoProps {
  nome: string;
  img: string;
  preco?: string;
}

export default function CardProdutos({ nome, img, preco }: ProdutoProps) {
  return (
    <ContainerProduto>
      <Image src={img} alt={nome} />
      <div>{nome}</div>
    </ContainerProduto>
  );
}
