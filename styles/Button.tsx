import { ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";
import { darken, lighten } from "polished";

interface ButtonProps {
  children: ReactNode;
  link: string;
  onClick?: any;
}

const ButtonContainer = styled.button`
  border-radius: 1rem;
  border: none;
  gap: 1rem;
  background-color: ${({ theme }) => theme.backgroundDark};
  border: 3px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  white-space: nowrap;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  height: 3.5rem;
  display: inline-flex;
  align-items: center;
  padding: 0 2rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    transition: all 0.3 ease-in-out;
    background: ${({ theme }) => theme.backgroundDark};
    color: ${({ theme }) => theme.textLight};
  }
`;

export default function Button({ children, link, onClick }: ButtonProps) {
  return (
    <Link href={link}>
      <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
    </Link>
  );
}
