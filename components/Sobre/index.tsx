import { ReactNode } from "react";

import { Container } from "./styles";

interface SobreProps {
  children: ReactNode;
}

export default function SobreNos() {
  return (
    <Container>
      <h1>Onde estamos</h1>
      <p>Estamos situados no Shopping de Sete Lagoas em Minas Gerais</p>
      <p>Avenida Otávio Campelo Ribeiro nº 2801, Eldorado</p>
    </Container>
  );
}
