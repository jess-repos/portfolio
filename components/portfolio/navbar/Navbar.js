import React from 'react'
import { useUI } from '../../../contexts/UIProvider'

import NavLinks from './navlinks/NavLinks'
import Logo from './navui/Logo'
import DayNight from './navui/DayNight'
import Burger from './navui/Burger'

import classes from './Navbar.module.css'

const Navbar = () => {
  const { darkMode } = useUI()
  return (
    <div className={`${classes.nav} ${darkMode && classes.dark}`}>
      <Logo />

      <div className={classes.actions}>
        <NavLinks />
        <DayNight />
        <Burger />
      </div>
    </div>
  )
}

export default Navbar
