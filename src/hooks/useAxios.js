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



    // TODO: Peticines a la la API PELICULAS

    const buscarPelicula = async (query) => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4&query=${query}`)
        console.log(response);
        return response
    }
    // Peliculas de moda

    const peliculasModa = async() => {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4`)
        console.log(response);
        return response
    }

    // https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4&language=en-US

    // Actores de la pelicula
    const actoresPelicula = async(idFilm) => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${idFilm}/credits?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4&language=en-US`)
        console.log(response);
        return response
    }

    const buscarTrailerPelicula = async(idFilm) => {
            let {data}  = await axios.get(`https://api.themoviedb.org/3/movie/${idFilm}/videos?api_key=3c10d1cb4174fb0e29e61cd194e5ecf4&language=en-US`)    
            // https://www.youtube.com/watch?v=SUXWAEX2jlg
            // valor = response.data.results.map(ele => ele.key)
            return  data.results[0]    
       
    }




    return {
        register,
        login,
        buscarPelicula,
        peliculasModa,
        actoresPelicula,
        buscarTrailerPelicula
    }
}
