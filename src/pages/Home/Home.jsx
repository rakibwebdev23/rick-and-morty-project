import Episodes from "../Episodes/Episodes";
import Locations from "../Locations/Locations";
import Banner from "./Banner/Banner";
import bgImage from "../../assets/images/Spiral Element.png";
import Characters from "../Characters/Characters";

const Home = () => {
    return (
        <div>
            <div className="pb-10">
                <Banner></Banner>
                <Characters></Characters>
                <div style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat", backgroundPosition: "right" }}>
                    <Episodes></Episodes>
                    <Locations></Locations>
                </div>
            </div>
        </div>
    );
};

export default Home;