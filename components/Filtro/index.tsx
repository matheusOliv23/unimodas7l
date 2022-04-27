import { useState } from "react";
import CardProdutos from "../CardProdutos";
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

interface Props {
  roupas: IRoupas[];
}

export default function FiltroProdutos({ roupas }: Props) {
  const [filterResults, setFilterResults] = useState("Roupas");

  function SearchFilter() {
    if (filterResults === "Roupas") {
      const roupasFiltradas = roupas.map((roupa, index) => (
        <div key={index}>
          <CardProdutos img={roupa.img} nome={roupa.titulo} />
        </div>
      ));
      return roupasFiltradas;
    } else if (filterResults === "Sapatos") {
      console.log("amo sapatos");
    }
  }
  return (
    <Container>
      <Titulo>Amostras de nossos Looks</Titulo>
      <FiltroContainer>
        <Filtro>
          <FiltroTexto>Filtro de Categorias:</FiltroTexto>
          <Select
            value={filterResults}
            onChange={(e) => setFilterResults(e.target.value)}
          >
            <Option value="Roupas">Roupas</Option>
            <Option value="Sapatos">Sapatos</Option>
            <Option value="Bolsas">Bolsas</Option>
          </Select>
        </Filtro>
      </FiltroContainer>
      {SearchFilter()}
    </Container>
  );
}
