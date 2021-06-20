import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './components/Home'
import BelowFooter from './components/BelowFooter'
import Countdown from './components/Countdown'
import CourseLearnPath from './components/Learning Course/CourseLearnPath'
import AboutCourse from './components/About/AboutCourse'
import Projects from './components/Projects/Projects'
import AboutJank from './components/AboutJankarVai/AboutJank'
import Testimonial from './components/Testimonial/Testimonial'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Countdown/>
      <CourseLearnPath/>
      <AboutCourse/>
      <Projects/>
      <AboutJank/>
      <Testimonial/>
      <BelowFooter/>
    </>
  )
}

export default App
