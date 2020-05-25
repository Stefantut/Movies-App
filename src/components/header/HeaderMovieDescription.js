import React from 'react'

function HeaderMovieDescription(props) {
    return (
        <p className='header__content header__content--description'>{props.description}</p>
    )
}

export default HeaderMovieDescription
