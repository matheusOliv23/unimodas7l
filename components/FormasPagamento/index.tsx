import React from "react";
import {
  Card,
  ContainerCards,
  ContainerFormas,
  ContainerTitulo,
  IconContainer,
  Subtitle,
  Titulo,
} from "./styles";
import { Icon } from "@iconify/react";

const services = [
  {
    icon: <Icon icon="emojione-v1:delivery-truck" />,
    titulo: "Entregamos no conforto da sua casa!",
  },
  {
    icon: <Icon icon="emojione:credit-card" />,
    titulo: "Parcelamos no cartão de crédito",
  },
  {
    icon: <Icon icon="logos:whatsapp" />,
    titulo: "Atendimento via Whatsapp",
  },
  {
    icon: <Icon icon="ic:outline-pix" />,
    titulo: "Aceitamos PIX!",
  },
];

export default function index() {
  return (
    <ContainerFormas>
      <ContainerTitulo>
        <Titulo>Serviços</Titulo>
      </ContainerTitulo>
      <ContainerCards>
        {services.map((card, index) => (
          <Card key={index}>
            <IconContainer>{card.icon}</IconContainer>

            <Subtitle>{card.titulo}</Subtitle>
          </Card>
        ))}
      </ContainerCards>
    </ContainerFormas>
  );
}
