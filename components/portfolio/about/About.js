import React from 'react'
import { useUI } from '../../../contexts/UIProvider'
import Title from '../../ui/Title'

import classes from './About.module.css'

const About = () => {
  const { darkMode } = useUI()
  return (
    <section className={classes.about} id='about'>
      <Title title={'About'} className={`${classes.title} ${darkMode && classes.dark}`}/>
    </section>
  )
}

export default About

    
  