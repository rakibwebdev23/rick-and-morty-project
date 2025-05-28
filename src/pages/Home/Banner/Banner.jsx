import Container from "../../../components/shared/Cotainer/Container";
import bubble from "../../../assets/images/bubble.png";
import portal from "../../../assets/images/portal.png";
import bgImage from "../../../assets/images/Неон город вверх 1.png";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
    return (
        <div
            className="hero min-h-[550px] lg:min-h-screen"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="hero-overlay bg-slate-950 bg-opacity-80"></div>
            <Container>
                <div className="hero-content text-neutral-content w-full">
                    <div className="flex flex-col gap-10 text-left md:text-center w-full">
                        <div>
                            <div className="text-4xl md:text-8xl font-bold flex flex-wrap items-center md:justify-center gap-3 leading-relaxed">
                                <img className="w-12 md:w-36" src={bubble} alt="bubble" />
                                <span className="text-white italic flex items-center">
                                    THE
                                </span>
                                <img className="w-10 md:w-36" src={portal} alt="portal" />
                                <span className="bg-gradient-to-r from-[#06dc91] to-[#a9ffe1] bg-clip-text text-transparent">RICK &</span>
                            </div>
                            <span className="text-4xl md:text-8xl font-bold uppercase">
                                <span className="bg-gradient-to-r from-[#9df618] to-[#6df3c4] bg-clip-text text-transparent">
                                    Morty
                                </span>
                                <span className="text-white italic"> Wiki</span>
                            </span>
                        </div>

                        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-center gap-6">
                            <Link to="https://www.youtube.com/watch?v=KQ9Cgdsa9tc&feature=youtu.be" target="_blank">
                                <button className="flex items-center gap-2 bg-gradient-to-r from-[#ADFF2F] to-[#00FFA4]
                                 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition duration-300">
                                    <FaPlay />
                                    Watch Now
                                </button>
                            </Link>
                            <p className="text-sm text-cyan-400 max-w-sm text-left lg:ml-4">
                                Brilliant but boozy scientist Rick hijacks his fretful teenage grandson, Morty, for wild escapades in other worlds and alternate dimensions.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;