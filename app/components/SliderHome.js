"use client";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export default function SliderHome() {

    const slides = [
        "Il tonno in scatola non contiene conservanti",
        "L’olio del tonno in scatola non va buttato",
        "Il tonno in scatola non contiene carboidrati?",
        "I tonni in scatola non sono tutti uguali uguali",
        "Il tonno in scatola non si conserva fuori dal frigo",
    ];

   
    return (
        <div className=" relative">
            {/* Slider */}
            <Swiper
                slidesPerView={1}
                navigation={{ clickable: true }}
                modules={[Navigation]}
                loop={true}
                className="mySwiper h-[30vh] w-[100vw] md:w-[80vw] lg:w-[50vw] z-[100]"
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={index}>
                        <div className=" text-yellowLight text-xl lg:text-2xl uppercase testoSliderHome w-[75%] md:w-[80%]">
                          <div className=" w-[100%] h-[30vh] p-4 md:p-10 border-white border-4 rounded-[3rem] flex justify-center items-center">
                            <p className=" w-[80%] md:text-lg lg:text-[2rem] 2xl:text-[3rem] 2xl:leading-10 text">{slideContent}</p>
                            </div>
                          </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pulsante sotto lo slider, centrato */}
            <Link href="/Educational"><button aria-label='scopri di più'
                className="absolute uppercase fontPrimary text-base lg:text-2xl left-1/2 transform -translate-x-1/2 top-full mt-[-20px] z-[200] bg-yellowDark text-yellowLight hover:text-red transition duration-500 ease-in-out px-4 py-2 md:px-4 md:py-2 rounded-full"
            >
                Scopri di più
            </button>
            </Link>
            
        </div>
    );
}