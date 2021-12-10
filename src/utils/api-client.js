function fetchPokemon(pokemonName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
    .then(async response => {
      if (response.status === 404) {
        return Promise.reject(new Error(`can't find pokemon ${pokemonName}`))
      }

      const data = await response.json()
      
      const name = data.name[0].toUpperCase() + data.name.slice(1)
      const number = data.game_indices[0].game_index
      const image = data.sprites.front_default

      const pokemon = {
        name,
        number,
        image,
      }

      return pokemon
    })
}

export {fetchPokemon}
