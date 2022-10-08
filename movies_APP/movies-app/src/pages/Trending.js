import React from 'react'
import MovieCard from '../components/MovieCard';
import {useFetchTrending} from '../hooks/useFetchTrending';

export const Trending = () => {


  const {movies} = useFetchTrending(); //devuelve las peliculas al iniclizar

  console.log('movies:',movies); //no jala :(

  return (
    //map-itera y extrae elementos por separado:    de cada elemtnto del arreglo se va a guardar el elemento que tenga movie
    //bootstram = el elemento se pone en filas de izquierda-derecha | si la pantalla es pequeña que muestre solo 1 y si es mediana que muestre 3
    <div className='container row                                     row-cols-1 row row-cols-mid-3 g-3'>
      
      { movies.map((movie) => {

        <MovieCard
        key={movie.id}
        {...movie}
        />
        })

      }
    </div>
  )
}