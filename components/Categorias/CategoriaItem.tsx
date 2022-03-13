import React from "react";
import {
  InfoCategorias,
  Titulo,
  Image,
  ContainerCategoria,
  ImgBox,
} from "./styles";

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
      <ImgBox>
        <Image src={item.img} />
      </ImgBox>
      <InfoCategorias>
        <Titulo>{item.titulo}</Titulo>
      </InfoCategorias>
    </ContainerCategoria>
  );
}
