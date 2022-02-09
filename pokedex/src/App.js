import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Pokedex from './pages/Pokedex/Pokedex';
import DetalhesPokemon from './pages/DetalhesPokemon/DetalhesPokemon';
import PokemonList from "./PokemonList";
import axios from 'axios'
import Pagination from "./Pagination";

function App() {
  const [pokemon, setPokemon] = useState ([]);
  const [currentPageURL, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageURL, setNextPageUrl] = useState();
  const [prevPageURL, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setLoading(true)
    let cancel
    axios
    .get(currentPageURL, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p =>p.name))
    })

    return() => cancel();

    }, [currentPageURL]);

    function gotoNextPage(){
      setCurrentPageUrl(nextPageURL)
    }

    function gotoPrevPage(){
      setCurrentPageUrl(prevPageURL)
    }
  if (loading) return "Loading..."


  return (
    <><BrowserRouter>
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

        <PokemonList pokemon = {pokemon} />
        <Pagination 
          gotoNextPage={nextPageURL ? gotoNextPage :  null}
          gotoPrevPage={prevPageURL ? gotoPrevPage : null}
        /> 
    </>
  );
}

export default App;
