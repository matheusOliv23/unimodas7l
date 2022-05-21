import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e1e1e1;
`;

export const ContainerProdutos = styled.div`
  max-width: 100vw;

  /* @media (min-width: 500px) {
    max-width: 90vw;
  }

  @media (min-width: 1200px) {
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
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.625rem 0;
  color: blue !important;
`;

export const OldPrice = styled.span`
  font-size: 1rem;
  text-decoration: line-through;
  flex-grow: 1;
  color: #e81a5d !important ;
`;

export const Price = styled.span`
  margin-top: 0.625rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #ff7e3b;
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
