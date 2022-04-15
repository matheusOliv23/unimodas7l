import { ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";
import { darken, lighten } from "polished";

interface ButtonProps {
  titulo: string;
  link: string;
  onClick?: any;
}

const ButtonContainer = styled.button`
  border-radius: 1rem;
  border: none;
  color: white;
  background: ${({ theme }) => theme.primary};
  white-space: nowrap;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  height: 3.5rem;
  display: inline-flex;
  align-items: center;
  padding: 0 2rem;
  border-radius: 0.25rem;
  font: 500 1rem "DM Sans", sans-serif;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    transition: all 0.3 ease-in-out;
    background: ${({ theme }) => lighten(0.1, theme.primary)};
  }
`;

export default function Button({ titulo, link, onClick }: ButtonProps) {
  return (
    <Link href={link}>
      <ButtonContainer onClick={onClick}>{titulo}</ButtonContainer>
    </Link>
  );
}
