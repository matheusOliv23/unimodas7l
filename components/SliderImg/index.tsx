import {
  Arrow,
  Container,
  ImgContainer,
  InfoContainer,
  Wrapper,
  Image,
  Slider,
  Titulo,
  Descricao,
  Button,
} from "./styles";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import picture from "../assets/model.jpeg";

function SliderImg() {
  return (
    <Container>
      <Arrow direction="left">
        <AiOutlineArrowLeft />
      </Arrow>
      <Wrapper>
        <Slider>
          <ImgContainer>
            {/* <Image
            layout="responsive"
            width="80%"
            height="100%"
            src="/model3.jpeg"
          /> */}
            <Image src="/model5semfundo.png" />
          </ImgContainer>
          <InfoContainer>
            <Titulo>OFERTAS ESPECIAIS !!</Titulo>
            <Descricao>Dê uma olhada em algumas de nossas peças !</Descricao>
            <Button>FAÇA UM TOUR!</Button>
          </InfoContainer>
        </Slider>

        <InfoContainer></InfoContainer>
      </Wrapper>
      <Arrow direction="right">
        <AiOutlineArrowRight />
      </Arrow>
    </Container>
  );
}

export default SliderImg;
