import React from 'react'
import { useUI } from '../../contexts/UIProvider'
import Home from './home/Home'
import About from './about/About'
import Navbar from '../navbar/Navbar'

import classes from './Portfolio.module.css'
import Resume from './resume/Resume'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

const Portfolio = () => {
  const { darkMode } = useUI()
  return (
    <main className={darkMode ? classes.dark : classes.light}>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact /> 
    </main>
  )
}

export default Portfolio
