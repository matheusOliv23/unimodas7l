import { useState } from "react";
import Button from "../../styles/Button";
import Navlink from "../Navbar/Navlink";

import {
  Container,
  Icone,
  IconeFechamento,
  SidebarButton,
  SidebarMenu,
  SidebarWrapper,
} from "./styles";

function Sidebar({ isOpen, handleToggle }: any) {
  return (
    <Container isOpen={isOpen} onClick={handleToggle}>
      <Icone onClick={handleToggle}>
        <IconeFechamento />
      </Icone>
      <SidebarWrapper>
        <SidebarMenu>
          <Navlink titulo="Home" rota="/" />
          <Navlink titulo="Sobre nós" rota="/sobre" />
          <Navlink titulo="Produtos" rota="/produtos" />
        </SidebarMenu>
        <SidebarButton>
          <Button titulo="Crediário" link="/crediario" />
        </SidebarButton>
      </SidebarWrapper>
    </Container>
  );
}

export default Sidebar;
