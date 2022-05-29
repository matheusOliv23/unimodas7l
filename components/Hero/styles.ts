import { lighten } from "polished";
import styled from "styled-components";

interface CarouselProps {
  isActive: boolean;
}

export const Container = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d0d3d4;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Carousel = styled.div`
  margin: 0 auto;
  overflow: hidden;
`;
export const CarouselInner = styled.div`
  white-space: nowrap;
  transition: ease 1s;

  @media (min-width: 1400px) {
    margin-left: 10%;
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
  top: 88%;
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
  cursor: pointer;
  padding: 0.1rem;
`;

export const CarouselItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;

  @media (min-width: 1400px) {
    // margin-left: 10%;
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
  letter-spacing: 1px;
  font-family: "Montserrat" sans-serif;
  font-size: 2.9rem;
  text-shadow: black 0.1em 0.1em 0.2em;
`;
export const Subtitle = styled.div`
  background-color: #979a9a;
  color: #062631;
  padding: 0.5rem 1.5rem;
`;
export const ItemButton = styled.button`
  background-color: #b7081f;
  color: #ffff;
  display: block;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  border: none;
`;