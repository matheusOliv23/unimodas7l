import { Container, Logo } from "./styles";
import Navlink from "./Navlink";

function Navbar() {
  return (
    <Container>
      <Logo>UNIMODAS</Logo>
      <ul>
        <Navlink titulo="Home" rota="/" />
        <Navlink titulo="Produtos" rota="/produtos" />
        <Navlink titulo="Fale conosco" rota="/" />
      </ul>
    </Container>
  );
}

export default Navbar;
