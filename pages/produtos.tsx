import React, { useState } from "react";
import FiltroProdutos from "../components/Filtro";
import Filtro from "../components/Filtro";
import Footer from "../components/Footer";
import Lancamentos from "../components/Lancamentos";
import Navbar from "../components/Navbar";

export default function produtos() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* <Navbar handleToggle={handleToggle} /> */}
      <Footer />
      <FiltroProdutos />
      {/* <Lancamentos /> */}
      <main className="container"></main>
    </div>
  );
}
