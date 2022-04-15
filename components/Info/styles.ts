import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  background: #f9f9f9;
  height: 100vh;
  width: 100%;

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
  justify-content: space-around;
  height: 100vh;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Column1 = styled.div``;

export const Column2 = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  @media screen and (max-width: 600px) {
    margin-bottom: 2rem;
  }
`;

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

export const Heading = styled.p`
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
  margin-top: 35px;
  margin-bottom: 35px;
  font-size: 1.3rem;
  line-height: 2.3rem;
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
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
`;

