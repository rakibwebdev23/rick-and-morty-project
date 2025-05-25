const LocationCard = ({location}) => {
    const { id, name } = location;

    return (
        <div className="border border-[#00ff99] rounded-xl px-4 py-3 bg-[#0e0e2c] text-white">
            <p className="text-sm text-[#aaffcc]">#{id}</p>
            <h3 className="text-lg font-semibold mt-1">{name}</h3>
        </div>
    );
};

export default LocationCard;