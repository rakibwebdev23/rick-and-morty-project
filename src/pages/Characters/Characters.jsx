import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import CharacterCard from "../../components/shared/CharacterCard/CharacterCard";
import Container from "../../components/shared/Cotainer/Container";
import useCharacters from "../../hooks/useCharacters";

const Characters = () => {
    const { characters } = useCharacters();

    const swiperRef = useRef(null);
    const [canSlidePrev, setCanSlidePrev] = useState(false);
    const [canSlideNext, setCanSlideNext] = useState(true);

    const updateButtons = (swiper) => {
        setCanSlidePrev(!swiper.isBeginning);
        setCanSlideNext(!swiper.isEnd);
    };

    useEffect(() => {
        if (swiperRef.current) {
            updateButtons(swiperRef.current);
        }
    }, [characters]);

    return (
        <Container>
            <div className="mt-14">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl text-white font-semibold">Meet The Cast</h2>
                    <Link to="/viewAllCharacter"><button className="btn btn-primary">View All</button></Link>
                </div>
                <div className="relative">
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            updateButtons(swiper);
                        }}
                        onSlideChange={(swiper) => updateButtons(swiper)}
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={4.5}
                        breakpoints={{
                            320: { slidesPerView: 2.5 },
                            640: { slidesPerView: 3.2 },
                            1024: { slidesPerView: 5.5 },
                        }}
                    >
                        {characters.map((character) => (
                            <SwiperSlide key={character.id}>
                                <CharacterCard character={character} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {canSlidePrev && (
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="absolute top-1/2 -left-6 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-200 hover:scale-110"
                            aria-label="Previous"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="#9df618"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 18l-6-6 6-6"
                                />
                            </svg>
                        </button>
                    )}
                    {canSlideNext && (
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="absolute top-1/2 -right-6 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-200 hover:scale-110"
                            aria-label="Next"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="#9df618"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 18l6-6-6-6"
                                />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default Characters;
