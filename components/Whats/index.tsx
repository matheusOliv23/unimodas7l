import { Icon } from "@iconify/react";
import React from "react";
import { Container, ContainerWidget } from "./style";

export default function index() {
  return (
    <ContainerWidget>
      <span>
        Atendimento <br /> Whats
      </span>
      <Container>
        <a
          href="https://api.whatsapp.com/send/?phone=5531996662795&text&app_absent=0"
          target="_blank"
        >
          <Icon icon="logos:whatsapp" width={35} />
        </a>
      </Container>
    </ContainerWidget>
  );
}
