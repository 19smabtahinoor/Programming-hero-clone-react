import { Button } from '@material-ui/core'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import CourseInfoAPI1 from '../../Api/CourseInfoAPI1.json'
import CourseInfoAPI2 from '../../Api/CourseInfoAPI2.json'
import CourseItem from './CourseItem'
import CourseItem2 from './CourseItem2'

function CourseLearnPath() {

    const [enrolledCount, setEnrolledCount] = useState(2075)

    const handleEnroll = () => {
        setEnrolledCount(enrolledCount + 1)
    }
    return (
        <>
            <section className="coursr_learn_path_section pb-24">
                <Container>
                    <h1 className="banglafont text-center text-4xl font-black text-black py-8">এই কোর্স থেকে কি কি শিখতে পারবে:</h1>

                    <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3">
                        {/* Course Info Start  */}
                        <div className="course_box col-span-1 bg-white shadow-2xl rounded-xl  p-8" data-aos="fade-up-right" data-aos-duration="1000">
                            <div className="">
                                <img className="course_poster rounded-xl" src="../assets/coursePoster.png" alt="Course Poster" />

                                <div className="flex items-center w-full space-x-4">

                                    <div className="flex flex-col items-center flex-grow my-4">
                                        <img className="" src="../assets/threemonths.png" alt="3 Months" />
                                        <h3 className="text-center text-2xl font-bold pt-3">3</h3>
                                        <span className="text-lg text-gray-700">Month</span>
                                    </div>

                                    <div className="flex flex-col items-center flex-grow">
                                        <img src="../assets/enrolled.png" alt="Enrolled" />
                                        <h3 className="text-center text-2xl font-bold pt-3">{enrolledCount}</h3>
                                        <span className="text-lg text-gray-700">Enrolled</span>
                                    </div>

                                    <div className="flex flex-col items-center flex-grow">
                                        <img src="../assets/certificate.png" alt="3 Months" />
                                        <h3 className="text- text-2xl font-bold pt-3">Yes</h3>
                                        <span className="text-lg text-gray-700">Certificate</span>
                                    </div>

                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                                    <div className="flex items-center space-x-1 py-2">
                                        <img className="course_image" src="../assets/video.png" alt="Video" />
                                        <span className="text-sm">660 Videos</span>
                                    </div>

                                    <div className="flex   items-center space-x-1 py-2">
                                        <img className="course_image" src="../assets/quizes.png" alt="Quizes" />
                                        <span className="text-sm">300 Quizes</span>
                                    </div>

                                    <div className="flex items-center space-x-1 py-2">
                                        <img className="course_image" src="../assets/assignment.png" alt="Assignment" />
                                        <span className="text-sm"> Assignment</span>
                                    </div>
                                </div>

                                <div className="my-6">
                                    <h1 className="banglafont text-5xl ">৳ 5500</h1>
                                </div>

                                <div className="w-full">
                                    <Button onClick={handleEnroll} className="w-full enroll_button2 py-3" endIcon={<DoubleArrowIcon />}>Enroll Now</Button>
                                </div>

                                <div className="grid grid-cols-1 py-4">
                                    <h5 className="flex">Payment System
                                        <img className="px-2" src="../../assets/sslcommerz.png" alt="sslcommerce" />
                                        <img className="px-2" src="../../assets/stripe.png" alt="stripe" />
                                    </h5>
                                    <h5 className="flex">
                                        <img className="px-2" src="../../assets/bkash.svg" alt="bkash" />
                                        Manual bKash:
                                        <span className="banglafont px-4">০১৩০৮৫৪৩৭৬৮</span>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        {/* Course Info End  */}

                        {/* Course Description 1st Column Start */}
                        <div className="col-span-1 pt-9" data-aos="fade-up-left" data-aos-duration="1000">
                            {CourseInfoAPI1.map((element, index) => {
                                return (
                                    <>
                                        <CourseItem
                                            key={index}
                                            Content={element.content}
                                        />
                                    </>
                                )
                            })}
                        </div>
                        {/* Course Description 1st Column end */}

                        {/* Course description 2nd Column Start  */}
                        <div className="col-span-1 pt-9" data-aos="fade-up-left" data-aos-duration="1000">
                            {CourseInfoAPI2.map((element, index) => {
                                return (
                                    <>
                                        <CourseItem2
                                            key={element.id}
                                            Content={element.content}
                                        />
                                    </>
                                )
                            })}
                        </div>
                        {/* Course description 2nd Column End  */}
                    </div>
                </Container>
            </section>
        </>
    )
}

export default CourseLearnPath
