import styled from "styled-components";

export const FilmContainer = styled.div`
    margin-top:71px;
    min-height:100vh;
    font-size:20px;
    background-color:gray;
`
export const TituloPeli = styled.h2`
    text-align: center;
    background-color:green;
    margin: 0;
    color:white;
    font-size: 40px;
    font-weight: bold;
`
export const ContendorTituloPeli = styled.div`
    width: 100%;
  
    padding:20px 0 20px 0;
`

/* export const CotanerdorDescripcion = styled.div`
    min-height:570px;
    display: flex;
    justify-content:center;
    align-items: center;
    
` */
/* export const ContenidoPeli = styled.div`
  
    height:100%;
    width:80%;
    display: flex;
    justify-content:center;
    
` */
export const PosterPeli = styled.div`
/*     background-color:red;
 */    height:100%;
    width:25%;
    display: flex;
    
    justify-content:center;
    align-items:center;
`
export const NoPosterPeli = styled.div`
    height:100%;
    width:75%;
    display: flex;
    flex-direction:column;
    justify-content:center;
   @media (max-width: 1320px) {
        margin:20px;
    }
`
export const  HeaderDescripcion = styled.div`
/*     background-color:gray;
 */    color:white;
    display: flex;
    margin-bottom:20px;
`
export const TituloDescripcion = styled.p`
    margin:0;
    font-size:40px;
    color:white;
    font-weight:bold;
`
export const FechaDescripcion = styled.span`
    font-size:30px;
    opacity: 0.8;
`

export const GeneroPeli = styled.span`
    font-size:20px;
    margin-right:5px;
`
export const GeneroDescripcion = styled.div`
    margin-right:20px;
`
export const DuracionDescripcion = styled.div`
`

export const MainDescripcion = styled.div`
    height:60px;
    width:100%;
    display: flex;
    margin-bottom:20px;
`
export const ContentedorPunctuation = styled.div`
    display: flex;
    align-items: center;
    margin-right:20%;
`
export const ContentedorPunctuationTexto = styled.div`
    margin-left:20px;
    display: flex;
    flex-direction:column;
    font-size:16px;
    color:white;
`
export const TextDescripcion = styled.div`


`
export const TaglineDescripcion = styled.div`
    opacity:0.7;
    color:white;
    font-style: italic;
`

export const TitleDescripcion = styled.div`
    color:white;
    font-weight:bold;
    margin:10px 0 10px 0;
`
export const ContentDescripcion = styled.div`
    color:white;
    font-size:18px;
    margin-bottom:26px;
`

export const ContenedorTrailer = styled.div`
    padding: 30px 0 20px 0;
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    background-color:#141414;
`

export const FilmTrailer = styled.div`
   height: 600px;
   width:800px;
   @media (max-width:820px){
        width:600px;
        height: 400px;
   }
   @media (max-width:600px){
        width:500px;
        height: 300px;
   }
`
export const VideoError = styled.div`
   height:300px;
   background-color:gray;
   width:500px;
   display: flex;
   justify-content:center;
   align-items:center;
   color:white;
   font-weight:bold;
`

export const ContenedorActores = styled.div`
    margin-top: 50px;
    height: 345px;
    width:100%;
    padding: 20px 20px;
   margin-bottom: 30px;
` 


export const TitulosRemondado = styled.p`
    color: white;
    font-size: 25px;
    text-align:center;
    font-weight: bold;
`


export const ListaRecomendacion = styled.div`
    width: 500px;
    height:500px;
    background-color:#141414;
    overflow-y: auto;
    padding: 10px;
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px white; 
        border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb {
        background: gray; 
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: gray; 
    }
`

