const BASE_URL = 'https://swapi.dev/api'

export async function getAllStarships() {
  try {
    const res = await fetch(`${BASE_URL}/starships/`)
    if (!res.ok) {
      throw new Error('Failed to fetch starships.')
    }
    const data = await res.json()
    return data.results
  } catch (error) {
    console.error('Error fetching starships:', error)
    throw error
  }
}