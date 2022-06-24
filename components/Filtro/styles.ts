import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 7rem;
`;

export const FiltroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Filtro = styled.div`
  margin: 1.3rem;
  display: flex;
`;

export const ItensContainer = styled.span`
  max-width: 1400;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const FiltroTexto = styled.span`
  margin-right: 1rem;
  font-weight: 600;
  color: #062631;
  font-size: 1.3rem;
`;

export const Titulo = styled.h1`
  margin-top: 20rem;
  margin: 1.3rem;
  font-weight: 600;
  color: #062631;
`;

export const Select = styled.select`
  padding: 0.2rem;
  background: #062631;
  width: 8rem;
  height: 2rem;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 2px;

  .custom-select {
    position: relative;
    font-family: Arial;
  }

  .custom-select select {
    display: none; /*hide original SELECT element: */
  }

  .select-selected {
    background-color: DodgerBlue;
  }

  .select-items div,
  .select-selected {
    color: #ffffff;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
  }
`;
export const Option = styled.option`
  text-transform: uppercase;
  width: 8rem;
  height: 2rem;
  margin-top: 1rem;
  border-bottom: white;
  border-top: white;
  padding: 8px 16px;
`;

