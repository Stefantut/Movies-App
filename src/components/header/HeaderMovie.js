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
font-family: 'RobotoBold';
color:${props => props.theme.colors.primary};
font-size: ${props => props.theme.fontSizes.medium};
position: relative;
z-index:0;

@media ${({ theme }) => theme.mediaQueries.below1024}{
    color:blue;
}
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
