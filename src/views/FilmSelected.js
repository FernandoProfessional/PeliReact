import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router';
import { Porcentaje } from '../components/Descripcion/Porcentaje';
import DialogSelect from '../components/form/FormFilm';
import { useAxios } from '../hooks/useAxios';
import {FilmContainer, TextDescripcion, TaglineDescripcion, TitleDescripcion,ContentDescripcion, FilmTrailer, ContenedorTrailer,VideoError, ContenedorActores,ListaRecomendacion, TitulosRemondado} from './style/StyleFilm';
import {TituloPeli} from './style/StyleFilm';
import {ContendorTituloPeli} from './style/StyleFilm';
// import {CotanerdorDescripcion} from './style/StyleFilm';
// import {ContenidoPeli} from './style/StyleFilm';
import {PosterPeli} from './style/StyleFilm';
import {NoPosterPeli} from './style/StyleFilm';
import {HeaderDescripcion} from './style/StyleFilm';
import {TituloDescripcion} from './style/StyleFilm';
import {FechaDescripcion} from './style/StyleFilm';
import {GeneroPeli} from './style/StyleFilm';
import {GeneroDescripcion} from './style/StyleFilm';
import {DuracionDescripcion} from './style/StyleFilm';
import {MainDescripcion} from './style/StyleFilm';
import {ContentedorPunctuation} from './style/StyleFilm';
import {ContentedorPunctuationTexto} from './style/StyleFilm';
import ReactPlayer from 'react-player'
import axios from 'axios';
import styled from "styled-components";
import { Recomendacion } from '../components/Recomendacion/Recomendacion';
import { ActoresCarrousel } from '../components/Actores/ActoresCarrousel';

const ContenidoPeli = styled.div`

    height:100%;
    width:80%;
    display: flex;
    
    justify-content:center;
    align-items: center;
    flex-direction: row;

    @media (max-width: 1530px) {
        flex-direction: column;
        flex-wrap:wrap; 
    }
    
`   
const CotanerdorDescripcion = styled.div`
    min-height:570px;
    width:100%;
    display: flex;
    justify-content:center;
    align-items: center;
   
    background-image: url(${({fondo})=>fondo});
    background-repeat: no-repeat;
    background-size:cover;
    background-position-x:center;
  
` 
const FiltroImagen = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    min-height:100%;
    width:100%;
    background: rgba(0,0,0,0.8);
  backdrop-filter: saturate(180%) blur(5px);
`
const ContenedorRecomendacionEnlaces = styled.div`
    
`
const ActoresTitulo = styled.p`
    text-align:center;
    color: white;
    margin: 0 0 20px 0;
    font-size:25px;
    font-weight:bold;

`


export const FilmSelected = () => {
    const {findByIdPeli, actoresPelicula, similarMovies} = useAxios()
    const [peli, setPeli] = useState({})
    const [actores, setActores] = useState([])
    const [listaSimilar, setListaSimilar] = useState([])
    const [trailerKey, setTrailerKey] = useState([])
    const match = useRouteMatch()

    const datoPelicula = async(idFilm) => {
        const {data} = await findByIdPeli(idFilm)
        setPeli(data)
        console.log(data)
    }

    const peticionTrailer = async(idFilm) => {
        axios.get(`https://api.themoviedb.org/3/movie/${idFilm}/videos?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4&language=en-US`).then(res => {
            let listaKey = res.data.results.map(ele => ele.key)
            setTrailerKey(listaKey)
            return res.data
        })
    }

    const peticionPeliculas = async(idFilm) => {
        const {data}= await actoresPelicula(idFilm)
        console.log(data.cast)
        setActores(data.cast)
    }

    const peticionSimilar = async(idFile) => {
        const {data} = await similarMovies(idFile)
        setListaSimilar(data.results)
    }

    useEffect(() => {
        window.scroll(0,0);
        datoPelicula(match.params.filmid)
        peticionTrailer(match.params.filmid)
        peticionPeliculas(match.params.filmid)
        peticionSimilar(match.params.filmid)
    }, [])

    return (
        <FilmContainer>
            <CotanerdorDescripcion fondo={`https://www.themoviedb.org/t/p/w1280${peli.backdrop_path}`}>
                <FiltroImagen>
                <ContenidoPeli fondo={`https://www.themoviedb.org/t/p/w1280${peli.backdrop_path}`}>
                    
                    <PosterPeli>
                        <img src={`https://www.themoviedb.org/t/p/w300/${peli.poster_path}`} alt="" />
                    </PosterPeli>
                    <NoPosterPeli>
                        <TituloDescripcion>
                            {peli.title}
                            <FechaDescripcion>
                                {`  (${peli.release_date})`}
                            </FechaDescripcion>
                        </TituloDescripcion>
                        <HeaderDescripcion>
                            <GeneroDescripcion> 
                                Genres: 
                                    {(peli.genres && peli.genres.map(ele=>(<GeneroPeli>{` -${ele.name}`}</GeneroPeli>)) )}
                            </GeneroDescripcion>
                            <DuracionDescripcion>
                                {(peli.runtime &&  `Duration: ${Math.floor(peli.runtime/60)}h ${peli.runtime%60}min`)}
                            </DuracionDescripcion>
                        </HeaderDescripcion>
                        <MainDescripcion>
                            <ContentedorPunctuation>
                                <Porcentaje vote_average={peli.vote_average}/>
                                <ContentedorPunctuationTexto>
                                    <span>User</span>
                                    <span>Score</span>
                                </ContentedorPunctuationTexto>
                            </ContentedorPunctuation>
                            <DialogSelect idPeli={peli.id}/>
                        </MainDescripcion>
                        <TextDescripcion>
                            <TaglineDescripcion>
                                {peli.tagline}
                            </TaglineDescripcion>
                            <TitleDescripcion>
                                Overview
                            </TitleDescripcion>
                            <ContentDescripcion>
                                {peli.overview}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur nihil temporibus, ipsa facilis eaque nobis inventore non. Possimus, corrupti aliquid rem exercitationem officiis porro rerum illum eaque deserunt repudiandae.
         
                            </ContentDescripcion>

                        </TextDescripcion>
     

                    </NoPosterPeli>

                </ContenidoPeli>
                </FiltroImagen>
            </CotanerdorDescripcion>
            <ContenedorTrailer>
   
                <FilmTrailer>
                    {(trailerKey.length > 0)?
                    (<ReactPlayer  width='100%' height='100%' url={`https://www.youtube.com/watch?v=${trailerKey[0]}`}/>)
                    :<VideoError>
                        Trailer No Disponible
                    </VideoError> }
                </FilmTrailer>
                <ContenedorRecomendacionEnlaces>
                    <TitulosRemondado>Recommend</TitulosRemondado>
                    <ListaRecomendacion>
                        {listaSimilar && listaSimilar.map((elemento)=>(<Recomendacion key={elemento.key} poster={elemento.backdrop_path} tituloPeli={elemento.title} idPelicula={elemento.id}/>))}
                    </ListaRecomendacion>
                </ContenedorRecomendacionEnlaces>
                <ContenedorActores>
                    <ActoresTitulo>Actores</ActoresTitulo>
                    <ActoresCarrousel listaPersonajes={actores}/>
                       
                </ContenedorActores>
                
            </ContenedorTrailer>
        </FilmContainer>
    )
}
