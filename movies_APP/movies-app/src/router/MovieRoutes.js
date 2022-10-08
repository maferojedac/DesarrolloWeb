import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Navbar} from '../components/Navbar'
import {Trending, Home, Top10, Login, Movie} from '../pages'

export const MovieRoutes = () => {
  return (
    <>
      <Navbar />
        <Trending/>
        <Routes> {/* switch */}
          {/*es como un switch */}
          <Route path='/' element={<Home />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/top10' element={<Top10 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/movie/:movieId' element={<Movie />} /> {/* lo que toma de movie, lo guarda en movieId y luego lleva al componente de Movie */}
          {/*comodin-cuando alguien se meta a cualquier lado que no sea el especificado */}
          <Route path='/*' element={<Home />} />
        </Routes>
    </>
  )
}
