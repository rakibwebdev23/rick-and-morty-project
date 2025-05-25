import useCharacters from "../../hooks/useCharacters";
import CharacterCard from "./CharacterCard";

const Characters = () => {
    const { characters } = useCharacters();

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-4xl font-bold">Meet The Cast:</h2>
                <button className="btn btn-primary">View All</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
};

export default Characters;
