import styled from "styled-components";
import { InfoProduto } from "../Produtos/styles";

export const ContainerProduto = styled.div`
  flex: 1;
  margin: 0.4rem;
  min-width: 17.5rem;
  height: 21.8rem;
  box-shadow: 5px 5px 5px 5px #f1f1f1;
  width: 18rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  //background-color: #010606;
  background-color: white;
  padding: 1.3rem;
  color: black;

  &:hover ${InfoProduto} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  max-width: 14rem;
  height: 16rem;
  border-radius: 2px;
  object-fit: cover;
`;

export const ImgBox = styled.div`
  width: 15rem;
  height: 9.37rem;
  position: relative;
  top: -60px;
  z-index: 1;
  border-radius: 0.7rem;
`;

export const ContainerCategoria = styled.div`
  //background-color: #1a1a1b;
  background-color: black;
  position: relative;
  max-width: 18.75rem;
  height: 18.25rem;
  margin: 2rem 0.5rem;
  padding: 1.3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s ease-in-out;
  border-radius: 0.7rem;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundDark};
  }

  /* height: 70vh; */
  /*
  &:hover {
    opacity: 0.8;
    height: 25rem;
  } */
`;

export const InfoCategorias = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.7rem;
  cursor: pointer;
`;

export const Titulo = styled.h2`
  color: ${({ theme }) => theme.textLight};
  font-weight: bold;
  margin-top: 50px;
`;