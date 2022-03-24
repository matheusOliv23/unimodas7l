import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  background: #010606;
  height: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const RegioesWraper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1rem;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const RegioesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

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
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Titulo2 = styled.h1`
  color: black;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const WhatsButton = styled.button`
  margin-bottom: 35px;
  font-size: 1rem;
  color: #fff;
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
