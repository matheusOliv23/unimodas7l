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
  background: #fff;
  overflow: hidden;
`;

export const Arrow = styled.div<DirectionProps>`
  width: 3.125rem;
  height: 3.125rem;
  background-color: #fff7f7;
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
`;

export const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
  display: flex;
  transition: all 1.5s ease;
`;

export const Slider = styled.div<SlideProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: ${(props) => props.bgColor};
`;

export const ImgContainer = styled.div`
  width: 20rem;
  height: 100%;
  flex: 1;
`;

export const Image = styled.img`
  height: 100%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 3.125rem;
`;

export const Titulo = styled.h1`
  font-size: 3.125rem;
`;
export const Descricao = styled.p`
  margin: 3rem 0rem;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding: 0.8rem;
  background: transparent;
  font-size: 1.5rem;
`;
