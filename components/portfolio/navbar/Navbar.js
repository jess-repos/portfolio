import React from 'react'
import { useUI } from '../../../contexts/UIProvider'
import { createPortal } from 'react-dom'

import NavLinks from './navlinks/NavLinks'
import Logo from './navui/Logo'
import DayNight from './navui/DayNight'
import Burger from './navui/Burger'

import classes from './Navbar.module.css'
import useIsMounted from '../../../hooks/useIsMounted'

const Navbar = () => {
  const { darkMode } = useUI()

  const isMounted = useIsMounted()

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
