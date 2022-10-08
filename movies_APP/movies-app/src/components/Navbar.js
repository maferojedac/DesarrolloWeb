import React from 'react'
import {Link, useNavigate} from 'react-router-dom';

/* Link-
NaviLin- es como link pero es una función, puede recibir argumentos */


export const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login', {
            replace:true /* para volver a meterse a la pagina, hay que loggearse para que deje */
        })
    }
  return (
    <>
          <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid">
                <Link className="navbar-fluid" to="/"> 
                    MovieApp
                </Link>
            
                 {/* href-solo usarlo para sitios externos */}   
                  {/* <a class="navbar-brand" href="/trending">Navbar</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>*/}

                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div class="navbar-nav">
                          <Link className="nav-link"to="/home">
                                Home
                          </Link>

                          <Link className="nav-link" to="/top10">
                            Top10
                          </Link>

                          <Link className="nav-link" to="/trending">
                            Trending
                          </Link>
                          
                          {/* <a class="nav-link disabled">Disabled</a> */}
                      </div>
                  </div>
                  <ul className="navbar-collapse justify-content-end">
                    <Link className="nav-link" to="/login" onClick={handleLogout}>
                        Logout
                    </Link>
                  </ul>
              </div>
          </nav>
    </>
  )
}
