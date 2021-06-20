import React from 'react'
import { Container } from 'react-bootstrap'
import TestimonialAPI from '../../Api/TestmonialAPI.json'
import TestimonialCard from './TestimonialCard'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

function Testimonial() {
    return (
        <>
            <section className="testimonial_section py-8">
                <Container>
                    <h1 className="banglafont text-center text-4xl font-black text-black pt-8">স্টুডেন্টদের কোর্স সম্পর্কে মতামত</h1>
                    <Swiper slidesPerView={2} spaceBetween={5} freeMode={false} pagination={{
                        "clickable": true
                    }}
                    breakpoints={{
                        // when window width is >= 640px
                        500: {
                          slidesPerView: 1,
                          
                        },
                        1024 : {
                            slidesPerView:2
                        } 
                    }}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        className="mySwiper">
                        <div className="">
                            {TestimonialAPI.map((element) => {
                                return (
                                    <SwiperSlide>
                                        <TestimonialCard
                                            key={element.id}
                                            image={element.image}
                                            name={element.name}
                                            comment={element.comment}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </div>
                    </Swiper>
                </Container>
            </section>
        </>
    )
}

export default Testimonial
