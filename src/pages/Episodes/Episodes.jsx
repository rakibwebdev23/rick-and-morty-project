import { useRef, useState, useEffect } from "react";
import Container from "../../components/shared/Cotainer/Container";
import useEpisodes from "../../hooks/useEpisodes";
import EpisodeCard from "./EpisodeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const Episodes = () => {
    const { episodes } = useEpisodes();
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
    }, [episodes]);

    return (
        <Container>
            <div className="pt-10">
                <h2 className="text-white text-2xl font-bold mb-4">Episodes</h2>
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
                            1024: { slidesPerView: 4.5 },
                        }}
                    >
                        {episodes.map((episode) => (
                            <SwiperSlide key={episode.id}>
                                <EpisodeCard episode={episode} />
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

export default Episodes;
