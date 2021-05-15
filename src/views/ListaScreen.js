import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components";
import { AuthContext } from '../components/auth/AuthContext';
import { useAxios } from '../hooks/useAxios';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const ListaConatainer = styled.div`
    margin-top:71px;
    min-height:100vh;
    background-color:gray;
    font-size:20px;
    padding:0 20px 0 20px;
`
const ContainerLista = styled.div`
    background-color: red;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
`
const Lista = styled.div`
    margin: 20px 0 20px 0;
    background-color:green;
    min-width:300px;
    height:100px;
    border:solid 2px yellow;
`
const ContainerIconAdd = styled.div`
    margin: 20px 0 20px 0;
    min-width:300px;
    height:100px;
    border:2px solid black;
    font-size:60px;
    display:flex;
    justify-content:center;
    align-items:center;

`
export const ListaScreen = () => {
    let {getListas}=useAxios()
    const {user:{mail}} = useContext(AuthContext);
    const [listasPeliculas, setListasPeliculas] = useState([])

    const listaPeticion = async() => {
        const { data } = await axios.get(getListas(mail))
        setListasPeliculas(data) 
        console.log(data)
    }

  
    useEffect(() => {
        listaPeticion()
    },[])
    

    return (
        <ListaConatainer>
            <ContainerLista>
                {(listasPeliculas.length > 0) ? 
                    listasPeliculas.map((elemento)=>
                    <Lista>
                        {elemento.nameCollection}
                    </Lista>) 
                    : <p>NO hay listas</p> 
                }
                <ContainerIconAdd>
                    <AddCircleOutlineIcon fontSize="inherit"/>
                </ContainerIconAdd>
            </ContainerLista>
        </ListaConatainer>
    )
}
