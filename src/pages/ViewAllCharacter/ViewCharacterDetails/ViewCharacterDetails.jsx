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
        <div className="min-h-screen pt-40 pb-10 text-white">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="md:w-1/2 w-full flex flex-col items-center">
                        <h1 className="text-4xl font-semibold text-cyan-400 mb-4 text-center">{name}</h1>
                        <div className="p-[1px] rounded-md bg-gradient-to-br from-[#00c681] to-[#79f9cc] inline-block">
                            <div className="bg-[#0D1117] rounded-md p-8">
                                <img src={image} alt={name} className="rounded-md w-56 h-56 object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block w-[2px] h-64 bg-gradient-to-b from-[#00c681] to-[#79f9cc] mx-6"></div>
                    <div className="md:w-1/2 w-full space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm sm:text-base">
                            {[{ label: "Status", value: status },
                            { label: "Species", value: species },
                            { label: "Gender", value: gender }].map((item, index) => (
                                <div
                                    key={index}
                                    className="p-[1px] rounded-md bg-gradient-to-br from-[#00c681] to-[#79f9cc]"
                                >
                                    <div className="bg-[#0D1117] rounded-md p-4 h-full">
                                        <p className="text-gray-400">{item.label}</p>
                                        <p className="font-semibold text-white">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {[{ label: "Origin", value: origin.name },
                            { label: "Last Known Location", value: location.name }].map((item, index) => (
                                <div
                                    key={index}
                                    className="p-[1px] rounded-md bg-gradient-to-br from-[#00c681] to-[#79f9cc]"
                                >
                                    <div className="bg-[#0D1117] rounded-md p-4">
                                        <p className="text-gray-400">{item.label}</p>
                                        <p className="font-semibold text-white">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-[1px] rounded-md bg-gradient-to-br from-[#00c681] to-[#79f9cc]">
                            <div className="bg-[#0D1117] rounded-md p-4 max-h-40 overflow-y-auto custom-scrollbar">
                                <p className="text-gray-300 text-md mb-2">Episode(s)</p>
                                <ul className="space-y-1 text-sm list-disc list-inside">
                                    {episodeNames.map((ep, index) => (
                                        <li key={index} className="text-white font-medium lg:text-2xl">{ep}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ViewCharacterDetails;