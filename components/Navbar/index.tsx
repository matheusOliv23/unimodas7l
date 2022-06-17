import {
  Container,
  ContainerButton,
  Logo,
  MobileIcone,
  NavbarContainer,
  NavMenu,
} from "./styles";
import Navlink from "./Navlink";
import { FaBars } from "react-icons/fa";
import Button from "../../styles/Button";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  handleToggle: any;
}

function Navbar({ handleToggle }: NavbarProps) {
  return (
    <Container>
      <NavbarContainer>
        <Link href="/" passHref>
          <a>
            <Logo>UNIMODAS7L</Logo>
          </a>
        </Link>

        <MobileIcone onClick={handleToggle}>
          <FaBars />
        </MobileIcone>
        <NavMenu>
          <Navlink titulo="Home" rota="/" />
          {/* <Navlink titulo="Sobre nós" rota="/sobre" /> */}
          <Navlink titulo="Looks" rota="/produtos" />
        </NavMenu>
      </NavbarContainer>
    </Container>
  );
}

export default Navbar;
