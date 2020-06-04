import React from 'react';
import styled from 'styled-components';

const CollectionName = styled.p`
user-select:none;
font-family: ${props => props.theme.font.medium};
margin-bottom: ${props => props.theme.spacers.medium};
span{
    color: ${props => props.theme.colors.light}
}
`

const Collection = ({ collection }) => {
    return (
        <React.Fragment>
            {collection ? <CollectionName>Part of<span>{collection.name}</span></CollectionName> : ''}
        </React.Fragment>
    )
}

export default Collection