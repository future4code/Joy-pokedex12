import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Pokedex from './pages/Pokedex/Pokedex';
import DetalhesPokemon from './pages/DetalhesPokemon/DetalhesPokemon';


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
        <Route exact path={"/pokedex"}>
          <Pokedex/>
        </Route>
        <Route exact path={"/detalhespokemon"}>
          <DetalhesPokemon/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
