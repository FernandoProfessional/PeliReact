import React, { useEffect } from "react";
import styled from "styled-components";
import { Carrousel } from "../components/carrousel/Carrousel";
import { Slider } from "../components/Slider/Slider";

const Contenedor = styled.div`
  background-color: #141414;
  padding: 30px 90px 0 90px;
  margin-top:72px;
  @media (max-width: 768px) {
    padding: 10px 30px 0 30px;
  }
`;
const Titulo = styled.h3`
  margin: 0;
  font-size: 26px;
  font-weight: bold;
  color: white;
`;
const ContainerTituloCarrousel= styled.div`
    padding-bottom:20px;
    margin-top:20px;
`

const peticionesApi = {
  trending:
    "https://api.themoviedb.org/3/trending/movie/day?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4",
  topRated:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4&language=en-US&page=1&region=es",
  upcoming:
    "https://api.themoviedb.org/3/movie/upcoming?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4&language=en-US&page=2 ",
  reomended:
  "https://api.themoviedb.org/3/movie/238/similar?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4&language=en-US&page=1",
};



export const HomeScreen = () => {
  
  useEffect(() => {
    window.scroll(0,0);
  }, []);

  return (
    <Contenedor>
      <Slider />
        <ContainerTituloCarrousel>
            <Titulo>Trending</Titulo>
            <Carrousel enlaceApi={peticionesApi.trending} />
        </ContainerTituloCarrousel>
        <ContainerTituloCarrousel>
            <Titulo>Rated</Titulo>
            <Carrousel enlaceApi={peticionesApi.topRated} />
        </ContainerTituloCarrousel>
        <ContainerTituloCarrousel>
            <Titulo>Upcoming</Titulo>
            <Carrousel enlaceApi={peticionesApi.upcoming} />
        </ContainerTituloCarrousel>
        <ContainerTituloCarrousel>
            <Titulo>Recommended</Titulo>
            <Carrousel enlaceApi={peticionesApi.reomended} />
        </ContainerTituloCarrousel>
    </Contenedor>
  );
};
