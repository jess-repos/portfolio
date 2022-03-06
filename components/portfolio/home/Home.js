import React from 'react'
import { useUI } from '../../../contexts/UIProvider'

import classes from './Home.module.css'
import Intro from './Intro'

const Home = () => {
  const { darkMode } = useUI()
  return (
    <section
      className={`${classes.home} ${darkMode && classes.dark}`}
      id='home'
    >
      <Intro />
      {/* <div className={classes.p1}></div>
      <div className={classes.p2}></div>
      <div className={classes.p3}></div> */}
    </section>
  )
}

export default Home
