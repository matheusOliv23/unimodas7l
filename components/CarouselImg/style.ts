import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 700px;
  margin: 100px auto 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  color: black;
  background-color: transparent;

  @media screen and (max-width: 700px) {
    margin: 100px 10px 0;
  }
`;

export const Slider = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  transition: opacity ease-in-out 0.4s;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContainerDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #f1f1f1;
  margin: 0 5px;
  background: black;
`;
