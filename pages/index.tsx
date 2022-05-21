import type { GetStaticProps } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Categorias from "../components/Categorias/index";
import SliderImg from "../components/SliderImg";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Regioes from "../components/Regioes";
import FormasPagamento from "../components/FormasPagamento";
import CarouselImg from "../components/CarouselImg";
import Hero from "../components/Hero";
import Novidades from "../components/Novidades";

interface ISlider {
  titulo: string;
  descricao: string;
  img: string;
}

interface ICategorias {
  titulo: string;
  img: string;
}


interface IRoupas {
  name: string;
  img: string;
  price: string;
  oldPrice: string;
}

interface ComponentesProps {
  sliders: ISlider[];
  categorias: ICategorias[];
  roupas: IRoupas[];
}

export default function Home({
  sliders,
  categorias,
  roupas,
}: ComponentesProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar handleToggle={handleToggle} />
      <main className="container">
        <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
        {/* <Hero sliders={sliders} /> */}
        <Novidades roupas={roupas} />
        {/* <CarouselImg sliders={sliders} /> */}
        {/* <SliderImg sliders={sliders} /> */}
        <Categorias categorias={categorias} />

        <FormasPagamento />
        <Regioes />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "slider-imagens")],
    { orderings: "[document.first_publication_date desc]" }
  );

  const categoriaResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "categorias")],
    { orderings: "[document.first_publication_date desc]" }
  );

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
  }));

  const sliders = projectResponse.results.map((slider) => ({
    id: slider.uid,
    titulo: slider.data.titulo,
    descricao: slider.data.descricao,
    img: slider.data.image.url,
  }));

  const categorias = categoriaResponse.results.map((categoria) => ({
    id: categoria.uid,
    titulo: categoria.data.titulo,
    img: categoria.data.img.url,
  }));

  return {
    props: { categorias, sliders, roupas },
    revalidate: 86400, //conteúdo vai revalidar a cada 24h
  };
};
