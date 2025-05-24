import axios from "axios";

const axiosRick = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
})

const useAxiosRick = () => {
    return axiosRick;
};

export default useAxiosRick;