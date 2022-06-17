import styled from "styled-components";

export const Container = styled.div`
  border-radius: 50%;
`;

export const ContainerWidget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  position: fixed;
  right: 4%;
  bottom: 5%;
  z-index: 5;
  cursor: pointer;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  span {
    text-align: center;
  }
`;
