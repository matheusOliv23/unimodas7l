import { useState } from "react";
import {
  Container,
  Filtro,
  FiltroContainer,
  FiltroTexto,
  Select,
  Titulo,
  Option,
} from "./styles";

interface IRoupas {
  titulo?: string;
  img: string;
}

export default function FiltroProdutos() {
  const [roupas, setRoupas] = useState<IRoupas>();
  return (
    <Container>
      <Titulo>Amostras de nossos produtos</Titulo>
      <FiltroContainer>
        <Filtro>
          <FiltroTexto>Filtro de Categorias:</FiltroTexto>
          <Select>
            <Option>Todos</Option>
            <Option>teste</Option>0<Option>teste</Option>
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
