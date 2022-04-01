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
    icon: <Icon icon="fa-solid:car" />,
    titulo: "Entregamos no conforto da sua casa!",
  },
  {
    icon: <Icon icon="fa-solid:money-check-alt" />,
    titulo: "Temos crediário próprio!",
  },
  {
    icon: <Icon icon="bi:credit-card-fill" />,
    titulo: "Cartões Cabal, Elo, Maestro, Master, Hiper, Visa, VR",
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
