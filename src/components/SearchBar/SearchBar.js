import React from "react";

export default function SearchBar({
  searchTerm,
  onsubmit,
  initialState = searchTerm || "",
}) {
  const [term, setTerm] = React.useState(initialState);

  function handleChange(e) {
    setTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onsubmit(term);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="searchBar-input"
        id="searchBar-input"
        value={term}
        onChange={handleChange}
      />
      <button type="submit" disabled={!term.length}>
        Search
      </button>
    </form>
  );
}
