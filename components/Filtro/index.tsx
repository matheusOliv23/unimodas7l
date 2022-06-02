import { useState } from "react";
import CardProdutos from "../CardProdutos";

import {
  Container,
  Filtro,
  FiltroContainer,
  FiltroTexto,
  Titulo,
  Select,
  Option,
  ItensContainer,
} from "./styles";

interface IRoupas {
  name: string;
  img: string;
  price?: string;
  oldPrice?: string;
  nParcela: string;
  valorParcela: string;
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
          <CardProdutos
            oldPrice={roupa.oldPrice}
            price={roupa.price}
            img={roupa.img}
            nome={roupa.name}
            nParcela={roupa.nParcela}
            valorParcela={roupa.valorParcela}
          />
        </div>
      ));
      return roupasFiltradas;
    } else if (filterResults === "Sapatos") {
      console.log("amo sapatos");
    }
  }

  const options = [
    { value: "Roupas", label: "Roupas" },
    { value: "Sapatos", label: "Sapatos" },
    { value: "Bolsas", label: "Bolsas" },
  ];
  return (
    <Container>
      <Titulo>Confira nossos Looks</Titulo>
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
      <ItensContainer>{SearchFilter()}</ItensContainer>
    </Container>
  );
}
