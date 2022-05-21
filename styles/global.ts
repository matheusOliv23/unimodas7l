import { lighten } from "polished";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
       background-color: ${({ theme }) => theme.backgroundDark};
    }
  }
  body, html {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.textLight};   
    //background: ${({ theme }) => theme.backgroundDark};
  }
  body {
    font: 400 1rem 'Poppins', sans-serif;  
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;   
  }
  a {
    text-decoration: none;
    text-decoration-line: none;
  }
  .container {
    width: 100%;
    margin: 0 auto;   
    
    @media(min-width:2200px) {
      margin: 0 auto;
      max-width: 90rem;
    }  
    
  }
`;
