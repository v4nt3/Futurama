import { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import './CharacterList.css';
import Filter from '../Filter/filter';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || ''); // Cargar desde localStorage
  const [speciesFilter, setSpeciesFilter] = useState(localStorage.getItem('speciesFilter') || ''); // Cargar desde localStorage
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/futurama/characters');
        if (!response.ok) throw new Error('Error al obtener los personajes');
        const data = await response.json();
        setCharacters(data);
        setFilteredCharacters(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  useEffect(() => {
    let filtered = characters;

    if (searchTerm) {
      filtered = filtered.filter(character =>
        character.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.name.last.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (speciesFilter) {
      filtered = filtered.filter(character =>
        character.species.toLowerCase() === speciesFilter.toLowerCase()
      );
    }

    setFilteredCharacters(filtered);

    // Guardar en localStorage cuando cambian los filtros
    localStorage.setItem('searchTerm', searchTerm);
    localStorage.setItem('speciesFilter', speciesFilter);

  }, [searchTerm, speciesFilter, characters]);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  if (loading) return <div className="loading">Cargando personajes...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="character-container">
      <h1>Personajes de Futurama</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar personaje por nombre"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <Filter data={characters} onFilter={setSpeciesFilter} />
      </div>

      {filteredCharacters.length === 0 ? (
        <div className="no-results">No se encontraron personajes</div>
      ) : (
        <div className="character-grid">
          {filteredCharacters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
