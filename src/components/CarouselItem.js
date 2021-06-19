import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Carousel } from 'react-bootstrap'
import CarouselApi from '../Api/CarouselAPI.json'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function CarouselItem() {
    const [CarouselData] = useState(CarouselApi)

    return (
        <>
            <Carousel controls={false} fade={true} indicators={true}>
                {CarouselData.map((element) => (
                    <Carousel.Item interval={1000} key={element.id}>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 place-items-center my-8 pb-28">
                            <div className="col-span-1 mx-3" data-aos="fade-right" data-aos-duration="500">
                                <h1 className="slide_heading text-white text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold  md:font-semibold lg:font-bold xl:font-bold pb-3">{element.Title}</h1>

                                <p className="slide_description text-white text-md py-3">{element.Description}</p>

                                <Button className="enroll_button px-5 py-3" endIcon={<DoubleArrowIcon />}>Enroll Now</Button>
                            </div>

                            <div className="col-span-1" data-aos="fade-left" data-aos-duration="500">
                                <img
                                    className="home_page_image "
                                    src={element.Image}
                                    alt="home"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                ))}

            </Carousel>
        </>
    )
}

export default CarouselItem
