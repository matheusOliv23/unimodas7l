import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  width: 100%;
  text-decoration: none;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;

  bottom: 0;
  background: #d0d3d4;
  //background-color: ${({ theme }) => theme.backgroundDark};
  color: black;

  /* @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  } */
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 600px) {
    text-align: center;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
  }
`;

export const Titulo = styled.h1`
  font-weight: 700;
  font-size: 1.3rem;
  text-align: start;
  color: #062631;

  @media (max-width: 600px) {
    text-align: center;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
  }
`;

export const ContainerLogo = styled.footer`
  background-color: ${({ theme }) => theme.backgroundDark};
  font-size: 0.7rem;
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoFooter = styled.div`
  font-size: 2rem;
  text-align: center;
  color: #cd853f;
  border-top: 4px solid #cd853f;
  border-bottom: 4px solid #cd853f;
  margin: 0.5rem;
`;

export const IconFooter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: #062631;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  color: black;
  a {
    color: black;
  }
`;
