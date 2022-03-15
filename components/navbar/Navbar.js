import React from 'react'
import { createPortal } from 'react-dom'

import NavLinks from './navlinks/NavLinks'
import Logo from './navui/Logo'
import DayNight from './navui/DayNight'
import Burger from './navui/Burger'

import classes from './Navbar.module.css'
import useIsMounted from '../../hooks/useIsMounted'
import { useUI } from '../../contexts/UIProvider'

const Navbar = () => {
  const isMounted = useIsMounted()

  const { darkMode } = useUI()

  if (!isMounted) return null

  return createPortal(
    <div className={`${classes.nav} ${darkMode && classes.dark}`}>
      <Logo />

      <div className={classes.actions}>
        <NavLinks />
        <DayNight />
        <Burger />
      </div>
    </div>,
    document.getElementById('nav')
  )
}

export default Navbar
