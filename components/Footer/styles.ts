import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.backgroundDark};
  color: #fafafa;
  font-size: 0.7rem;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img``;

export const LogoFooter = styled.div`
  font-size: 2rem;
  text-align: center;
  color: #cd853f;
  border-top: 4px solid #cd853f;
  border-bottom: 4px solid #cd853f;
  margin: 0.5rem;
`;

export const FooterRodape = styled.div``;
