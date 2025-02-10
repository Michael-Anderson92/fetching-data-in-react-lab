import { useState, useEffect } from 'react'
import StarshipSearch from './components/StarshipSearch/StarshipSearch.jsx'
import StarshipList from './components/StarshipList/StarshipList.jsx'
import { getAllStarships } from './services/starshipService'
import './App.css'

function App() {
  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDisplayedStarships] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await getAllStarships()
        setStarshipsData(data)
        setDisplayedStarships(data)
        setIsLoading(false)
      } catch (err) {
        setError('Failed to load starships')
        setIsLoading(false)
      }
    }

    fetchStarships()
  }, [])

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setDisplayedStarships(starshipsData)
      return
    }
    
    const filteredStarships = starshipsData.filter(starship => 
      starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setDisplayedStarships(filteredStarships)
  }

  const handleReset = () => {
    setDisplayedStarships(starshipsData)
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <main>
      <h1>Star Wars Starships</h1>
      <StarshipSearch 
        onSearch={handleSearch}
        onReset={handleReset}
        resultsCount={displayedStarships.length}
        showResetButton={displayedStarships.length !== starshipsData.length}
      />
      <StarshipList starships={displayedStarships} />
    </main>
  )
}

export default App