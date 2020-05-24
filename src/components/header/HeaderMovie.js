import React from 'react'
import HeaderMovieImage from './HeaderMovieImage'
import { IMAGE_URL } from '../../Variables'
function HeaderMovie(props) {
    return (
        <div>
            <h3 className='header__item header__item--title'>{props.movie.title}</h3>
            <p className='header__item header__item--description'>{props.movie.overview}</p>
            <HeaderMovieImage url={`${IMAGE_URL}w780${props.movie.backdrop_path}`} title={props.movie.title} />
        </div>
    )
}

export default HeaderMovie
