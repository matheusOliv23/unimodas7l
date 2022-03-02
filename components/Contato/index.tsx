import SecaoTitulo from "../SecaoTitulo";
import { Container, Regioes } from "./styles";

function Contato() {
  return (
    <Container>
      <SecaoTitulo
        titulo="Entregamos na sua casa!"
        descricao="Nossas regiões disponíveis:"
      />
      <Regioes>
        <div>Sete Lagoas</div>
        <div>Sete Lagoas</div>
        <div>Sete Lagoas</div>
        <div>Sete Lagoas</div>
        <div>
          {" "}
          <img
            src="../assets/icons8-fiat-500.gif"
            alt="Gif de carro em movimento"
          />
        </div>
      </Regioes>
    </Container>
  );
}

export default Contato;
