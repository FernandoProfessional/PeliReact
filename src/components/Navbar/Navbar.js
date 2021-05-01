import React from "react";
import { Logo } from "./icons/Logo";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import MovieIcon from "@material-ui/icons/Movie";
import { useEffect } from "react";
import { useState } from "react";
import {ContenedorLogo} from "./style/NavbarStyle"
import {ContenedorEnlace} from "./style/NavbarStyle"
import {ContenedorTexto} from "./style/NavbarStyle"
import {ContenedorEnlaces} from "./style/NavbarStyle"
import {ContenedorPerfil} from "./style/NavbarStyle"
import {ContenedorPerfilTexto} from "./style/NavbarStyle"
import {ContenedorPerfilImagen} from "./style/NavbarStyle"
import {ContenedorImg} from "./style/NavbarStyle"
import {ContenedorEnlacesLogo} from "./style/NavbarStyle"
import {ContenedorNavbar} from "./style/NavbarStyle"


/* 
sm: 576px,
md: 768px,
lg: 992px,
xl: 1200px,
xxl: 1400px 
*/
/* 
const ContenedorLogo = styled(Link)`
  background-color: inherit;
`;

const ContenedorEnlace = styled(Link)`
  background-color: inherit;
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content:center;
  align-items: center;
`;
const ContenedorTexto = styled.span`
  margin-left:10px;

  &:hover{
    margin-bottom:-2px;
    border-bottom: 2px solid red;
  }
  @media (max-width: 768px) {
      display: none;
  }
`

const ContenedorEnlaces = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ContenedorPerfil = styled.div`
  background-color: inherit;
  display: flex;
  width:  auto;
`;

const ContenedorPerfilTexto = styled.span`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      display: none;
  }
`;
const ContenedorPerfilImagen = styled.div`
  height:40px;
  width:40px;
  background-color: green;
  margin-left: 20px;
`

const ContenedorImg = styled.div`
  background-color: inherit;
  display: inline-block;
`;

const ContenedorEnlacesLogo = styled.div`
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

const ContenedorNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding-left:20px;
  padding-right: 20px;
  height:72px;
  position:fixed;
  top:0;
  width:100%;
  z-index: 10;
  transition-timing-function: ease-in;
  transition: all 0.7s;
  background-color: red;
  ${({ show }) => show && `
    background-color: blue;
  `}
`;
 */


export const Navbar = () => {
  const [show, setShow] = useState(false)
  
  const changeNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    }
    else 
      setShow(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", () =>
      {
        changeNavbar()
      }
    )
    return () => {
      window.removeEventListener("scroll",changeNavbar,true)
    }
  }, [])

  return (
    <nav>
      <ContenedorNavbar show={show}>
        <ContenedorEnlacesLogo>
          <ContenedorLogo exact="true" to="/">
            <ContenedorImg>
              <Logo />
            </ContenedorImg>
          </ContenedorLogo>

          <ContenedorEnlaces>
            <ContenedorEnlace exact="true" to="/">
              <HomeIcon />
              <ContenedorTexto>
                Home
              </ContenedorTexto>     
            </ContenedorEnlace>
            <ContenedorEnlace exact="true" to="/buscar">
              <SearchIcon />
              <ContenedorTexto>
                Buscar
              </ContenedorTexto>  
            </ContenedorEnlace>
            <ContenedorEnlace exact="true" to="/lista">
              <AddIcon />
              <ContenedorTexto>
                Mi Lista
              </ContenedorTexto>  
            </ContenedorEnlace>
            <ContenedorEnlace exact="true" to="/movie">
              <MovieIcon />
              <ContenedorTexto>
                Movie
              </ContenedorTexto>
            </ContenedorEnlace>
          </ContenedorEnlaces>
        </ContenedorEnlacesLogo>

        <ContenedorPerfil>
          <ContenedorPerfilTexto>
            JuanPineda
          </ContenedorPerfilTexto>
          <ContenedorPerfilImagen>
          </ContenedorPerfilImagen>
        </ContenedorPerfil>
      </ContenedorNavbar>
    </nav>
  );
};
