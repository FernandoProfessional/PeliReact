import axios from "axios";


export const useAxios = () => {

    // TODO: Peticiones al nuestra API


    const register = async(user= false) => {
        const response = await axios.post(`http://139.162.137.96:8080/PeliCodigoServidor/rest/api/registrar?email=${user.email}&password=${user.password}&username=${user.username}`, {mode: 'no-cors'});
        console.log(response);
        return response
    }

    const login = async (user=false) => {
        const response = await axios.get(`http://139.162.137.96:8080/PeliCodigoServidor/rest/api/login?email=${user.email}&password=${user.password}`)
        console.log(response);
        return response
    }
    //Listas

    const getListas = (mail) => {
        return axios.get(`http://139.162.137.96:8080/PeliCodigoServidor/rest/api/obtenerCollecciones?email=${mail}`) 
    }
    
    const deleteLista = (idLista) => {
        return axios.get(`http://139.162.137.96:8080/PeliCodigoServidor/rest/api/deleteList?coleccionid=${idLista}`)
    }

    const newLista = (email,nameList) => {
        return axios.get(`http://139.162.137.96:8080/PeliCodigoServidor/rest/api/newList?email=${email}&nameCollection=${nameList}`) 
        
    }
    const pelisLista =(idLista) => {
        return axios.get(`http://139.162.137.96:8080/PeliCodigoServidor/rest/api/obtenerPeliculasDeColeccion?coleccionid=${idLista}`) 
    }
    const addPeliLista = (idLista,idPeli) => {
        return axios.get(`http://139.162.137.96:8080/PeliCodigoServidor/rest/api/addPeliculaToLista?coleccionid=${idLista}&imdbid=${idPeli}`) 
    }
    const deleteFilm = (idPeli,iLista) => {
        return axios.get(`http://139.162.137.96:8080/PeliCodigoServidor/rest/api/removePeliculaFromLista?coleccionid=${iLista}&imdbid=${idPeli}`)
    }


    // TODO: Peticines a la la API PELICULAS

    const findByIdPeli = (idFilm) => {
        return axios.get(`http://api.themoviedb.org/3/movie/${idFilm}?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4`) 
    }

    const buscarPelicula = async (query) => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4&query=${query}`)
        console.log(response);
        return response
    }
    // Peliculas de moda

    const peliculasModa = async() => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4`)
/*         console.log(response);
 */        return data.results
    }

    // https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4&language=en-US

    // Actores de la pelicula
    const actoresPelicula = (idFilm) => {
        return axios.get(`https://api.themoviedb.org/3/movie/${idFilm}/credits?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4&language=en-US`)
    }

    const buscarTrailerPelicula = (idFilm) => {
        return axios.get(`https://api.themoviedb.org/3/movie/${idFilm}/videos?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4&language=en-US`)    
        // https://www.youtube.com/watch?v=SUXWAEX2jlg
        // valor = response.data.results.map(ele => ele.key)
    }




    return {
        register,
        login,
        buscarPelicula,
        peliculasModa,
        actoresPelicula,
        buscarTrailerPelicula,
        getListas,
        newLista,
        pelisLista,
        deleteLista,
        addPeliLista,
        findByIdPeli,
        deleteFilm
    }
}
