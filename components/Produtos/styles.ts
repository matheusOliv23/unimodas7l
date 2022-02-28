import styled from "styled-components";

export const Container = styled.div`
  padding: 1.3rem;
  display: flex;
  flex-wrap: wrap;
`;

export const InfoProduto = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s ease;
`;

export const ContainerProduto = styled.div`
  flex: 1;
  margin: 0.4rem;
  min-width: 17.5rem;
  height: 21.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  position: relative;

  &:hover ${InfoProduto} {
    opacity: 1;
  }
`;

export const Circulo = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

export const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

export const Icone = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #f1f1f1;
    transform: scale(1.1);
  }
`;
