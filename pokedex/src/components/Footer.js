import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from '@chakra-ui/react';
import colorFooter from '../assets/colorFooter.png';
import pokeball from '../assets/pokeball.png'

const FooterContainer = styled.div`
position: fixed;
bottom: 0;
width: 100%;
height: 150px;
background-image: url('${colorFooter}');
`
const Pokeball = styled.img`
height: 100%;
float: right;
`

const Footer = () => {
    return (
        <FooterContainer>
            <Pokeball src={pokeball}/>
        </FooterContainer>
    )
}
export default Footer