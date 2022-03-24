import {
  Container,
  RegiaoIcon,
  RegioesCard,
  RegioesTitulo,
  RegioesWraper,
  Titulo2,
  WhatsButton,
} from "./styles";

const cidades = [{ nome: " Sete Lagoas" }, { nome: "Sete lagoas" }];

function Regioes() {
  return (
    <Container>
      <RegioesTitulo>Regiões disponíveis</RegioesTitulo>
      <RegioesWraper>
        {cidades.map((cidade, index) => (
          <RegioesCard key={index}>
            <Titulo2>{cidade.nome}</Titulo2>
            <RegiaoIcon />
          </RegioesCard>
        ))}
      </RegioesWraper>
      <WhatsButton>Encomende já</WhatsButton>
    </Container>
  );
}

export default Regioes;
