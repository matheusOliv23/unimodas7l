import Button from "../../styles/Button";
import { Subtitle } from "../FormasPagamento/styles";
import { AiOutlineHome } from "react-icons/ai";
import { Icon } from "@iconify/react";
import {
  Container,
  IconContainer,
  RegiaoIcon,
  RegioesCard,
  RegioesTitulo,
  RegioesWraper,
  Titulo2,
  WhatsButton,
} from "./styles";

const cidades = [
  "Cachoeira da Prata",
  "Capim Branco",
  "Jequitibá",
  "Matozinhos",
  "Santanas de Pirapamba",
  "Sete Lagoas",
];

function Regioes() {
  return (
    <Container>
      <div>
        <RegioesTitulo>Regiões para entrega</RegioesTitulo>
      </div>

      <RegioesWraper>
        {cidades.map((cidade, index) => (
          <RegioesCard key={index}>
            <IconContainer>
              <Icon icon="clarity:home-solid" />
            </IconContainer>

            <Titulo2>{cidade}</Titulo2>
          </RegioesCard>
        ))}
      </RegioesWraper>
      <Button link="/">Encomende já!</Button>
    </Container>
  );
}

export default Regioes;
