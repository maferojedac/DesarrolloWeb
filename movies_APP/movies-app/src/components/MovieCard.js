import React from 'react'
import {useParams, Link} from 'react-router-dom';

const MovieCard = (props) => {

    const {
        id,
        title,
        name,
        poster_path,
        media_type,
        vote_average,
        overview,
    } = props;

    const myTitle = name ? name : title; //si hay nombre que aparezca, si no aparece title
    const poster = `https://image.tmdb.org/t/p/original/${poster_path}`
    const myOverview = overview.length > 50 ? `$(overview.substring(0, 49))...` : overview


  return (
    <>
        <div className='col'>

            <div className='card'>

                <div className='row no-gutters'>

                    {/* col-4 = se le dice que se muestre en 4 columnas */}
                    <div className='col-4'>
                        <img className='card-img'
                            src={poster}
                        />
                    </div>

                    <div className='col-8'>

                        <div className='card-body'>

                            <h5 className='card-title'>{myTitle}</h5>
                            <p className='card-text'>{myOverview}</p>
                            
                            <p className='card-text'>
                                <small className='text-muted'>Rating: {vote_average}</small>
                            </p>

                            {/* link- se hace en base al id por si algun día quitan la pelicula, no afecte nada */}
                            <Link to={`/movie/${id}`}>
                                ... See More
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </>
   
  )
}

export default MovieCard