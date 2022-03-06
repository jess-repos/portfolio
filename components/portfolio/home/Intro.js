import React from 'react'
import { useUI } from '../../../contexts/UIProvider'

import classes from './Intro.module.css'

const Intro = () => {
  const { darkMode } = useUI()
  return (
    <div className={`${classes.intro} ${darkMode && classes.dark}`}>
      <div className={classes.hi}>
        <h1>Hi!</h1>
        <h2>
          I am <strong>Mark</strong>
        </h2>
      </div>
      <p>Developer & Analyst</p>
      <i className={`fas fa-chevron-left ${classes.b1}`}></i>
      <i className={`fas fa-chevron-left ${classes.b2}`}></i>
      <i className={`fas fa-chevron-left ${classes.b3}`}></i>
      <i className={`fas fa-chevron-left ${classes.b4}`}></i>
    </div>
  )
}

export default Intro
