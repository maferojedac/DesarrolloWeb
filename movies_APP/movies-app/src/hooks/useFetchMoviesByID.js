import {useEffect, useState} from "react"
import {getMovieByID} from "../helpers/getMovieByID";

export const useFetchMoviesByID = (movieId) => {
    const [movie, setMovie] = useState();
    const [isLoading, setIsLoading] = useState(true);


    const getMovie = async (movieId, language) => {
        const result = await getMovieByID(movieId)
        setMovie(result);
        setIsLoading(false);

    }

    useEffect(() => {
        getMovie(movieId);
    }, []);

    return { 
        movie,
        isLoading
    }
}