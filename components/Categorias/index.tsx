import { Container, ContainerCategoria, ContainerImagens } from "./styles";
import CategoriaItem from "./CategoriaItem";
import SecaoTitulo from "../SecaoTitulo";

interface ICategorias {
  titulo: string;
  img: string;
}

interface CategoriasProp {
  categorias: ICategorias[];
}

export default function Categorias({ categorias }: CategoriasProp) {
  return (
    <Container>
      <SecaoTitulo titulo="Nossas categorias" />
      <ContainerImagens>
        {categorias.map((item, index) => (
          <CategoriaItem key={index} item={item} />
        ))}
      </ContainerImagens>
    </Container>
  );
}
