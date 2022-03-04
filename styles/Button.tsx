import { ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";
import { darken, lighten } from "polished";

interface ButtonProps {
  titulo: string;
  link: string;
}

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: none;
  color: black;
  background: ${({ theme }) => theme.buttonBackground};
  white-space: nowrap;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.3 ease-in-out;
    background: ${({ theme }) => lighten(0.1, theme.buttonBackground)};
  }
`;

export default function Button({ titulo, link }: ButtonProps) {
  return (
    <Link href={link}>
      <ButtonContainer>{titulo}</ButtonContainer>
    </Link>
  );
}
