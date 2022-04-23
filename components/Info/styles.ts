import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.backgroundDark};
  color: ${({ theme }) => theme.textLight};
  width: 60rem;

  @media screen and (max-width: 500px) {
    text-align: center;
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

  @media screen and (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Column2 = styled.div`
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

  @media screen and (max-width: 850px) {
    text-align: center;
  }
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
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 850px) {
    justify-content: center;
  }
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

