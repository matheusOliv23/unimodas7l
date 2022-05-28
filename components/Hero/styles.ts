import { lighten } from "polished";
import styled from "styled-components";

interface CarouselProps {
  isActive: boolean;
}

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d0d3d4;
`;

export const Carousel = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 1100px;
`;
export const CarouselInner = styled.div`
  white-space: nowrap;
  transition: ease 1s;
`;

export const CarouselContent = styled.div`
  display: inline-block;
  width: 100%;

  /* img {
    max-width: 20rem;
  } */
`;

export const CarouselIndicator = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5rem;
  z-index: 2;
`;

export const CarouselButtonItem = styled.button<CarouselProps>`
  width: 1rem;
  height: 1rem;
  border: none;
  background: #fff;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  margin: 0.2rem;
  cursor: pointer;
  border-radius: 50%;
  cursor: pointer;
`;