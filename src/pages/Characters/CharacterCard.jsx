const CharacterCard = ({ character }) => {
    const { name, image } = character;

    return (
        <div className="bg-white shadow-md rounded-xl overflow-hidden p-4 text-center">
            <img src={image} alt={name} className="w-full h-60 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{name}</h3>
        </div>
    );
};

export default CharacterCard;
