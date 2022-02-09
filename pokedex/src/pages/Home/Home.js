import {React, useState} from 'react';
import { useGetPokeInfo } from '../../hooks/useGetPokeInfo';


const Home = () => {
    const [teste] = useGetPokeInfo("https://pokeapi.co/api/v2/pokemon?limit=20")  

    return (
        <div>
            <h1>Pokedex</h1>
        </div>
    )
}
export default Home