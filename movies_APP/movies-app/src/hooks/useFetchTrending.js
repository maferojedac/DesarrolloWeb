//custum hook-una funcipon que interactua con el estado de tu app, para simplificar el trabajo
//ejemplo useEffect

import {useEffect, useState} from "react"
import {getTrending} from "../helpers/getTrending";

//export hace "pública" la función
export const useFetchTrending = () => {
    const [movies, setMovies] = useState([]); //arreglo vacio
    const [isLoading, setIsLoading] = useState(true); //true-esta cargando


    const getTrendingMovies = async (media_type, time_window) => {
        const results = await getTrending(media_type, time_window)
        setMovies(results);
        setIsLoading(false);

        /* setTimeout(() => {
            setIsLoading(false);
        }, 5000); */
    }

    useEffect(() => {
        getTrendingMovies();
    }, []);

    return { 
        movies,
        isLoading
    }
}

