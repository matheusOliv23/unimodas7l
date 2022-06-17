import { lighten } from "polished";
import styled from "styled-components";

interface CarouselProps {
  isActive: boolean;
}

export const Container = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d0d3d4;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  background-image: linear-gradient(90deg, #062631 30px),
    linear-gradient(90deg, white 30px, #062631 30px);
  //linear-gradient(90deg, #062631 30px, white 30px);
  background-position: 0 0, 0 30px, 0 60px;
  background-repeat: repeat-x;
  background-size: 60px 30px, 60px 30px, 60px 30px;
`;

export const Carousel = styled.div`
  margin: 0 auto;
  overflow: hidden;
`;
export const CarouselInner = styled.div`
  white-space: nowrap;
  transition: ease 1s;

  @media (min-width: 1400px) {
    margin-left: -2rem;
  }
  @media (min-width: 1800px) {
    margin-left: -2rem;
  }
`;

export const CarouselContent = styled.div`
  display: inline-block;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  padding: 2rem;
  img {
    margin: 0 auto;
    max-width: 30rem;
    min-height: 40rem;
    max-height: 45rem;
    object-fit: cover;
    flex: 1;
  }
`;

export const CarouselIndicator = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5rem;
  z-index: 2;
  padding-bottom: 0.8rem;
  top: 85%;
`;

export const CarouselButtonItem = styled.button<CarouselProps>`
  width: 1rem;
  height: 1rem;
  border: none;
  background: ${(props) => (props.isActive ? "#b7081f" : "#fff")};
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  margin: 0.2rem;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.1rem;
`;

export const CarouselItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  min-height: 80vh;
  padding: 2rem;

  @media (min-width: 1500px) {
    padding-left: 12rem;
    margin-right: 28rem;
    border-radius: 8px;
    width: 1600px;
  }

  @media (min-width: 1700px) {
    width: 2000px;
  }

  @media (min-width: 1800px) {
    width: 2000px;
  }

  @media (min-width: 2100px) {
    width: 2100px;
  }

  @media (min-width: 2500px) {
    width: 2500px;
  }

  &:nth-child(-n + 2) {
    background: linear-gradient(to right, #7927b2, #fb3182);
  }
  &:nth-child(2n) {
    background-color: yellow;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

export const Title = styled.h1`
  color: #062631;
  letter-spacing: 5px;
  line-height: 2rem;
  font-family: "Montserrat" sans-serif;
  //font-size: 2.9rem;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-size: 90px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 40px;
  }

  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  max-width: 480px;
  height: 100%;
  text-transform: uppercase;
  line-height: 0.77;
`;
export const Subtitle = styled.div`
  background-color: #979a9a;
  color: #062631;
  padding: 0.5rem 1.5rem;
`;
export const ItemButton = styled.a`
  background-color: #b7081f;
  color: #ffff;
  display: block;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  border: none;
  font-size: 1.5rem;
`;
