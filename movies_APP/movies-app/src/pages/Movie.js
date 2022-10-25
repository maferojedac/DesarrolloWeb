import React from 'react'
import {useParams} from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import {useFetchMoviesByID} from '../hooks/useFetchMoviesByID';



export const Movie = () => {

    //usa los parametros que se mandana por la URL
    const params = useParams();
    console.log('params:',params)

    const {movie, isLoading} = useFetchMoviesByID(movieId);
    console.log('movie:',movie)

  return (
    <div className='text-center'>
        <MovieCard
            {...movie} /*...- spread */
        />

    </div>

  )
}
