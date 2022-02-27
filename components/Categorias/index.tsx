import { Container, ContainerCategoria } from "./styles";
import CategoriaItem from "./CategoriaItem";

interface ICategorias {
  titulo: string;
  img: string;
}

interface CategoriasProp {
  categorias: ICategorias[];
}

export default function Categorias({ categorias }: CategoriasProp) {
  console.log(categorias);
  return (
    <Container>
      {categorias.map((item, index) => (
        <CategoriaItem key={index} item={item} />
      ))}
    </Container>
  );
}
