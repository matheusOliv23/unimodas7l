import React from "react";
import { InfoCategorias, Titulo, Image, ContainerCategoria } from "./styles";

interface ICategorias {
  titulo: string;
  img: string;
}

interface CategoriasProp {
  categorias: ICategorias[];
}

export default function CategoriaItem({ item }: any) {
  return (
    <ContainerCategoria>
      <Image src={item.img} />
      <InfoCategorias>
        <Titulo>{item.titulo}</Titulo>
      </InfoCategorias>
    </ContainerCategoria>
  );
}
