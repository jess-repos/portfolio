import React from 'react'
import { useUI } from '../../../../contexts/UIProvider'

import classes from './DayNight.module.css'

const DayNight = () => {
  // console.log(darkMode.toString())
  const { darkMode, darkModeHandler } = useUI()
  const icon = darkMode ? 'sun' : 'moon'
  return (
    <div
      className={`${classes[icon]} ${darkMode && classes.dark}`}
      onClick={darkModeHandler}
    >
      <i className={`fas fa-${icon}`}></i>
    </div>
  )
}

export default DayNight
