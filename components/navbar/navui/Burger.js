import React from 'react'
import { useUI } from '../../../contexts/UIProvider'

import classes from './Burger.module.css'

const Burger = () => {
  const { darkMode, navOpenHandler, navOpen } = useUI()

  return (
    <div
      className={`${classes.container} ${darkMode && classes.dark}`}
      onClick={navOpenHandler}
    >
      <div className={classes.wrapper}>
        {/* <i className='fas fa-bars'></i> */}
        <div className={`${classes.burger} ${navOpen && classes.active}`}>
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
          <div className={classes.line3}></div>
        </div>
      </div>
    </div>
  )
}

export default Burger
