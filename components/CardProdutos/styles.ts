import styled from "styled-components";
import { InfoProduto } from "../Produtos/styles";

export const ContainerProduto = styled.div`
  /* flex: 1;
  margin: 0.4rem;
  min-width: 17.5rem;
  height: 21.8rem; */
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
