import { lighten } from "polished";
import styled from "styled-components";

interface NavlinkProps {
  isActive: boolean;
}

export const Container = styled.nav`
  width: 100%;
  height: 5rem;
  /* margin-top: -5rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;
  position: sticky;

  //background-color: ${({ theme }) => theme.backgroundDark};
  background-color: #090a0f;
  /* border-bottom: 1px solid ${({ theme }) => theme.border}; */

  @media screen and (max-width: 960px) {
    transition: 0.5s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  z-index: 1;
  width: 100%;
  padding: 0 1.5rem;
  max-width: 1200px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: -1.4rem;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const MobileIcone = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    transform: translate(-100%, 60%);
  }
`;
export const ContainerButton = styled.div`
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
export const Logo = styled.div`
  font-size: 1.3rem;
  color: #fff;
  justify-self: flex-start;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  cursor: pointer;
  font-weight: bold;
  /* color: #fb8c00; */
  border-top: 2px solid ${({ theme }) => theme.border};
  border-bottom: 4px solid ${({ theme }) => theme.border};
`;

export const NavlinkContainer = styled.li<NavlinkProps>`
  padding: 0 1rem;
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.textNavbar};
    /* color: ${(props) =>
      props.isActive
        ? props.theme.primary
        : props.theme
            .primary}; //muda a cor do link caso ele esteja ativo ou não */
    border-bottom: 2px solid
      ${(props) => (props.isActive ? props.theme.primary : "black")};

    &:hover {
      color: ${(props) =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(
              0.2,
              props.theme.primary
            )}; // muda o hover caso o link esteja ativo ou não
      transition: 0.3s ease-in-out;
    }
  }
`;
