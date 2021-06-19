import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './components/Home'
import Countdown from './components/Countdown'
import CourseLearnPath from './components/Learning Course/CourseLearnPath'
import AboutCourse from './components/About/AboutCourse'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Countdown/>
      <CourseLearnPath/>
      <AboutCourse/>
    </>
  )
}

export default App
