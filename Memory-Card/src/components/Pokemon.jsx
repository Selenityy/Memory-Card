import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Pokemon = ({ mode, pokemons, onPokemonSetUp }) => {
  const possiblePokemon = 251; // up to gen 2

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        const fetchedPokemon = [];
        const fetchedPokemonIds = []; //check id's against for duplicates

        let numberOfPokemon;
        if (mode === "easy") {
          numberOfPokemon = 5;
        } else if (mode === "medium") {
          numberOfPokemon = 10;
        } else if (mode === "hard") {
          numberOfPokemon = 15;
        }

        while (fetchedPokemon.length < numberOfPokemon) {
          const randomPokemonId =
            Math.floor(Math.random() * possiblePokemon) + 1;
          if (!fetchedPokemonIds.includes(randomPokemonId)) {
            fetchedPokemonIds.push(randomPokemonId);
          }

          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
          );

          if (!response.ok) {
            throw new Error(
              "This is an HTTP error: The status is ${response.status}"
            );
          }

          const data = await response.json();
          const card = {
            id: uuidv4(),
            name: data.name,
            image: data.sprites.front_default,
            clicked: false,
          };
          fetchedPokemon.push([card]);
        }

        onPokemonSetUp([fetchedPokemon]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchRandomPokemon();
  }, [mode, onPokemonSetUp]);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          className="pokemon-cards"
          // onClick={() => onCardClick(pokemon.id)}
        >
          <h2 className="pokemon-names">{pokemon.name}</h2>
          <img
            className="pokemon-images"
            src={pokemon.image}
            alt={pokemon.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Pokemon;
