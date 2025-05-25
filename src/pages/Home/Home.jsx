import Characters from "../Characters/Characters";
import Episodes from "../Episodes/Episodes";
import Locations from "../Locations/Locations";
import Banner from "./Banner/Banner";
import bgImage from "../../assets/images/Spiral Element.png"

const Home = () => {
    return (
        <div className="bg-slate-950 bg-opacity-90 pb-10">
            <Banner></Banner>
            <Characters></Characters>
            <div style={{ backgroundImage: `url(${bgImage})` }}>
                <Episodes></Episodes>
                <Locations></Locations>
            </div>
        </div>
    );
};

export default Home;