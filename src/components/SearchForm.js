import React, { useState,useEffect } from "react";
import Axios from "axios";
import CharacterList from "./CharacterList"
export default function SearchForm() {
  const [characterList, setCharacterList] =useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [Switch, setSwitch] = useState(0);
  console.log(characterList)
  useEffect( () => {
    Axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        if (searchTerm.length > 0) {
          const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setCharacterList(characters)
        }else {
          setCharacterList(response.data.results)
        }
        
          
      })
  },[searchTerm])

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search-form">
     <form>
        <input
          type="text"
          onChange={handleChange}
          value={searchTerm}
          name="name"
          placeholder="Search by name"
          autoComplete="off"
        />
        {/* <button onClick={()=>{
          setSwitch(Switch + 1)
        }}>Search</button> */}
      </form>
      <CharacterList characterList={characterList}/>
    </section>
  );
}
