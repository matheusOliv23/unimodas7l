import { Container, ContainerCategoria, ContainerImagens } from "./styles";
import CategoriaItem from "./CategoriaItem";
import SecaoTitulo from "../SecaoTitulo";
import Button from "../../styles/Button";
import { ContainerTitulo, Titulo } from "../FormasPagamento/styles";

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
      <ContainerTitulo>
        <Titulo>Nossas Categorias</Titulo>
      </ContainerTitulo>
      <ContainerImagens>
        {categorias.map((item, index) => (
          <CategoriaItem key={index} item={item} />
        ))}
      </ContainerImagens>
      <Button link="/produtos">Veja Mais</Button>
    </Container>
  );
}
