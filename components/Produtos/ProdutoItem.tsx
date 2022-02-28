import React from "react";
import { Circulo, ContainerProduto, Icone, Image, InfoProduto } from "./styles";
import { AiOutlineZoomIn } from "react-icons/ai";

export default function ProdutoItem({ item }: any) {
  return (
    <ContainerProduto>
      <Circulo />
      <Image src={item.img} />
      <InfoProduto>
        <Icone>
          <AiOutlineZoomIn width="2rem" height="2rem" />
        </Icone>
      </InfoProduto>
    </ContainerProduto>
  );
}
