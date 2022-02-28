import { ReactNode } from "react";

import { Container } from "./styles";

interface TituloProps {
  titulo: string | ReactNode;
  descricao?: string | ReactNode;
}

export default function SecaoTitulo({ titulo, descricao }: TituloProps) {
  return (
    <Container>
      <h1>{titulo}</h1>
      {descricao && <h2>{descricao}</h2>}
    </Container>
  );
}
