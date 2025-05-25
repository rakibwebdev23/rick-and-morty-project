import { useQuery } from "@tanstack/react-query";
import useAxiosRick from "./useAxiosRick";

const useLocations = () => {
    const axiosRick = useAxiosRick();

    const { data = {} } = useQuery({
        queryKey: ["locations"],
        queryFn: async () => {
            const res = await axiosRick.get("/location");
            return res.data;
        }
    })

    return { locations: data.results || [] };
};

export default useLocations;