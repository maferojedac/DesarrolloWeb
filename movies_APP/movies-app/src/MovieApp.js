import React from 'react' //rafce >enter>
import {useFetchTrending} from './hooks/useFetchTrending'
import { AppRoutes } from './router/AppRoutes';


export const MovieApp = () => {

  /* const {movies, isLoading} = useFetchTrending(); */
  /* console.log('movies', movies); */
  
  return (
    <>
      <AppRoutes />

      <div>MovieApp</div>
      {/* <p>{`${isLoading ? 'Esta cargando' : 'Ya cargo'}`}</p> */}
    </>
  )
}
