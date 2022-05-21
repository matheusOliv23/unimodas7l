import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e1e1e1;
`;

export const ContainerProdutos = styled.div`
  max-width: 75%;
`;

export const CarouselImg = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

export const Item = styled.div`
  background-color: white;
  margin: 10px;
  padding: 10px;
  width: 280px;
  border-radius: 1rem;
`;

export const Img = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;

  span {
    display: block;
    text-align: center;
    color: #1e1e1e;
    padding: 5px;
    border-radius: 10px;
  }
`;

export const Name = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
  color: blue !important;
`;

export const OldPrice = styled.span`
  font-size: 1rem;
  text-decoration: line-through;
  flex-grow: 1;
  color: #e81a5d !important ;
`;

export const Price = styled.span`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #ff7e3b;
`;
