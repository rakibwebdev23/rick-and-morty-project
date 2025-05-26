import './characterCard.css';

const CharacterCard = ({ character }) => {
  const { name, image } = character;

  return (
    <div className="character-card-container">
      <img src={image} alt={name} className="character-image" />
      <div className="character-name">{name}</div>
    </div>
  );
};

export default CharacterCard;