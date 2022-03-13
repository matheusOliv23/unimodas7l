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
} from "./styles";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import Button from "../../styles/Button";

interface ISlider {
  titulo: string;
  descricao: string;
  img: string;
}

interface SliderProps {
  sliders: ISlider[];
}

function SliderImg({ sliders }: SliderProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  console.log(sliders);

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
        {sliders.map((item, index) => (
          <Slider key={index}>
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
              <Button titulo="FAÇA UM TOUR" link="/" />
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
