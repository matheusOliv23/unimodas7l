import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  background: #f9f9f9;
  height: 100vh;
  width: 100%;
  padding: 1.3rem;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  padding: 1.5rem;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

export const Column1 = styled.div``;

export const Column2 = styled.div``;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 48px;
  line-height: 1.2px;
  font-weight: 600;
  color: black;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1rem;
  line-height: 1.5rem;
  color: black;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-start;
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