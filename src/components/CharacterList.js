import React, { useEffect, useState } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
console.log("props",props)
  return (
    <section className="character-list">
      {props.characterList.map(item => {
        return <CharacterCard name={item.name}imageURL={item.image}gender={item.gender} species={item.species}></CharacterCard>
      })
      }
    </section>
  );
}
