import styled from "styled-components";

export const ContainerFormas = styled.div`
  //background: ${({ theme }) => theme.backgroundDark};
  background: white;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 1rem;
  margin-bottom: 2rem;

  padding-top: 6rem;
  padding-bottom: 6rem;
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
  //color: ${({ theme }) => theme.textLight};
  color: black;
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(164, 164, 164, 0.1);
  height: 17rem;
  width: 17rem;
  padding: 3.625rem 2rem;
  padding-right: 3rem;
  padding-left: 3rem;
  border-radius: 1.5rem;
  text-align: center;

  &:hover {
    background: ${({ theme }) => theme.backgroundDark};
    color: white;
    cursor: pointer;
  }
`;

export const Titulo = styled.h1`
  color: ${({ theme }) => theme.textLight};
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.1rem;
  text-align: center;
  /* margin-bottom: 0.75rem; */
`;

export const IconContainer = styled.div`
  display: block;
  margin-bottom: 1.5rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.primary};
`;
