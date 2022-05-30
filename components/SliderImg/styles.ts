import { lighten } from "polished";
import styled from "styled-components";

interface DirectionProps {
  direction?: string;
}

interface ImgProps {
  imgUrl?: string;
}

interface WrapperProps {
  sliderIndex: number;
}

interface SlideProps {
  bgColor?: string;
}

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background: transparent;
  overflow: hidden;
  color: ${({ theme }) => theme.textSlider};
  //background-color: ${({ theme }) => theme.backgroundDark};

  background-color: white;
  /* margin-top: -5rem;

  @media (max-width: 480px) {
    margin-top: -5rem;
  } */
`;

export const Arrow = styled.div<DirectionProps>`
  width: 3.125rem;
  height: 3.125rem;
  background-color: ${({ theme }) => theme.backgroundDark};
  color: ${({ theme }) => theme.primary};
  font-size: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;

  position: absolute;
  top: 50%;

  cursor: pointer;

  right: ${(props) => props.direction === "right" && "20px"};
  left: ${(props) => props.direction === "left" && "20px"};

  &:hover {
    color: ${({ theme }) => lighten(0.3, theme.primary)};
  }
`;

export const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
  display: flex;
  transition: all 1.5s ease;
`;

export const Slider = styled.div<SlideProps>`
  width: 100vw;
  max-height: 10rem;

  flex-direction: column;

  max-width: 90rem;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.backgroundSlider};
  /* 
  @media (min-width: 1200px) {
    padding-left: 8rem;
  } */
`;

export const ImgContainer = styled.div`
  object-fit: cover;
  max-width: 100%;
  width: 100%;
  height: 70vh;
  background-size: cover !important;
`;

export const Image = styled.img`
  max-height: 100%;
  width: 100%;
  height: 70vh;
  border-radius: 2px;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 3.125rem;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const Titulo = styled.h1`
  font-size: 1.8rem;
`;
export const Descricao = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  background-color: yellow;
  width: 100%;
  text-align: center;
`;
export const Button = styled.button`
  padding: 0.8rem;
  background: transparent;
  font-size: 1.5rem;
`;
