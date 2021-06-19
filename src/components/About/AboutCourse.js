import React from 'react';
import { Container } from 'react-bootstrap';
import StarIcon from '@material-ui/icons/Star';
import EditIcon from '@material-ui/icons/Edit';
import AboutAPI from '../../Api/AboutAPI.json';
import AboutCard from './AboutCard';

function AboutCourse() {
    return (
        <>
            <section className="about_course bg-blue-100 py-12">
                <Container>
                    <div className="about_course_heading bg-white rounded-xl shadow-xl px-5 py-6 flex flex-row items-center justify-center space-x-7 pt-12">

                        <div className="about_course_first flex flex-col items-center">
                            <StarIcon className="icon"/>
                            <span className="banglafont desc text-xl">এই কোর্সের বিশেষত্ব কি?</span>
                            <span></span>
                        </div>

                        <div className="about_course_second flex flex-col items-center cursor-pointer">
                            <EditIcon className="icon"/>                          
                            <span className="banglafont desc text-xl">এই কোর্স কিভাবে চলবে?</span>
                            <span></span>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                        {AboutAPI.map( (element) => (
                            <AboutCard
                            key={element.id}
                            image={element.image}
                            title={element.title}
                            description={element.description}
                            />
                        ))}
                    </div>


                </Container>
            </section>
        </>
    )
}

export default AboutCourse
