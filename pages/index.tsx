import type { GetStaticProps } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Categorias from "../components/Categorias/index";
import SliderImg from "../components/SliderImg";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import Lancamentos from "../components/Lancamentos";
import Contato from "../components/Contato";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Regioes from "../components/Regioes";
import Crediario from "../components/Crediario";
import FormasPagamento from "../components/FormasPagamento";

interface ISlider {
  titulo: string;
  descricao: string;
  img: string;
}

interface ICategorias {
  titulo: string;
  img: string;
}

interface ComponentesProps {
  sliders: ISlider[];
  categorias: ICategorias[];
}

export default function Home({ sliders, categorias }: ComponentesProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar handleToggle={handleToggle} />
      <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
      <SliderImg sliders={sliders} />
      <Categorias categorias={categorias} />

      <FormasPagamento />
      <Regioes />
      <Info />
      <Footer />
    </div>
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
    props: { categorias, sliders },
    revalidate: 86400, //conteúdo vai revalidar a cada 24h
  };
};
