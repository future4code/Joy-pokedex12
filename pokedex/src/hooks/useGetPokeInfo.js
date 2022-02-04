import axios from 'axios'
import { React, useState, useEffect } from 'react'

export function useGetPokeInfo(url){
    const [data, setData] = useState(undefined)

    useEffect(() =>{
        axios
            .get(url)
            .then(response => {
                setData(response.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    },[url])
  
    return [data]
}

