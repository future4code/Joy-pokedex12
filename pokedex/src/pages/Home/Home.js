import {React, useContext} from 'react';
import { GlobalContext } from '../../Global/GlobalContext';
import styled from 'styled-components';

const HomeContainer = styled.div`
height: 95vh;

`



const Home = () => {
    const {teste, teste2} = useContext(GlobalContext)

    console.log(teste)
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
export default Home