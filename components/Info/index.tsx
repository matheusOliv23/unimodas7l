import Button from "../../styles/Button";
import {
  ButtonWrap,
  Column1,
  Column2,
  Container,
  Heading,
  Img,
  ImgWrap,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./styles";

function Info() {
  return (
    <Container>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <Heading>Entre em contato</Heading>
              <Subtitle>
                Nós da Unimodas7L teremos o maior prazer em tirar todas as suas
                dúvidas com um bom atendimento e ótimos preços!
              </Subtitle>
              <ButtonWrap>
                <Button titulo="Whatsapp" link="/" />
              </ButtonWrap>
            </TextWrapper>
          </Column1>

          <Column2>
            <ImgWrap>{/* <Img /> */}</ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </Container>
  );
}

export default Info;
