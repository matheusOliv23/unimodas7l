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
              <TopLine>TopLine</TopLine>
              <Heading>Heading</Heading>
              <Subtitle>Subtitle</Subtitle>
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

export default Info;
