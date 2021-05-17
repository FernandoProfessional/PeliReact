import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/auth/AuthContext";
import { useAxios } from "../hooks/useAxios";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// import { Lista } from "../components/Lista/Lista";
import { useForm } from "../hooks/useForm";
import { ListaConatainer } from "./style/StyleLista";
import { ContainerLista } from "./style/StyleLista";
import { ContainerIconAdd } from "./style/StyleLista";
import { TextIconAdd } from "./style/StyleLista";
import { TextoListaVacia } from "./style/StyleLista";
import { IconoAddList } from "./style/StyleLista";
import styled from "styled-components";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { SingleContent } from "../components/SingleContent/SingleContent";

export const ListaComponent = styled.div`
    cursor: pointer;
  color:#006BE6;
  border-radius: 10px;
  width: 300px;
  height: 100px;
  border: solid 2px #006BE6;
  margin-bottom: 20px;
  margin-right: 30px;
  display: flex;
  font-size:20px;
 
  @media (max-width: 1200px) {
    margin-right: 0px;
  }
  @media (max-width: 768px) {
    margin-right: 0px;
    width: 49%;
  }
`;
export const ListText = styled.div`
  width: 260px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ListIcon = styled.div`
   
`;
export const ListSpacion = styled.div`
  width: 90%;
  height: 34%;
  border-radius: 50%;

  &:hover {
    color: red;
  }
`;

const ContainerFilm = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 100px 0 100px;
  @media (max-width: 768px) {
    margin: 0 10px 0 10px;
    width: 49%;
    padding: 0 10px 0 10px;
  }
`
const TituloLista = styled.h2`
  text-align:center;
  color:white;
  font-size:40px;
  text-transform: uppercase;
`
const AvisoTitulo = styled.p`
  text-align:center;
  color:white;
  font-size: 40px;
  
`


export const ListaScreen = () => {
  let { getListas, newLista,deleteLista,pelisLista,findByIdPeli} = useAxios();
  const {
    user: { mail },
  } = useContext(AuthContext);

  const [listasPeliculas, setListasPeliculas] = useState([]);

  const [peliculas, setPeliculas] = useState([])

  const [tituloLista, setTituloLista] = useState('')

  const [values, handleInputChange] = useForm({
    nombreLista: "",
  });

  const listaPeticion = async () => {
    const { data } = await getListas(mail);
    setListasPeliculas(data);
  };
  const crearLista = async () => {
    if (values.nombreLista !== "") {
      await newLista(mail, values.nombreLista.toUpperCase());
      window.location.reload();
    }
  };

 
  const borrarLista = async (idLista,e) => {
    e.stopPropagation()
    console.log(idLista);
    await deleteLista(idLista);
    window.location.reload();
  };


  const verPeliculasLista = async (idLista,tituloLista) => {
    console.log(idLista)
      const {data} = await pelisLista(idLista)
      const allId = await data.map( (elemento) => elemento.imdbid)
      const listaTmdb = []
      for (const idPeli of allId) {
        const {data} = await findByIdPeli(idPeli)
        listaTmdb.push(data)        
      }
      setTituloLista(tituloLista)
      setPeliculas(listaTmdb)
      console.log(peliculas)
  }
  
 
  

  useEffect(() => {
    listaPeticion();
  }, []);

  return (
    <ListaConatainer>
      <ContainerLista>
        <ContainerIconAdd>
          <TextIconAdd
            onChange={handleInputChange}
            name="nombreLista"
            placeholder="CREATE LIST"
          />
          <IconoAddList>
            <AddCircleOutlineIcon fontSize="inherit" onClick={crearLista} />
          </IconoAddList>
        </ContainerIconAdd>
        {listasPeliculas && listasPeliculas.length > 0 ? (
          listasPeliculas.map((elemento) => (
 /*            <Lista
              key={elemento.idColecciones}
              idCollecion={elemento.idColecciones}
              nameCollection={elemento.nameCollection}
            /> */
            <ListaComponent onClick={()=>verPeliculasLista(elemento.idColecciones,elemento.nameCollection)}>
            <ListText>{elemento.nameCollection}</ListText>
            <ListIcon>
              <ListSpacion>
                <HighlightOffIcon
                  fontSize="large"
                  color="inherit"
                  onClick={(e) => borrarLista(elemento.idColecciones,e)}
                />
              </ListSpacion>
            </ListIcon>
          </ListaComponent>
          ))
        ) : (
          <TextoListaVacia>
            No tiene listas. Escriba el nombre de la lista y haga click en el
            icono.
          </TextoListaVacia>
        )}
      </ContainerLista>

      {(peliculas.length > 0)?(<TituloLista>{tituloLista}</TituloLista>):(<AvisoTitulo>No hay Peliculas en la lista: {tituloLista}</AvisoTitulo>)}

      <ContainerFilm>

          {(peliculas.length > 0)?
           peliculas.map((peli) => (
        
            <SingleContent key={peli.id}
            id={peli.id}
            poster={peli.poster_path}
            title={peli.title || peli.name}
            date={peli.first_air_date || peli.release_date}
            media_type={peli.media_type}
            vote_average={peli.vote_average}/>
             
           ))
           :(<span></span>)
        }
      </ContainerFilm>
        

    </ListaConatainer>
  );
};
