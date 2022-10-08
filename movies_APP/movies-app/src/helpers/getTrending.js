import config from "../config/config"; //al seleccionar el objeto, se autocompleta

//va ir a la web y regresará datos
//cuando se llame async
export const getTrending = async (
    media_type = 'all',
    time_window = 'day') => {

        const {ApiKey, Endpoint} = config;
        //https://api.themoviedb.org/3/trending/all/day?api_key=c7afdcff2cf9f3825bdde70d488bb105

        //template key, se armo en base de las variables de entorno que ya se tiene
        const url = `${Endpoint}/trending/${media_type}/${time_window}?apikey=${ApiKey}`;

        //await(promesa)-llamar a una funcion asíncrona y te devuelve una promesa
        //L15-16  -  código lineal
        const resp = await fetch( url ); //get url
        const {results} = await resp.json();

        return results;
    }