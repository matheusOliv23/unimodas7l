import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background: #010606;
  margin-bottom: 8rem;
  margin-top: 8rem;
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
  color: ${({ theme }) => theme.textLight};
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(164, 164, 164, 0.1);
  max-height: 20rem;
  padding: 3.625rem 2rem;
  padding-right: 3rem;
  padding-left: 3rem;
  border-radius: 1.5rem;
  text-align: center;
  line-height: 1.8rem;
  font-size: 1.2rem;
  &:hover {
    background: ${({ theme }) => theme.backgroundDark};
    cursor: pointer;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  text-transform: uppercase;
`;