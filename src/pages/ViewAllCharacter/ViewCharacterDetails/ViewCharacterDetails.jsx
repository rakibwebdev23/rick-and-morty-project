import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../../../components/shared/Cotainer/Container";

const ViewCharacterDetails = () => {
    const character = useLoaderData();
    const { name, image, status, species, gender, origin, location, episode } = character;

    const [episodeNames, setEpisodeNames] = useState([]);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const responses = await Promise.all(episode.map(url => fetch(url)));
                const data = await Promise.all(responses.map(res => res.json()));
                setEpisodeNames(data.map(ep => ep.name));
            } catch (error) {
                console.error("Error fetching episode names:", error);
            }
        };

        fetchEpisodes();
    }, [episode]);

    return (
        <div className="bg-[#0D1117] min-h-screen py-10">
            <Container>
                <div className="bg-[#161B22] text-white p-6 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left: Image + Name */}
                    <div className="flex flex-col items-center text-center">
                        <img src={image} alt={name} className="rounded-xl w-56 h-56 object-cover mb-4 border-4 border-[#30363D]" />
                        <h1 className="text-3xl font-bold text-cyan-400">{name}</h1>
                    </div>

                    {/* Right: Info Cards */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
                            <div className="bg-[#21262D] p-4 rounded-lg border border-[#30363D]">
                                <p className="text-gray-400">Status</p>
                                <p className="text-white font-semibold">{status}</p>
                            </div>
                            <div className="bg-[#21262D] p-4 rounded-lg border border-[#30363D]">
                                <p className="text-gray-400">Species</p>
                                <p className="text-white font-semibold">{species}</p>
                            </div>
                            <div className="bg-[#21262D] p-4 rounded-lg border border-[#30363D]">
                                <p className="text-gray-400">Gender</p>
                                <p className="text-white font-semibold">{gender}</p>
                            </div>
                            <div className="bg-[#21262D] p-4 rounded-lg border border-[#30363D]">
                                <p className="text-gray-400">Origin</p>
                                <p className="text-white font-semibold">{origin.name}</p>
                            </div>
                            <div className="bg-[#21262D] p-4 rounded-lg border border-[#30363D] col-span-2">
                                <p className="text-gray-400">Last Known Location</p>
                                <p className="text-white font-semibold">{location.name}</p>
                            </div>
                        </div>

                        {/* Episodes */}
                        <div className="bg-[#21262D] p-4 rounded-lg border border-[#30363D]">
                            <p className="text-cyan-400 text-lg font-semibold mb-2">Episode(s)</p>
                            <ul className="max-h-40 overflow-y-auto custom-scrollbar space-y-1 text-sm">
                                {episodeNames.map((ep, index) => (
                                    <li key={index} className="text-white list-disc list-inside">{ep}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ViewCharacterDetails;
