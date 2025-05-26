import "../../components/shared/CardStyles.css";

const EpisodeCard = ({ episode }) => {
    const { name, episode: serial } = episode;

    return (
        <div className="card-container">
            <div className="card-content">
                <p className="card-serial">{serial}</p>
                <h3 className="card-name">{name}</h3>
            </div>
        </div>
    );
};

export default EpisodeCard;