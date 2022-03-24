import Button from "../../styles/Button";
import SecaoTitulo from "../SecaoTitulo";
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

function Crediario() {
  return (
    <Container>
      <SecaoTitulo titulo="Formas de pagamento" />
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <Heading>Crediário próprio!</Heading>
              <Subtitle></Subtitle>
              <ButtonWrap>
                <Button titulo="Button" link="/" />
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

export default Crediario;
