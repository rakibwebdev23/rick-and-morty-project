import "../../components/shared/CardStyles.css";

const LocationCard = ({ location }) => {
    const { id, name } = location;

    return (
        <div className="card-container">
            <div className="card-content">
                <p className="card-serial">#{id}</p>
                <h3 className="card-name">{name}</h3>
            </div>
        </div>
    );
};

export default LocationCard;
