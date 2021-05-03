import styled from "styled-components";
import { Link } from "react-router-dom";


export const ContenedorLogo = styled(Link)`
  background-color: inherit;
`;

export const ContenedorEnlace = styled(Link)`
  background-color: inherit;
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContenedorTexto = styled.span`
  margin-left: 10px;

  &:hover {
    margin-bottom: -2px;
    border-bottom: 2px solid white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContenedorEnlaces = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ContenedorPerfil = styled.div`
  background-color: inherit;
  display: flex;
  width: auto;
`;

export const ContenedorPerfilTexto = styled.span`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ContenedorPerfilImagen = styled.div`
  height: 40px;
  width: 40px;
  background-color: green;
  margin-left: 20px;
`;

export const ContenedorImg = styled.div`
  background-color: inherit;
  display: inline-block;
`;

export const ContenedorEnlacesLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  background-color: inherit;
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 992px) {
    width: 70%;
  }
`;

export const ContenedorNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  height: 72px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  transition-timing-function: ease-in;
  transition: all 0.7s;
  background-color: #141414;
  ${({ show }) =>
    show &&
    `
    background-color: black;
  `}
`;
