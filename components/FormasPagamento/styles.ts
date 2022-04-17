import styled from "styled-components";

export const ContainerFormas = styled.div`
  background: rgba(164, 164, 164, 0.05);
  height: auto;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const ContainerTitulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(164, 164, 164, 0.1);
  border: 1px solid #cccccc;
  height: 17rem;
  padding: 3.625rem 2rem;
  padding-right: 3rem;
  padding-left: 3rem;
  border-radius: 1.5rem;
  text-align: center;
`;

export const Titulo = styled.h1`
  color: black;
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  /* margin-bottom: 0.75rem; */
`;

export const IconContainer = styled.div`
  display: block;
  margin-bottom: 1.5rem;
  font-size: 5rem;
  color: ${({ theme }) => theme.primary};
`;
