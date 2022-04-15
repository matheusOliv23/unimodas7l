import Button from "../../styles/Button";
import {
  ButtonWrap,
  Column1,
  Column2,
  Container,
  Heading,
  IconContainer,
  Img,
  ImgWrap,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./styles";
import { Icon } from "@iconify/react";

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
                <Button link="https://api.whatsapp.com/send/?phone=5531996662795&text&app_absent=0">
                  <a target="_blank">
                    <Icon width="1.8rem" icon="logos:whatsapp" />
                  </a>
                  Fale conosco
                </Button>
              </ButtonWrap>
            </TextWrapper>
          </Column1>

          <Column2>
            <IconContainer>
              <Icon icon="carbon:email" />
              <div>unimodas1538@gmail.com</div>
            </IconContainer>
            <IconContainer>
              <Icon icon="logos:whatsapp" />
              <div>unimodas</div>
            </IconContainer>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </Container>
  );
}

export default Info;
