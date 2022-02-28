import styled from 'styled-components';


export const Container = styled.section`
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
`;

export const ContainerImagens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContainerCategoria = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  &:hover {
    opacity: 0.8;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoCategorias = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`;

export const Titulo = styled.h1`
  color: #fafafa;
`;