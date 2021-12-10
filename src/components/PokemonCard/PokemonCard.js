import React from 'react'
import "./PokemonCard.css"

export default function PokemonCard({pokemon}) {
  return (
    <div className="pokemon-card--container">
      <div className="pokemon-card--img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <section className="pokemon-card--header">
        <h2>
          {pokemon.name}
        </h2>
        <p>{pokemon.number}</p>
      </section>
    </div>
  )
}
