const CharacterCard = ({ character }) => {
    const { name, image } = character;

    return (
        <div className="shadow-md rounded-xl overflow-hidden text-center p-3 border border-[#9df618]"> 
            <img src={image} alt={name} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="font-semibold text-white">{name}</h3>
        </div>
    );
};

export default CharacterCard;
