import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useAxios } from '../../hooks/useAxios'
import './Reproductor.css'

const personsa = {
  email:'jjjj@gmail.com',
  username:'jjjj',
  password:'1234'
}
let dark = 'batman'
let idPeli = 724089




export const ReproduccionVideo = () => {

  const {register, login, buscarPelicula, actoresPelicula,buscarTrailerPelicula } = useAxios()
  const [valor, setValor] = useState()


useEffect(() => {
  const ejecucion =  async () => {

    let resp = await  buscarTrailerPelicula(idPeli)
  
    if (resp !== undefined) {
    
      setValor(resp.key)
    }
    return null
  }
  ejecucion()
}, [])
  
  return (
    <div>
      <div className="ddd">
        <button onClick={() =>{login(personsa)}}>Consultar</button>
        <button onClick={() =>{register(personsa)}}>Alta</button>
        <button onClick={() => {buscarPelicula(dark)}}>Buscar</button>
        <button onClick={() => {actoresPelicula(idPeli)}}>Actores</button>
      </div>

      <div className="peli">
      {
        (valor !== undefined) ? <ReactPlayer className="repr"  width='100%'
        height='100%' url={`https://www.youtube.com/watch?v=${valor}`}/>: <img src={process.env.PUBLIC_URL + '/img/small.jpg'} alt="foto"
        
        /> }

 
       
      </div>
      <div className="conten">
          HOla
      </div>
    </div>
  )
}
