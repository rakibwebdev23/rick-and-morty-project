import { Link } from 'react-router-dom';
import './characterCard.css';

const CharacterCard = ({ character }) => {
  const {id, name, image } = character;

  return (
    <section>
      <Link to={`/characterDetails/${id}`}>
        <div className="character-card-container">
          <img src={image} alt={name} className="character-image" />
          <div className="character-name">{name}</div>
        </div>
      </Link>
    </section>
  );
};

export default CharacterCard;