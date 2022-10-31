import React, { useState } from 'react'
import axios from 'axios'

const Pokemon = () => {

    //STATE
    const [pokeList, setPokeList] = useState([])

    ///API CALL FUNCTION
 
    const MakeAPICall = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res => {
            const {results} = res.data
            setPokeList(results)
        }) // successful response
        .catch(error => console.log(error)) //unsucessful response
        

    }
  return (
   <fieldset>
    <legend>Pokemon.jsx</legend>
    <button onClick={MakeAPICall}>Fetch Pokemon</button>
    {
        pokeList.map((poke) => <p>{poke.name}</p>)
    }
   </fieldset>
  )
}

export default Pokemon