import React, { useState } from "react";
import FiltroProdutos from "../components/Filtro";
import Sidebar from "../components/Sidebar";
import Layout from "../Layout/layout";
import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";

interface ProdutosProps {
  roupas: string[];
}

export default function produtos({ roupas }) {
  console.log(roupas);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Layout handleToggle={handleToggle}>
      <Sidebar isOpen={isOpen} handleToggle={handleToggle} />

      <div
        style={{
          background: "#e1e1e1",
          padding: "2rem",
        }}
      >
        <FiltroProdutos roupas={roupas} />
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

  const roupas = roupasResponse.results.map((roupa) => ({
    id: roupa.uid,
    name: roupa.data.name,
    img: roupa.data.img.url,
    price: roupa.data.preco,
    oldPrice: roupa.data.precoantigo,
    nParcela: roupa.data.nparcela,
    valorParcela: roupa.data.valorparcela,
  }));

  return {
    props: { roupas },
    revalidate: 86400, //conteúdo vai revalidar a cada 24h
  };
};
