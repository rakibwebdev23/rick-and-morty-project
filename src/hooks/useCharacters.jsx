import { useQuery } from "@tanstack/react-query";
import useAxiosRick from "./useAxiosRick";

const useCharacters = () => {
    const axiosRick = useAxiosRick();

    const { data = {} } = useQuery({
        queryKey: ["characters"],
        queryFn: async () => {
            const res = await axiosRick.get("/character");
            return res.data;
        }
    });

    return { characters: data.results || [] };

};

export default useCharacters;