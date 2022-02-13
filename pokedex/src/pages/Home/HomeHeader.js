import React, { useState } from 'react';
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import background from '../../assets/background.png'
import pokedexImg from '../../assets/pokedex.png'
import pokemons from '../../assets/pokemons.png'
import { useHistory } from 'react-router-dom';

const HeaderContainer = styled.div`
position: relative;
width: 100%;
height: 150px;
background-image: url('${background}');
display: flex;
align-items: center;
justify-content: space-between;
>div{ display: flex;
    height: 70px;
    width: 70px;
}
`
const Logo = styled.img`
height: 70%;
`
const PokedexImg = styled.img`
height: 12vh;
&:hover {
    height: 10vh;}
`

const SelectContainer = styled.input`
width: 30vw;
padding: 5px;
background-color:#FFFACD;
border-radius: 4px;
border-color: white;
`
const Pokemons = styled.img`
height: 100%;
float: right;
`

const Header = () => {
    const history = useHistory ()
    const goPokedex = () => {
        history.push('/pokedex')
    }
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
                <PokedexImg src={pokedexImg} onClick={goPokedex}/>
            </div>
            <Pokemons src={pokemons}/>
        </HeaderContainer>
    )
}
export default Header