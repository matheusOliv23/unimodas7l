import React, { useState } from "react";
import FiltroProdutos from "../components/Filtro";
import Sidebar from "../components/Sidebar";
import Layout from "../Layout/layout";
import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Whats from "../components/Whats";

interface ProdutosProps {
  roupas: string[];
}

export default function produtos({
  vestidos,
  blusas,
  calcas,
  shorts,
  bolsas,
  conjuntos,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Layout handleToggle={handleToggle}>
      <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
      <Whats />

      <div
        style={{
          background: "#e1e1e1",
          padding: "2rem",
        }}
      >
        <FiltroProdutos
          vestidos={vestidos}
          blusas={blusas}
          bolsas={bolsas}
          calcas={calcas}
          shorts={shorts}
          conjuntos={conjuntos}
        />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const roupasResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "roupas")],
    { orderings: "[document.first_publication_date desc]" }
  );

  const blusasResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "blusas")],
    { orderings: "[document.first_publication_date desc]" }
  );
  const calcasResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "calcas")],
    { orderings: "[document.first_publication_date desc]" }
  );
  const conjuntosResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "conjuntos")],
    { orderings: "[document.first_publication_date desc]" }
  );
  const shortsResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "shorts")],
    { orderings: "[document.first_publication_date desc]" }
  );

  const bolsasResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "bolsas")],
    { orderings: "[document.first_publication_date desc]" }
  );

  const vestidos = roupasResponse.results.map((roupa) => ({
    id: roupa.uid,
    name: roupa.data.name,
    img: roupa.data.img.url,
    price: roupa.data.preco,
    oldPrice: roupa.data.precoantigo,
    nParcela: roupa.data.nparcela,
    valorParcela: roupa.data.valorparcela,
  }));

  const blusas = blusasResponse.results.map((roupa) => ({
    id: roupa.uid,
    name: roupa.data.name,
    img: roupa.data.img.url,
    price: roupa.data.preco,
    oldPrice: roupa.data.precoantigo,
    nParcela: roupa.data.nparcela,
    valorParcela: roupa.data.valorparcela,
  }));

  const calcas = calcasResponse.results.map((roupa) => ({
    id: roupa.uid,
    name: roupa.data.name,
    img: roupa.data.img.url,
    price: roupa.data.preco,
    oldPrice: roupa.data.precoantigo,
    nParcela: roupa.data.nparcela,
    valorParcela: roupa.data.valorparcela,
  }));

  const shorts = shortsResponse.results.map((roupa) => ({
    id: roupa.uid,
    name: roupa.data.name,
    img: roupa.data.img.url,
    price: roupa.data.preco,
    oldPrice: roupa.data.precoantigo,
    nParcela: roupa.data.nparcela,
    valorParcela: roupa.data.valorparcela,
  }));

  const conjuntos = conjuntosResponse.results.map((roupa) => ({
    id: roupa.uid,
    name: roupa.data.name,
    img: roupa.data.img.url,
    price: roupa.data.preco,
    oldPrice: roupa.data.precoantigo,
    nParcela: roupa.data.nparcela,
    valorParcela: roupa.data.valorparcela,
  }));

  const bolsas = bolsasResponse.results.map((roupa) => ({
    id: roupa.uid,
    name: roupa.data.name,
    img: roupa.data.img.url,
    price: roupa.data.preco,
    oldPrice: roupa.data.precoantigo,
    nParcela: roupa.data.nparcela,
    valorParcela: roupa.data.valorparcela,
  }));

  return {
    props: { vestidos, blusas, calcas, conjuntos, bolsas, shorts },
    revalidate: 86400, //conteúdo vai revalidar a cada 24h
  };
};
