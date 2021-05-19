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
// let idPeli = 724089




export const ReproduccionVideo = ({idPeli}) => {

  const {buscarTrailerPelicula } = useAxios()
  const [id, setId] = useState('')
  const [valor, setValor] = useState()

  const ejecucion =  async () => {
    console.log('hola')
    let {data} = await  buscarTrailerPelicula(id)
    console.log('Luego')
    setValor(data.results[0].key)
    console.log(data)

  }

useEffect(() => {
  setId(idPeli)
  ejecucion()
}, [])
  
  return (
    <div>
{/*       <div className="ddd">
        <button onClick={() =>{login(personsa)}}>Consultar</button>
        <button onClick={() =>{register(personsa)}}>Alta</button>
        <button onClick={() => {buscarPelicula(dark)}}>Buscar</button>
        <button onClick={() => {actoresPelicula(idPeli)}}>Actores</button>
      </div> */}

      <div className="peli">
      {
        (valor !== undefined) ? <ReactPlayer className="repr"  width='100%'
        height='100%' url={`https://www.youtube.com/watch?v=${s }`}/>: <img src={process.env.PUBLIC_URL + '/img/small.jpg'} alt="foto"
        
        /> }

 
       
      </div>
    </div>
  )
}
