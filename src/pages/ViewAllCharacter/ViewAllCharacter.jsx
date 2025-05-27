import CharacterCard from "../../components/shared/CharacterCard/CharacterCard";
import Container from "../../components/shared/Cotainer/Container";
import useCharacters from "../../hooks/useCharacters";

const ViewAllCharacter = () => {
    const { characters } = useCharacters();

    return (
        <Container>
            <div className="pt-32 pb-20">
                <h2 className="text-2xl text-white font-semibold mb-4">The Cast</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {characters.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default ViewAllCharacter;