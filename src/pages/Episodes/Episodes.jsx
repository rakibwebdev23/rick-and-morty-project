import Container from "../../components/shared/Cotainer/Container";
import useEpisodes from "../../hooks/useEpisodes";
import EpisodeCard from "./EpisodeCard";

const Episodes = () => {
    const { episodes } = useEpisodes();

    return (
        <Container>
            <div className="pt-10">
                <h2 className="text-white text-2xl font-bold mb-4">Episodes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {episodes.map((episode) => (
                        <EpisodeCard key={episode.id} episode={episode} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Episodes;
