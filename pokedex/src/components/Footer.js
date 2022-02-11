import React, { useState } from 'react';
import styled from 'styled-components'
import { Input } from '@chakra-ui/react'

const FooterContainer = styled.div`
width: 100%;
height: 100px;
background-color: yellow;
display: flex;
align-items: center;
justify-content: space-between;
>div{ display: flex}
`

const Footer = () => {
    return (
        <FooterContainer>
        </FooterContainer>
    )
}
export default Footer