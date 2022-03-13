import {
  Container,
  Filtro,
  FiltroContainer,
  FiltroTexto,
  Select,
  Titulo,
  Option,
} from "./styles";

export default function FiltroProdutos() {
  return (
    <Container>
      <Titulo>Roupas</Titulo>
      <FiltroContainer>
        <Filtro>
          <FiltroTexto>Filtro de Categorias:</FiltroTexto>
          <Select>
            <Option>Todos</Option>
            <Option>teste</Option>
            <Option>teste</Option>
            <Option>teste</Option>
          </Select>
        </Filtro>
        <Filtro>
          <Select>
            <Option selected>Recentes</Option>
          </Select>
        </Filtro>
      </FiltroContainer>
    </Container>
  );
}
