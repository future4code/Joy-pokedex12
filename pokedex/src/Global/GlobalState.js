import { React, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { useGetPokeInfo } from "../hooks/useGetPokeInfo";
import {BASE_URL} from "../constants/urls"


export const GlobalState = (props) => {
    const [teste] = useGetPokeInfo(`${BASE_URL}pokemon?limit=20`)  
    const teste2 = 1
    const value = {
        teste, teste2
    }
    
    return(
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    )
}