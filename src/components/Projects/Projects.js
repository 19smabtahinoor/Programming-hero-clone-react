import React from 'react'
import ProjectAPI from '../../Api/ProjectAPI.json'
import ProjectsCard from './ProjectsCard'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

function Projects() {

    return (
        <>
            <section className="container-fluid py-12 projects_section">

                <div className="">
                    <h1 className="banglafont text-center text-4xl font-black text-black pt-8">এই ১১ টা প্রোজেক্ট তুমি করবে</h1>
                    <h5 className="banglafont text-center text-sm font-normal text-gray-500 py-2">প্রোগ্রামিং কনসেপ্ট, স্কিল শেখানোর পাশাপাশি আমরা আরও বাড়তি ৫ টা প্রোজেক্ট করে দেখিয়ে দিবো তুমি এই ১১ টা প্রোজেক্ট যেনও নিজে করতে পারো। <br />কেউ এই ১১টা প্রজেক্ট বুঝে বুঝে করতে পারলে তাকে আর কেউ ঠেকাতে পারবে না।</h5>
                </div>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={false}
                    slidesPerView={3}
                    coverflowEffect={{ "rotate": 50, "stretch": 0, "depth": 100, "modifier": 1, "slideShadows": false }} pagination={true}
                    speed={150}
                    className="mySwiper"
                    breakpoints={{
                        // when window width is >= 640px
                        500: {
                            slidesPerView: 1,

                        },
                        1024: {
                            slidesPerView: 3
                        }
                    }}>

                    <div className=" box-border">
                        {ProjectAPI.map((element) => {
                            return (
                                <SwiperSlide>
                                    <ProjectsCard
                                        key={element.id}
                                        catergory={element.catergory}
                                        image={element.image}
                                        Title={element.Title}
                                        Description={element.Description}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </div>

                </Swiper>
            </section>
        </>
    )
}

export default Projects
