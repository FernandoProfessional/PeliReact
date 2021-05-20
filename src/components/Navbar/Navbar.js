import React, { useContext } from "react";
import { Logo } from "./icons/Logo";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import MovieIcon from "@material-ui/icons/Movie";
import { useEffect } from "react";
import { useState } from "react";
import {BotonLogOut, ContenedorLogo} from "./style/NavbarStyle"
import {ContenedorEnlace} from "./style/NavbarStyle"
import {ContenedorTexto} from "./style/NavbarStyle"
import {ContenedorEnlaces} from "./style/NavbarStyle"
import {ContenedorPerfil} from "./style/NavbarStyle"
import {ContenedorPerfilTexto} from "./style/NavbarStyle"
import {ContenedorPerfilImagen} from "./style/NavbarStyle"
import {ContenedorImg} from "./style/NavbarStyle"
import {ContenedorEnlacesLogo} from "./style/NavbarStyle"
import {ContenedorNavbar} from "./style/NavbarStyle"
import { AuthContext } from "../auth/AuthContext";
import { useHistory } from "react-router";


/* 
sm: 576px,
md: 768px,
lg: 992px,
xl: 1200px,
xxl: 1400px 
*/



export const Navbar = () => {

  const {user:{username}} = useContext(AuthContext);

  const [show, setShow] = useState(false)

  const history = useHistory()

  
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
      window.removeEventListener("scroll",changeNavbar)
    }
  }, [])

  const hadleLogOut = () => {
    history.replace('/index')
    localStorage.setItem('user',JSON.stringify({logged:false}))
  }

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
            <ContenedorEnlace exact="true" to="/home">
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
{/*             <ContenedorEnlace exact="true" to="/movie">
              <MovieIcon />
              <ContenedorTexto>
                Movie
              </ContenedorTexto>
            </ContenedorEnlace> */}
          </ContenedorEnlaces>
        </ContenedorEnlacesLogo>

        <ContenedorPerfil>
          <ContenedorPerfilTexto>
            {username}
          </ContenedorPerfilTexto>
          <ContenedorPerfilImagen>
            <BotonLogOut onClick={hadleLogOut}>LogOut</BotonLogOut>
          </ContenedorPerfilImagen>
        </ContenedorPerfil>
      </ContenedorNavbar>
    </nav>
  );
};
