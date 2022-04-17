import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  text-decoration: none;

  bottom: 0;

  background-color: ${({ theme }) => theme.backgroundDark};
  color: #fafafa;
`;

export const ContainerLogo = styled.footer`
  background-color: ${({ theme }) => theme.backgroundDark};
  color: #fafafa;
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
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;
