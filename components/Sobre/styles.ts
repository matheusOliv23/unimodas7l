import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
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
  font-size: 1.3rem;
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
`;