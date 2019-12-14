import React, { useState } from "react";
import Ch
import Axios from "axios";
export default function SearchForm() {
  const [characterList, setCharacterList] =useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect( ( => {
    Axios
      .get(`https://rickandmortyapi.com/api/character/`)
  }))
  return (
    <section className="search-form">
     // Add a search form here
    </section>
  );
}
