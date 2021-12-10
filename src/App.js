import React from "react";
import "./App.css";
import PokemonFinder from "./components/PokemonFinder/PokemonFinder";
import SearchBar from "./components/SearchBar/SearchBar";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Error:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>retry</button>
    </div>
  );
}

function App() {
  const [pokemonName, setPokemonName] = React.useState("");

  function handleSubmit(newState) {
    setPokemonName(newState)
  }

  function handleReset() {
    setPokemonName('')
  }

  return (
    <div className="App">
      <SearchBar onsubmit={handleSubmit} />
      <ErrorBoundary 
        FallbackComponent={ErrorFallback} 
        onReset={handleReset}
        resetKeys={[pokemonName]}
      >
        <PokemonFinder pokemonName={pokemonName} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
