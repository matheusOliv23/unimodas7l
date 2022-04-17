import { Container, ContainerCategoria, ContainerImagens } from "./styles";
import CategoriaItem from "./CategoriaItem";
import SecaoTitulo from "../SecaoTitulo";
import Button from "../../styles/Button";

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
      <SecaoTitulo titulo="Nossos tipos de looks" />
      <ContainerImagens>
        {categorias.map((item, index) => (
          <CategoriaItem key={index} item={item} />
        ))}
      </ContainerImagens>
      <Button link="/produtos">Veja Mais</Button>
    </Container>
  );
}
