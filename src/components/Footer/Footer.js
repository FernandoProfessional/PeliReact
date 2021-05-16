import React from "react";
import { Logo } from "../Navbar/icons/Logo";
import { FooterContainer } from "./style/Style";
import { FooterLogo } from "./style/Style";
import { FooterContainerTexto } from "./style/Style";
import { FooterTexto } from "./style/Style";
import { FooterTextoFinal } from "./style/Style";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>
        <Logo />
      </FooterLogo>
      <FooterContainerTexto>
        <FooterTexto>Politica de privacidad</FooterTexto>
        <FooterTexto>Politica de cookies</FooterTexto>
        <FooterTexto>Contrato de suscripción</FooterTexto>
        <FooterTexto>Dispositivos compatibles</FooterTexto>
        <FooterTexto>Anuncios basados en interses</FooterTexto>
        <FooterTexto>Administrar preferencias</FooterTexto>
      </FooterContainerTexto>
      <FooterTextoFinal>
        © PELI. Todos los derechos reservados.
      </FooterTextoFinal>
    </FooterContainer>
  );
};
