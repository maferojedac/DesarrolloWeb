import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Login} from '../pages'
import {MovieRoutes} from './MovieRoutes'


export const AppRoutes = () => {
  const isLoggedIn = true;
  return (
    <>
      <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<MovieRoutes />} />
      </Routes>
    </>
  )
}