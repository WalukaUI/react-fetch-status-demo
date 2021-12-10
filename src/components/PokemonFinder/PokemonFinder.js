import React from 'react'
import { fetchPokemon } from '../../utils/api-client'
import PokemonCard from '../PokemonCard/PokemonCard'
import PokemonCardFallback from '../PokemonCardFallback/PokemonCardFallback'

export default function PokemonFinder({pokemonName}) {  
  const [state, setState] = React.useState({
    status: 'idle',
    pokemon: null,
    error: null,
  })

  const {status, pokemon, error} = state

  React.useEffect(() => {
    if (!pokemonName) return

    setState({status: 'pending'})
    fetchPokemon(pokemonName)
      .then(pokemon => setState({pokemon, status: 'resolved'}))
      .catch(error => setState({error, status: 'rejected'}))
  }, [pokemonName, setState])

  switch(status) {
    case 'idle':
      return "search for a pokemon"
    case 'pending':
      return <PokemonCardFallback pokemonName={pokemonName} />
    case 'rejected':
      throw error
    case 'resolved':
        return <PokemonCard pokemon={pokemon} />
    default:
      throw new Error("impossible")
  }
}
