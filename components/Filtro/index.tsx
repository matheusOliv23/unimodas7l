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
  vestidos: IRoupas[];
  blusas: IRoupas[];
  bolsas: IRoupas[];
  calcas: IRoupas[];
  shorts: IRoupas[];
  conjuntos: IRoupas[];
}

export default function FiltroProdutos({
  vestidos,
  blusas,
  bolsas,
  calcas,
  shorts,
  conjuntos,
}: Props) {
  const [filterResults, setFilterResults] = useState("Blusas");

  //console.log(vestidos, blusas, bolsas, calcas, shorts, conjuntos);
  function SearchFilter() {
    switch (filterResults) {
      case "Blusas":
        const blusasFiltradas = blusas.map((roupa, index) => (
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
        return blusasFiltradas;
      case "Bolsas":
        const bolsasFiltradas = bolsas.map((roupa, index) => (
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
        return bolsasFiltradas;
      case "Calças":
        const calcasFiltradas = calcas.map((roupa, index) => (
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
        return calcasFiltradas;

      case "Conjuntos":
        const conjuntosFiltrados = conjuntos.map((roupa, index) => (
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
        return conjuntosFiltrados;
      case "Vestidos":
        const vestidosFiltrados = vestidos.map((roupa, index) => (
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
        return vestidosFiltrados;
      case "Shorts":
        const shortsFiltrados = shorts.map((roupa, index) => (
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
        return shortsFiltrados;
      default:
        console.log("nada aqui");
    }
  }

  const options = [
    { value: "Blusas", label: "Blusas" },
    { value: "Bolsas", label: "Bolsas" },
    { value: "Calças", label: "Calças" },
    { value: "Conjuntos", label: "Conjuntos" },
    { value: "Vestidos", label: "Vestidos" },
    { value: "Shorts", label: "Shorts" },
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
            {options.map((option, index) => (
              <Option key={index} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Filtro>
      </FiltroContainer>

      <span style={{ color: "#062631", fontSize: "1.2rem" }}>
        Consulte disponibilidade de tamanhos e cores pelo nosso{" "}
        <strong>canal de atendimento</strong>.
      </span>
      <ItensContainer>{SearchFilter()}</ItensContainer>
    </Container>
  );
}
