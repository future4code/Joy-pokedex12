import React, { useState } from 'react';
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { Input } from '@chakra-ui/react'
import background from '../assets/background.png'
import homeImg from '../assets/home.png'
import pokedexImg from '../assets/pokedex.png'
import pokemons from '../assets/pokemons.png'

const HeaderContainer = styled.div`
position: relative;
width: 100%;
height: 150px;
background-image: url('${background}');
display: flex;
align-items: center;
justify-content: space-between;
>div{ display: flex;
}
`
const Logo = styled.img`
height: 70%;
`
const PokedexImg = styled.img`
height: 9vh;
`
const HomeImg = styled.img`
height: 9vh;
`
const SelectContainer = styled.input`
width: 50vw;
`
const Pokemons = styled.img`
height: 100%;
float: right;
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
            <Input variant='filled' placeholder='Buscar Pokemon' />
            <div>
                <HomeImg src={homeImg} />
                <PokedexImg src={pokedexImg} />
            </div>
            <Pokemons src={pokemons}/>
        </HeaderContainer>
    )
}
export default Header