import {
  Container,
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
      <RegioesTitulo>Regiões disponíveis para entrega</RegioesTitulo>
      <RegioesWraper>
        {cidades.map((cidade, index) => (
          <RegioesCard key={index}>
            <Titulo2>{cidade}</Titulo2>
            {/* <RegiaoIcon /> */}
          </RegioesCard>
        ))}
      </RegioesWraper>
      <WhatsButton>Encomende já</WhatsButton>
    </Container>
  );
}

export default Regioes;
