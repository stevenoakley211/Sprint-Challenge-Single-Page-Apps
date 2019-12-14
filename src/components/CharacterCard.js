import React from "react";
import styled from "styled-components"
export default function CharacterCard(props) {
  const StyledH1 = styled.h1 `
  text-decoration: underline overline red;
  
  `
  const Card = styled.div`
  background-color:white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
  transition: 0.3s;
  border-radius: 5px;
  width:500px;
  padding:20px;
  margin: 20px;
  font-family:'Helvetica';
  `
  return <Card>
  <StyledH1>{props.name}</StyledH1>
  <img src={props.imageURL}/>
  <p>Gender:{props.gender}</p>
  <p>Species:{props.species}</p>
  
</Card>;
}
