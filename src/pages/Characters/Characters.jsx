import Container from "../../components/shared/Cotainer/Container";
import useCharacters from "../../hooks/useCharacters";
import CharacterCard from "./CharacterCard";

const Characters = () => {
    const { characters } = useCharacters();

    return (
        <Container>
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl text-white font-semibold">Meet The Cast</h2>
                    <button className="btn btn-primary">View All</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {characters.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Characters;
