import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@material-ui/core'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Container } from 'react-bootstrap'

function Countdown() {
    const [days, setDays] = useState(['00'])
    const [hours, setHours] = useState(['00'])
    const [minutes, setMinutes] = useState(['00'])
    const [seconds, setSeconds] = useState(['00'])

    let interval = useRef()

    const startTimer = () => {
        const countDownDate = new Date('June 25,2021 23:59:00').getTime()
        interval = setInterval(() => {
            let second = 1000
            let minute = second * 60
            let hour = minute * 60
            let day = hour * 24

            const currentTime = new Date().getTime()
            const distance = countDownDate - currentTime

            const TimerDays = Math.floor(distance / (day))
            const TimerHours = Math.floor((distance % (day)) / (hour))
            const TImerMinutes = Math.floor((distance % (hour)) / (minute))
            const TImerSeconds = Math.floor((distance % (minute)) / second)

            if (distance < 0) {
                clearInterval(interval.current)
                setDays("00")
                setHours("00")
                setMinutes("00")
                setSeconds("00")
            } else {
                setDays([TimerDays])
                setHours([TimerHours])
                setMinutes([TImerMinutes])
                setSeconds([TImerSeconds])

                TimerDays < 10 ? setDays([0, TimerDays]) : setDays([TimerDays])
                TimerHours < 10 ? setHours([0, TimerHours]) : setHours([TimerHours])
                TImerMinutes < 10 ? setMinutes([0, TImerMinutes]) : setMinutes([TImerMinutes])
                TImerSeconds < 10 ? setSeconds([0, TImerSeconds]) : setSeconds([TImerSeconds])

            }
        }, 1000)
    }
    console.log(hours)
    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <>
            <section className="countdown_wrapper px-7">
                <Container>

                    <div className="bg-white rounded-xl shadow-2xl p-9 box-border relative -top-14" data-aos="zoom-in" data-aos-duration="1000">

                        <div className="grid grid-cols-1">
                            <h1 className="countdown_title text-center text-4xl font-black text-black py-8">রেজিস্ট্রেশন শেষ হতে আর বাকি</h1>

                            {/* Countdown Timer Start */}
                            <div className="flex items-center justify-center space-x-7 ">
                                <div className="flex flex-col">
                                    <h1 className="countDown_time_text font-semibold text-4xl md:text-6xl lg:text-6xl  xl:text-6xl  p-3 ">{days}</h1>
                                    <small className="block text-center text-lg text-gray-500">Days</small>
                                </div>

                                <div className="flex flex-col">
                                    <h1 className="countDown_time_text font-bold text-4xl md:text-6xl lg:text-6xl  xl:text-6xl p-3 ">{hours}</h1>
                                    <small className="block text-center text-lg  text-gray-500">Hours</small>
                                </div>

                                <div className="flex flex-col" >
                                    <h1 className="countDown_time_text font-bold text-4xl md:text-6xl lg:text-6xl  xl:text-6xl p-3 ">{minutes}</h1>
                                    <small className="block text-center text-lg  text-gray-500">Minutes</small>
                                </div>

                                <div className="flex flex-col">
                                    <h1 className="countDown_time_text font-bold text-4xl md:text-6xl lg:text-6xl  xl:text-6xl p-3 ">{seconds}</h1>
                                    <small className="block text-center text-lg  text-gray-500">Seconds</small>
                                </div>
                            </div>
                            {/* Countdown Timer End */}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 py-9 place-items-center">
                            <div>
                                <h5 className="banglafont font-semibold text-sm"><i class="fas fa-calendar-week one"></i>রেজিস্ট্রেশন শুরু: <strong>জুন ১০, ২০২১ (বৃহস্পতিবার)</strong></h5>
                                <h5 className="banglafont font-semibold text-sm"><i class="far fa-bell two"></i>ব্যাচের ওরিয়েন্টশন: <strong>জুন ২৮, ২০২১ (সোমবার)</strong></h5>
                            </div>
                            <div>
                                <h5 className="banglafont font-semibold text-sm"><i class="far fa-bookmark three"></i> রেজিস্ট্রেশন শেষ: <strong>জুন ২৪, ২০২১ (বৃহস্পতিবার)</strong></h5>
                                <h5 className="banglafont font-semibold text-sm"><i class="fas fa-tv four"></i>ক্লাস শুরু: <strong>জুলাই ১, ২০২১ (বৃহস্পতিবার)</strong></h5>
                            </div>
                        </div>

                        <div className="enroll_ads flex flex-col md:flex-col lg:flex-row xl:flex-row items-center py-3 lg:py-2 xl:py-2" >
                            <div className="flex flex-grow items-center">
                                <span className=" banglafont text-white text-lg lg:text-2xl xl:text-2xl mx-5 text-center">তুমি ৪র্থ ব্যাচে এনরোল করতে আগ্রহি হলে, ঝাঁপিয়ে পড়ো</span>
                            </div>
                            <div className="">
                                <Button className="enroll_button2 px-5 py-3 mx-3" endIcon={<DoubleArrowIcon />}>Enroll Now</Button>
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
        </>
    )
}

export default Countdown
