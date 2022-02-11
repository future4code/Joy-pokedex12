import React, { useState } from 'react';
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { Input } from '@chakra-ui/react'

const HeaderContainer = styled.div`
width: 100%;
height: 100px;
background-color: yellow;
display: flex;
align-items: center;
justify-content: space-between;
>div{ display: flex}
`
const Logo = styled.img`
height: 70%;
`
const SelectContainer = styled.input`
width: 50vw;
`

const Header = () => {
    const [searchPokemon, setSearchPokemon] = useState('')
    const handleSearchPokemon = ({ target }) => {
        setSearchPokemon(target.value)
        console.log(searchPokemon)
    }
    return (
        <HeaderContainer>
            <Logo src={logo} />
                <SelectContainer value={searchPokemon} onChange={handleSearchPokemon} placeholder='Buscar Pokemon' />
            <div>
                <p>home</p>
                <p>pokedex</p>
            </div>
        </HeaderContainer>
    )
}
export default Header