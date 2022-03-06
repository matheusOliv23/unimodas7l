import styled from 'styled-components';


export const Container = styled.section`
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  gap: 2rem;
  height: 100%;
`;

export const ContainerImagens = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const ImgBox = styled.div`
  width: 12.5rem;
  height: 9.37rem;
  position: relative;
  top: -60px;
  z-index: 1;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 2px;
  object-fit: cover;
`;
export const ContainerCategoria = styled.div`
  background-color: #fff;
  position: relative;
  max-width: 18.75rem;
  height: 16.25rem;
  margin: 2rem 0.5rem;
  padding: 1.3rem 1rem;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease-in-out;
  /* height: 70vh; */

  &:hover {
    opacity: 0.8;
    height: 20rem;
  }
`;

export const InfoCategorias = styled.div`
  /* width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
  cursor: pointer;
`;

export const Titulo = styled.h1`
  color: #fafafa;
`;