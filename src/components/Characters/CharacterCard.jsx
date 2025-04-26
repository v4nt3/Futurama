import { useState } from 'react';
import './CharacterCard.css';

function CharacterCard({ character }) {
  const { name, images, species, occupation, gender } = character;
  const fullName = `${name.first} ${name.middle || ''} ${name.last}`.trim();

  // Estado para controlar si la tarjeta está girada
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped); // Cambia el estado de la tarjeta al hacer clic
  };

  return (
    <div className={`character-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="character-card-inner">
        <div className="character-card-front">
          <div className="character-image">
            <img 
              src={images.main} 
              alt={fullName}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/150?text=No+Image';
              }}
            />
          </div>
          <div className="character-info">
            <h2>{fullName}</h2>
            <p>Especie: {species}</p>
          </div>
        </div>
        <div className="character-card-back">
          <div className="character-info">
            <h2>{fullName}</h2>
            <p>Especie: {species}</p>
            <p>Genero: {gender}</p>
            <p>Ocupación: {occupation || 'No hay más información disponible'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
