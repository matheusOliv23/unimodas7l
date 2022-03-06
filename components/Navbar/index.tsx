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

function Navbar({ handleToggle }: any) {
  return (
    <Container>
      <NavbarContainer>
        <Logo>UNIMODAS</Logo>
        <MobileIcone onClick={handleToggle}>
          <FaBars />
        </MobileIcone>
        <NavMenu>
          <Navlink titulo="Home" rota="/" />
          <Navlink titulo="Sobre nós" rota="/sobre" />
          <Navlink titulo="Produtos" rota="/produtos" />
        </NavMenu>
        <ContainerButton>
          <Button titulo="Crediário" link="/crediario" />
        </ContainerButton>
      </NavbarContainer>
    </Container>
  );
}

export default Navbar;
