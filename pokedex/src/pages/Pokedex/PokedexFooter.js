import React from 'react';
import styled from 'styled-components';
import pokedexFooter from '../../assets/pokedexFooter.png'

const FooterContainer = styled.div`
position: fixed;
bottom: 0;
width: 100%;
height: 150px;
background-image: url('${pokedexFooter}');
`

const PokedexFooter = () => {
    return (
        <FooterContainer>
        </FooterContainer>
    )
}
export default PokedexFooter