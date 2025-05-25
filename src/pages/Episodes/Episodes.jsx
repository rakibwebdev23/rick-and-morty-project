import useEpisodes from "../../hooks/useEpisodes";
import EpisodeCard from "./EpisodeCard";

const Episodes = () => {
    const { episodes } = useEpisodes();

    return (
        <div className="p-6">
            <h2 className="text-black text-2xl font-bold mb-4">Episodes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {episodes.map((episode) => (
                    <EpisodeCard key={episode.id} episode={episode} />
                ))}
            </div>
        </div>
    );
};

export default Episodes;
