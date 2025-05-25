import Characters from "../Characters/Characters";
import Episodes from "../Episodes/Episodes";
import Locations from "../Locations/Locations";

const Home = () => {
    return (
        <div>
            <h3 className="text-4xl">this is home</h3>
            <Characters></Characters>
            <Episodes></Episodes>
            <Locations></Locations>
        </div>
    );
};

export default Home;