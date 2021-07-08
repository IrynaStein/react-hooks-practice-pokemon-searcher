import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(resp => resp.json())
      .then(data => setPokemons(data))
  }, [])


  function onSearch(searchValue) {
    setSearchTerm(searchValue)
  }

  const filteredPokemon = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm))
  console.log(searchTerm)

  function onAddNew(newPokObj) {
    console.log(newPokObj)
    const configObj = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: newPokObj.name,
        hp: newPokObj.hp,
        sprites: {
          front: newPokObj.frontUrl,
          back: newPokObj.backUrl
        }
      })
    }
    fetch("http://localhost:3001/pokemon", configObj)
      .then(resp => resp.json())
      .then(data => setPokemons([...pokemons, data]))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddNew={onAddNew} />
      <br />
      <Search onSearch={onSearch} searchTerm={searchTerm} />
      <br />
      <PokemonCollection pokemons={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
