import React from 'react'
import  Router  from './routes/Router'
import { GlobalState } from './Global/GlobalState';
import {GlobalStyle} from './Global/GlobalStyles'



function App() {
  return (
    <GlobalState>
      <GlobalStyle/>
      <Router/>
    </GlobalState>
  );
}

export default App;
