import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'

export default function PokemonCardFallback({pokemonName}) {
  const intialName = React.useRef(pokemonName).current
  const fallbackData = {
    name: intialName,
    number: 'XXX',
    image: '/img/fallback-pokemon.jpg',
  }
  return (
    <div>
      <PokemonCard pokemon={fallbackData} />
    </div>
  )
}
