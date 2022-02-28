import Produtos from "../Produtos";
import SecaoTitulo from "../SecaoTitulo";

import { Container } from "./styles";

function Lancamentos() {
  return (
    <Container>
      <SecaoTitulo titulo="Lançamentos" />
      <Produtos />
    </Container>
  );
}

export default Lancamentos;
