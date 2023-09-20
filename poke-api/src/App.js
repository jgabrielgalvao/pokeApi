import "./style.css";
import React, { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [valorInput, setValorInput] = useState("");

  function loadApi(poke) {
    let url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPokemon(json);
      })
      .catch((err) => console.log(err));
  }

  const handleInputChange = (event) => {
    setValorInput(event.target.value);
  };

  const buscarPokemon = () => {
    loadApi(valorInput);
  };

  return (
    <div className="container">
      <header>
        <strong>POKEMON API</strong>
      </header>
      <br />
      <div className="painel"></div>
      <div className="conteudo">
      <div className="busca">
        <input
        className="inputPoke"
          id="nomePokemon"
          placeholder="charizard"
          type="text"
          value={valorInput}
          onChange={handleInputChange}
        />
        <button className="buttonPoke" type="button" onClick={buscarPokemon}>
          BUSCAR
        </button>
      </div>
      <div className="pokeForm">
      <img className="imagemPoke" src={pokemon.sprites?.front_default} alt={pokemon.name} /><br/>
      <div className="stats"><strong>NOME:</strong> {pokemon.name}</div>
      <div className="stats"><strong>N°:</strong> {pokemon.id}</div>
      <div className="stats"><strong>PESO:</strong> {pokemon.weight}kg</div>
      <div className="stats"><strong>ALTURA:</strong>: {pokemon.height}m</div>
      <div className="stats"><strong>HP:</strong> {pokemon.stats ? pokemon.stats[0]?.base_stat : null}</div>
      <div className="stats"><strong>ATTACK:</strong> {pokemon.stats ? pokemon.stats[1]?.base_stat : null}</div>
      </div>
      </div>
    </div>
  );
}

export default App;
