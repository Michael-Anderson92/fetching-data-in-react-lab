import { useState } from 'react'

function StarshipSearch({ onSearch, onReset, resultsCount, showResetButton }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [prevSearchTerm, setPrevSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
    setPrevSearchTerm(searchTerm)
    setSearchTerm('')
  }

  return (
    <div>
      <div className="search-meta">
        <p>Showing {resultsCount} starships</p>
        <p>
          {prevSearchTerm 
            ? `Last search: "${prevSearchTerm}"`
            : "Search for a starship by name."}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter starship name..."
        />
        <button type="submit">Search</button>
        {showResetButton && (
          <button type="button" onClick={onReset}>
            Show all starships
          </button>
        )}
      </form>
    </div>
  )
}

export default StarshipSearch