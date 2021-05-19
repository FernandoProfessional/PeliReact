import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router';
import { Porcentaje } from '../components/Descripcion/Porcentaje';
import DialogSelect from '../components/form/FormFilm';
import { useAxios } from '../hooks/useAxios';
import {FilmContainer, TextDescripcion, TaglineDescripcion, TitleDescripcion,ContentDescripcion, FilmTrailer, ContenedorTrailer,VideoError} from './style/StyleFilm';
import {TituloPeli} from './style/StyleFilm';
import {ContendorTituloPeli} from './style/StyleFilm';
import {CotanerdorDescripcion} from './style/StyleFilm';
import {ContenidoPeli} from './style/StyleFilm';
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

export const FilmSelected = () => {
    const {findByIdPeli} = useAxios()
    const [peli, setPeli] = useState({})
    const [trailerKey, setTrailerKey] = useState([])
    const match = useRouteMatch()

    const datoPelicula = async(idFilm) => {
        const {data} = await findByIdPeli(idFilm)
        setPeli(data)
        console.log(data)
    }

    const peticionTrailer = async(idFilm) => {
        console.log('Id Trailer: '+ idFilm)
        axios.get(`https://api.themoviedb.org/3/movie/${idFilm}/videos?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4&language=en-US`).then(res => {
            let listaKey = res.data.results.map(ele => ele.key)
            setTrailerKey(listaKey)
            return res.data
        })
    }

    useEffect(() => {
        datoPelicula(match.params.filmid)
        peticionTrailer(match.params.filmid)
    }, [])

    return (
        <FilmContainer>
            <ContendorTituloPeli>
                <TituloPeli>{peli.title}</TituloPeli>
            </ContendorTituloPeli>
            <CotanerdorDescripcion>
                <ContenidoPeli>
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
                            </ContentDescripcion>

                        </TextDescripcion>

                    </NoPosterPeli>

                </ContenidoPeli>
            </CotanerdorDescripcion>
            <ContenedorTrailer>
   
                <FilmTrailer>
                    {(trailerKey.length > 0)?
                    (<ReactPlayer  width='100%' height='100%' url={`https://www.youtube.com/watch?v=${trailerKey[0]}`}/>)
                    :<VideoError>
                        Trailer No Disponible
                    </VideoError> }
                </FilmTrailer>
                         
            </ContenedorTrailer>
        </FilmContainer>
    )
}
