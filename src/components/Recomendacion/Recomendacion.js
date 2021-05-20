import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';


const PosterImagen = styled.img`
    width:300px;
    height: inherit;
    border-radius:15px;

`
const ContenedorImagen = styled.div`
    width:300px;
    height: inherit;
    background-color: red;
`
const ContenedorRecomendacion = styled.div`
    width: 100%;
    height:200px;
    display: flex;
    justify-content:center;
    align-items:center;
    margin-bottom:15px;
    background-color:black;
    border-radius:15px;
`
const ContenedorRecomendacionTexto = styled.div`
    width:230px;
    display: flex;
    justify-content:center;
    align-items:center;
`

const ContenedorTexto = styled.p`
    text-align:center;
    text-decoration: none;
`
const Enlace = styled(Link)`
    text-decoration: none;
    color:white;
`
export const Recomendacion = ({poster,tituloPeli,idPelicula}) => {
    
    return (
        <Enlace to={`./${idPelicula}`}>
            <ContenedorRecomendacion>
                {(poster)?( <PosterImagen src={`https://www.themoviedb.org/t/p/w300/${poster}`} alt={tituloPeli} />):(<ContenedorImagen></ContenedorImagen>)}
                <ContenedorRecomendacionTexto>
                    <ContenedorTexto>
                        {tituloPeli}
                    </ContenedorTexto>
                </ContenedorRecomendacionTexto>
            </ContenedorRecomendacion>
        </Enlace>
    )
}
