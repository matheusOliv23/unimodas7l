import { ReactNode } from "react";

import { Card, Container, ContainerCards, Subtitle } from "./styles";

interface SobreProps {
  children: ReactNode;
}

export default function SobreNos() {
  return (
    <Container>
      <ContainerCards>
        <Card>
          <Subtitle>Missão</Subtitle>
          <div>
            A Unimodas7L tem como objetivo trazer para seus clientes qualidade,
            praticidade, bons preços e todas as tendências mais recentes do
            mercado.
          </div>
        </Card>
        <Card>
          <Subtitle>Visão</Subtitle>
          <div>
            Ser a empresa de maior credibilidade do mercado de movimentação de
            vestuário, oferecendo as melhores tendências para nossos clientes .
          </div>
        </Card>
        <Card>
          <Subtitle>Valores</Subtitle>
          <div>
            Prezamos pelo bom atendimento, qualidade, respeito, diversidade,
            compromisso, ética e satisfação dos nossos clientes.
          </div>
        </Card>
      </ContainerCards>
    </Container>
  );
}
