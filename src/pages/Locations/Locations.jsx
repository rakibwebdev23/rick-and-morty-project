import Container from "../../components/shared/Cotainer/Container";
import useLocations from "../../hooks/useLocations";
import LocationCard from "./LocationCard";

const Locations = () => {
    const { locations } = useLocations();

    return (
        <Container>
            <div className="pt-10">
                <h2 className="text-white text-2xl font-bold mb-4">Locations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {locations.map((location) => (
                        <LocationCard key={location.id} location={location} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Locations;