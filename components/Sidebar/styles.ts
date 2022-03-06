import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

interface SidebarProps {
  isOpen: boolean;
}

export const Container = styled.aside<SidebarProps>`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  right: 0;
  transition: 0.3s ease-in-out;
  /* top: 0; */
  /* opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}; */
  top: ${(props) => (props.isOpen ? "0" : "-100%")};
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 4rem);
  text-align: center;

  font-size: 1.3rem;
`;
export const SidebarButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconeFechamento = styled(FaTimes)`
  color: #fff;
`;
export const Icone = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;
