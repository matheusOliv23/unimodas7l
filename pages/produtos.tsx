import Head from "next/head";
import React, { useState } from "react";
import FiltroProdutos from "../components/Filtro";
import Filtro from "../components/Filtro";
import Footer from "../components/Footer";
import Lancamentos from "../components/Lancamentos";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Layout from "../Layout/layout";

export default function produtos() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Layout handleToggle={handleToggle}>
      <Sidebar isOpen={isOpen} handleToggle={handleToggle} />

      <FiltroProdutos />
    </Layout>
  );
}
