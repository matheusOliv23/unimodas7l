import SecaoTitulo from "../SecaoTitulo";
import {
  Container,
  ContainerDentro,
  Icone,
  Regiao,
  Regioes,
  Titulo,
} from "./styles";
import { ImHome } from "react-icons/im";
import { Button } from "../SliderImg/styles";

const cidades = [
  { cidade: "Sete Lagoas" },
  { cidade: "Sete Lagoas" },
  { cidade: "Sete Lagoas" },
];
function Contato() {
  return (
    <Container>
      <SecaoTitulo titulo="Temos crediário próprio!!" />
      <SecaoTitulo
        titulo="Entregamos na sua casa!"
        descricao="Regiões disponíveis:"
      />
      <ContainerDentro>
        <Regioes>
          {cidades.map((item, index) => (
            <Regiao key={index}>
              <Icone>
                <ImHome />
              </Icone>
              <Titulo>{item.cidade}</Titulo>
            </Regiao>
          ))}
        </Regioes>
      </ContainerDentro>
      <SecaoTitulo
        titulo="Fale com a gente!"
        descricao="Tire todas as suas dúvidas e faça a sua encomenda! "
      />
      <Button>Entrar em contato</Button>
    </Container>
  );
}

export default Contato;
