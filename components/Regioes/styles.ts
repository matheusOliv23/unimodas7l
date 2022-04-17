import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  background: #010606;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 1rem;

  padding-top: 6rem;
  padding-bottom: 6rem;
`;

export const RegioesWraper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1rem;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const RegioesCard = styled.div`
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(164, 164, 164, 0.1);
  border: 1px solid #cccccc;
  height: 8rem;
  padding: 3.625rem 2rem;
  padding-right: 3rem;
  padding-left: 3rem;
  border-radius: 1.5rem;
  text-align: center;
  color: white;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const RegiaoIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const RegioesTitulo = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Titulo2 = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 0.625rem;
`;

export const WhatsButton = styled.button`
  margin-top: 2.2rem;
  margin-bottom: 2.2rem;
  padding: 1.2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #01bf71;

  &:hover {
    transition: all 0.5 ease-in-out;
    background: ${({ theme }) => lighten(0.1, theme.buttonBackground)};
  }
`;

export const RegioaoP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ImgWrap = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: black;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
