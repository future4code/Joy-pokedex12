import {React, useContext} from 'react';
import { GlobalContext } from '../../Global/GlobalContext';
import styled from 'styled-components';
import Header from './HomeHeader'
import Footer from './HomeFooter'

const HomeContainer = styled.div`
height: 95vh;

`
const Home = () => {
    const {teste, teste2} = useContext(GlobalContext)

    console.log(teste)
    return (
        <div>
            <Header/>
            <h1>Home</h1>
            <Footer/>
        </div>
    )
}
export default Home