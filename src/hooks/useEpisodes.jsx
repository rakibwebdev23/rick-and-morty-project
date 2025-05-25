import { useQuery } from "@tanstack/react-query";
import useAxiosRick from "./useAxiosRick";

const useEpisodes = () => {
    const axiosRick = useAxiosRick();

    const { data = {} } = useQuery({
        queryKey: ["episodes"],
        queryFn: async () => {
            const res = await axiosRick.get("/episode");
            return res.data;
        }
    });

    return { episodes: data.results || [] };
};

export default useEpisodes;
