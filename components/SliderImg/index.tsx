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
import { useState } from "react";
import { sliderItems } from "./data";

function SliderImg() {
  const [slideIndex, setSlideIndex] = useState(0);

  function handleClick(direction: string) {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <AiOutlineArrowLeft />
      </Arrow>
      <Wrapper sliderIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slider key={item.id} bgColor={item.bgColor}>
            <ImgContainer>
              {/* <Image
            layout="responsive"
            width="80%"
            height="100%"
            src="/model3.jpeg"
          /> */}
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Titulo>{item.titulo}</Titulo>
              <Descricao>{item.descricao}</Descricao>
              <Button>FAÇA UM TOUR!</Button>
            </InfoContainer>
          </Slider>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <AiOutlineArrowRight />
      </Arrow>
    </Container>
  );
}

export default SliderImg;
