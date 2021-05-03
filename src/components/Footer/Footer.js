import React from 'react'
import styled from "styled-components";
import { Logo } from '../Navbar/icons/Logo';


const FooterContainer = styled.div`
    background-color:rgb(0, 0, 0);
    color:white;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    font-size:12px;
    padding:10px;
`
const FooterLogo = styled.div`
    margin-bottom:15px;
`
const FooterContainerTexto= styled.div`
    display: flex;
    justify-content:space-around;
    flex-wrap:wrap;
    width:80%;
    margin-bottom:15px;
    cursor: pointer;
`
const FooterTexto = styled.span`
`
const FooterTextoFinal = styled.span`
    margin-bottom:15px;
`

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo>
                <Logo/>
            </FooterLogo>
            <FooterContainerTexto>
                <FooterTexto>
                    Politica de privacidad
                </FooterTexto>
                <FooterTexto>
                    Politica de cookies
                </FooterTexto>
                <FooterTexto>
                    Contrato de suscripción
                </FooterTexto>
                <FooterTexto>
                    Dispositivos compatibles
                </FooterTexto>
                <FooterTexto>
                    Anuncios basados en interses
                </FooterTexto>
                <FooterTexto>
                    Administrar preferencias
                </FooterTexto>
            </FooterContainerTexto>
            <FooterTextoFinal>
                © PELI. Todos los derechos reservados.
            </FooterTextoFinal>
            
        </FooterContainer>
    )
}
