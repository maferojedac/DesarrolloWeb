import config from "../config/config"; //al seleccionar el objeto, se autocompleta

//va ir a la web y regresará datos
//cuando se llame async
export const getMovieByID = async (movieId, language = 'es-MX') => {

        const {ApiKey, Endpoint} = config;
        const url = `${Endpoint}/movie/${movieId}?apikey=${ApiKey}&language${language}`; /*&- se le manda un 2ndo parametro, ?-solo se le manda 1 paramatro */
        const resp = await fetch( url );
        const result = await resp.json();

        return result;
    }