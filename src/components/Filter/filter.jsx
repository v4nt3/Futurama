import './diseñoFilter.css';


function Filter({ data, onFilter }) {
  const species = [...new Set(data.map(character => character.species))];

  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="filter-container">
      <label className="filter-label">Filtrar por especie</label>
      <select onChange={handleChange} className="filter-select" value={localStorage.getItem('speciesFilter') || ''}>
        <option value="">Todos</option>
        {species.map((specie, index) => (
          <option key={index} value={specie}>
            {specie}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
