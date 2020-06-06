import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Overlay from '../misc/Overlay'
import HeaderMovieTitle from './HeaderMovieTitle'
import HeaderMovieDescription from './HeaderMovieDescription';


const HeaderMovieWrap = styled.div`
min-height: 550px;
max-width: ${props => props.theme.content.medium};
background-image: url(${props => props.defaultUrl});
background-size: cover;
background-repeat: no-repeat;
position: relative;
z-index:0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const HeaderMovie = ({ url, movie }) => {

    return (
        // pass url again to styled component as prop
        <HeaderMovieWrap className='header__item header__item--content' defaultUrl={url}>
            <Overlay />
            <HeaderMovieTitle title={movie.title} />
            <HeaderMovieDescription description={movie.overview} />
        </HeaderMovieWrap>
    )
}

HeaderMovie.propTypes = {
    url: PropTypes.string, // url isn't included
    title: PropTypes.string,
    description: PropTypes.string
}
export default HeaderMovie
