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
import SimpleImageSlider from "react-simple-image-slider";
import { important } from "polished";

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

  function handleClick(direction: string) {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  const images = [{ url: "model5.jpeg" }, { url: "model6.jpeg" }];

  return (
    // <div>
    //   <Container>
    //     <ImgContainer>
    //       <SimpleImageSlider
    //         width="100%"
    //         height={800}
    //         images={images}
    //         showBullets={true}
    //         showNavs={true}
    //         autoPlay
    //         autoPlayDelay={4}
    //         bgColor="white"
    //       />
    //     </ImgContainer>
    //   </Container>
    // </div>
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <AiOutlineArrowLeft />
      </Arrow>
      <Wrapper sliderIndex={slideIndex}>
        {sliders.map((item, index) => (
          <Slider key={index}>
            <Descricao>{item.descricao}</Descricao>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <Descricao>{item.descricao}</Descricao>
            {/* <InfoContainer>
              <Titulo>{item.titulo}</Titulo>
              <Descricao>{item.descricao}</Descricao>
              <Button link="/">CONFIRA</Button>
            </InfoContainer> */}
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
