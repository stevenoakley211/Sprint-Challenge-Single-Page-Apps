import React, { useEffect, useState } from "react";
import axios from "axios"
import SearchForm from './SearchForm';
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters,setCharacters] = useState([]);
  useEffect(() => {
    axios.get( "https://rickandmortyapi.com/api/character/")
          .then (response =>{
            setCharacters(response.data.results)
            console.log(characters)
          })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
