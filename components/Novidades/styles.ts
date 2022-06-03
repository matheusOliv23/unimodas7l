import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e1e1e1;
  gap: 1.4rem;
`;

export const ContainerProdutos = styled.div`
  max-width: 100vw;

  /* @media (min-width: 1200px) {
    max-width: 75vw;
  } */
`;

export const CarouselImg = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  background-color: white;
  margin: 0.625rem;
  padding: 0.625rem;
  width: 17.5rem;
  border-radius: 1rem;
  flex: none;
`;

export const Img = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 20rem;
  }
`;

export const Info = styled.div`
  height: 8.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    text-align: center;
    color: #1e1e1e;
    padding: 0.3125rem;
    border-radius: 0.625rem;
  }
`;

export const Name = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.2rem 0;
  color: #000000 !important;
`;

export const OldPrice = styled.span`
  font-size: 1rem;
  text-decoration: line-through;
  flex-grow: 1;
  color: black !important ;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 700;
  background-color: #16141b;
  color: white !important;
`;

export const Installment = styled.span`
  color: black !important;
`;

export const Buttons = styled.div`
  width: 100%;
  text-align: center;

  button {
    background-color: transparent;
    border: none;
  }
  button:first-child img {
    transform: rotate(180deg);
  }
`;
