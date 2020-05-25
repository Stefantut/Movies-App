import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeaderMovieTitle from './HeaderMovieTitle'
import HeaderMovieDescription from './HeaderMovieDescription';


const HeaderMovieWrap = styled.div`
height:70vh;
max-width:1280px;
width:100%;
background-image: url(${props => props.defaultUrl});
background-size: cover;
background-repeat:no-repeat;
font-family: 'RobotoBold';
`;

function HeaderMovie(props) {

    return (
        // pass url again to styled component as prop
        <HeaderMovieWrap className='header__item header__item--content' defaultUrl={props.url}>
            <HeaderMovieTitle title={props.movie.title} />
            <HeaderMovieDescription description={props.movie.overview} />
        </HeaderMovieWrap>
    )
}

HeaderMovie.propTypes = {
    url: PropTypes.string, // url isn't included
    title: PropTypes.string,
    description: PropTypes.string
}
export default HeaderMovie
