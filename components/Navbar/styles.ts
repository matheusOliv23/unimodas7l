import { lighten } from "polished";
import styled from "styled-components";

interface NavlinkProps {
  isActive: boolean;
}

export const Container = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 4rem;
  padding: 1rem;
  position: fixed;
  z-index: 3;

  border-bottom: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 467px) {
    flex-direction: column;
    gap: 1rem;
  }

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
    font-size: 1.1rem;
  }
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  color: #fb8c00;
  border-top: 2px solid ${({ theme }) => theme.border};
  border-bottom: 4px solid ${({ theme }) => theme.border};
`;

export const NavlinkContainer = styled.li<NavlinkProps>`
  a {
    text-transform: uppercase;
    color: ${(props) =>
      props.isActive
        ? props.theme.primary
        : props.theme
            .primary}; //muda a cor do link caso ele esteja ativo ou não

    &:hover {
      color: ${(props) =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(
              0.2,
              props.theme.primary
            )}; // muda o hover caso o link esteja ativo ou não
    }
  }
`;
