import { ReactNode } from "react";

import { Card, Container, ContainerCards, Subtitle } from "./styles";

interface SobreProps {
  children: ReactNode;
}

export default function SobreNos() {
  return (
    <Container>
      <div>
        <h1>Onde estamos</h1>
        <p>Estamos situados no Shopping de Sete Lagoas em Minas Gerais</p>
        <p>Avenida Otávio Campelo Ribeiro nº 2801, Eldorado</p>
      </div>

      <ContainerCards>
        <Card>
          <Subtitle>Missão</Subtitle>
          <div>
            Ser a empresa de maior credibilidade do mercado de movimentação de
            materiais, oferecendo as melhores soluções aos nossos clientes.
          </div>
        </Card>
        <Card>
          <Subtitle>Visão</Subtitle>
          <div>
            Ser a empresa de maior credibilidade do mercado de movimentação de
            materiais, oferecendo as melhores soluções aos nossos clientes.
          </div>
        </Card>
        <Card>
          <Subtitle>Valores</Subtitle>
          <div>
            Ser a empresa de maior credibilidade do mercado de movimentação de
            materiais, oferecendo as melhores soluções aos nossos clientes.
          </div>
        </Card>
      </ContainerCards>
    </Container>
  );
}
