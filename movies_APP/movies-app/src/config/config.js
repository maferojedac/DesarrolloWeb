
//jala las variables de .env a la APP cuando cree el servidor
export default {
    ApiKey: process.env.REACT_APP_API_KEY,
    Endpoint: process.env.REACT_APP_MOVIE_DB_ENDPOINT
}