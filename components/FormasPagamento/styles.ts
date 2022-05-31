import styled from "styled-components";

export const ContainerFormas = styled.div`
  //background: ${({ theme }) => theme.backgroundDark};
  background-color: #e1e1e1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 1rem;
  padding-top: 2.5rem;
  padding-bottom: 3rem;
`;

export const ContainerTitulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  /* 
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  } */
`;

export const Card = styled.div`
  color: ${({ theme }) => theme.textLight};
  //color: black;
  //border-bottom: 2px solid ${({ theme }) => theme.primary};
  border-bottom: purple;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //background: rgba(164, 164, 164, 0.1);
  //background-color: black;
  height: 17rem;
  width: 17rem;
  padding: 3.625rem 2rem;
  padding-right: 3rem;
  padding-left: 3rem;
  border-radius: 50%;
  text-align: center;

  background: #1a1a1b;
  /* 
  &:hover {
    background: ${({ theme }) => theme.backgroundDark};
    color: white;
    cursor: pointer;
  } */
`;

export const Titulo = styled.h1`
  //color: ${({ theme }) => theme.textLight};
  color: black;
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  /* margin-bottom: 0.75rem; */
`;

export const IconContainer = styled.div`
  display: block;
  margin-bottom: 1.5rem;
  font-size: 3rem;
  color: #30d5c8;
  //color: ${({ theme }) => theme.primary};
`;
