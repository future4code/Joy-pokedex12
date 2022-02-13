import React, { useState } from 'react';
import styled from 'styled-components'
import homeImg from '../../assets/home.png'
import { useHistory } from 'react-router-dom';
import pokedexHeader from '../../assets/pokedexHeader.png'

const HeaderContainer = styled.div`
position: relative;
width: 100%;
height: 150px;
background-image: url('${pokedexHeader}');
display: flex;
align-items: center;
justify-content: space-between;
>div{ display: flex;
}
`
const HomeImg = styled.img`
height: 9vh;
&:hover {
    height: 10vh;}
`

const SelectContainer = styled.input`
width: 25vw;
padding: 5px;
background-color: #FFB6C1;
border-radius: 4px;
border-color: #CD5C5C;
margin-top: 100px;
margin-right: 40px;
margin-bottom: 10px;
margin-left: 70px;
`

const PokedexHeader = () => {
    const history = useHistory ()
    const goHome = () => {
        history.push('/')
    }
    const [searchPokemon, setSearchPokemon] = useState('')
    const handleSearchPokemon = ({ target }) => {
        setSearchPokemon(target.value)
        console.log(searchPokemon)
    }
    return (
        <HeaderContainer>
            <HomeImg src={homeImg} onClick={goHome}/>
            <SelectContainer value={searchPokemon} onChange={handleSearchPokemon} placeholder='Buscar Pokemon' />
        </HeaderContainer>
    )
}
export default PokedexHeader