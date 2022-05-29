import styled from 'styled-components';


export const Container = styled.section`
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 4rem;
  padding-bottom: 4rem;

  gap: 4rem;
  height: auto;
  background: #d0d3d4;
  //background-color: ${({ theme }) => theme.backgroundDark2};
`;

export const ContainerImagens = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  gap: 1.5rem;
`;
export const ImgBox = styled.div`
  width: 12.5rem;
  height: 9.37rem;
  position: relative;
  top: -60px;
  z-index: 1;
  border-radius: 0.7rem;
`;

export const Image = styled.img`
  max-width: 14rem;
  height: 17.5rem;
  border-radius: 2px;
  object-fit: cover;
`;
export const ContainerCategoria = styled.div`
  //background-color: #062631;
  position: relative;
  max-width: 18.75rem;
  height: 18.25rem;
  margin: 2rem 0.5rem;
  padding: 1.3rem 1rem;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease-in-out;
  border-radius: 0.7rem;

  /* &:hover {
    background-color: ${({ theme }) => theme.backgroundDark};
  } */

  /* height: 70vh; */
  /*
  &:hover {
    opacity: 0.8;
    height: 25rem;
  } */
`;

export const InfoCategorias = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.7rem;
  cursor: pointer;
`;

export const Titulo = styled.h1`
  color: ${({ theme }) => theme.textLight};
  font-weight: bold;
  margin-top: 50px;
  z-index: 2;
  background-color: purple;
  padding: 0.5rem 1rem;
`;