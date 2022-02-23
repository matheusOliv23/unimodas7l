import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import SliderImg from "../components/SliderImg";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";

interface ISlider {
  titulo: string;
  descricao: string;
  img: string;
}

interface SliderProps {
  sliders: ISlider[];
}

const Home: NextPage = ({ sliders }: SliderProps) => {
  return (
    <div>
      <Head>
        <title>Home | Unimodas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <SliderImg sliders={sliders} />
      <main className="container"></main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "slider-imagens")],
    { orderings: "[document.first_publication_date desc]" }
  );

  const sliders = projectResponse.results.map((slider) => ({
    id: slider.uid,
    titulo: slider.data.titulo,
    descricao: slider.data.descricao,
    img: slider.data.image.url,
  }));
  console.log(sliders);
  return {
    props: { sliders },
    revalidate: 86400, //conteúdo vai revalidar a cada 24h
  };
};
