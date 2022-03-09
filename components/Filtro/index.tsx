import { Container, Filtro, FiltroContainer, Titulo } from "./styles";

export default function FiltroProdutos() {
  return (
    <Container>
      <Titulo>Roupas</Titulo>
      <FiltroContainer>
        <Filtro>filtro1</Filtro>
        <Filtro>filtro1</Filtro>
      </FiltroContainer>
    </Container>
  );
}
