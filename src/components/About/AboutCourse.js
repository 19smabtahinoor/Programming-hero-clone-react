import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import StarIcon from '@material-ui/icons/Star';
import EditIcon from '@material-ui/icons/Edit';
import AboutAPI from '../../Api/AboutAPI.json';
import AboutAPI2 from '../../Api/AboutAPI2.json';
import AboutCard from './AboutCard';
import AboutCard2 from './AboutCard2';

function AboutCourse() {
    const [toggleTabs,setToggleTabs] = useState(1)

    const toggleHandleClick = (index) => {
        setToggleTabs(index)
    }
    return (
        <>
            <section className="about_course bg-blue-100 py-12">
                <Container>
                    <div className="about_course_heading bg-white rounded-xl shadow-xl px-5 py-6 flex flex-row items-center justify-center space-x-7 mt-12">

                        <div className="about_course_first flex flex-col items-center"
                        onClick={ () => toggleHandleClick(1)}
                        >
                            <StarIcon className={toggleTabs === 1 ? "activeicon" : "icon"}/>
                            <span className={toggleTabs === 1 ? "banglafont activedesc text-xl" :"banglafont desc text-xl"}>এই কোর্সের বিশেষত্ব কি?</span>
                            <span></span>
                        </div>

                        <div className="about_course_second flex flex-col items-center cursor-pointer" onClick={ () => toggleHandleClick(2)}>
                            <EditIcon className={toggleTabs === 2 ? "activeicon" : "icon"}/>                          
                            <span className={toggleTabs === 2 ? "banglafont activedesc text-xl" :"banglafont desc text-xl"}>এই কোর্স কিভাবে চলবে?</span>
                            <span></span>
                        </div>

                    </div>

                    <div className= {toggleTabs === 1 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 inline-flex " : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 hidden"} data-aos="flip-left" data-aos-duration="500">
                        {AboutAPI.map( (element) => (
                            <AboutCard
                            key={element.id}
                            image={element.image}
                            title={element.title}
                            description={element.description}
                            />
                        ))}
                    </div>

                    <div className={toggleTabs === 2 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 inline-flex" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 hidden"}>
                        {AboutAPI2.map( (element) => (
                            <AboutCard2
                            key={element.id}
                            serial={element.serial}
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
