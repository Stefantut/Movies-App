import React from 'react'

function MovieImage(props) {
    return (
        <img
            src={props.url}
            alt={props.title}
            className="header__item header__item--image"
        />
    )
}

export default MovieImage
