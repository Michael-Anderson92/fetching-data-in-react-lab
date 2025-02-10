function StarshipCard({ starship }) {
  const { name, model, manufacturer, starship_class } = starship
  
  return (
    <li>
      <h3>{name}</h3>
      <p><strong>Model:</strong> {model}</p>
      <p><strong>Manufacturer:</strong> {manufacturer}</p>
      <p><strong>Class:</strong> {starship_class}</p>
    </li>
  )
}

export default StarshipCard