import Link from 'next/link'
import React from 'react'

import { useUI } from '../../../contexts/UIProvider'
import NavLink from './NavLink'

import classes from './NavLinks.module.css'

const links = [
  {
    name: 'Home',
    className: 'home',
    link: '/#home',
  },
  {
    name: 'About',
    className: 'about',
    link: '/#about',
  },
  {
    name: 'Resumé',
    className: 'resume',
    link: '/#resume',
  },
  {
    name: 'Projects',
    className: 'projects',
    link: '/#projects',
  },
  {
    name: 'Contact',
    className: 'contact',
    link: '/#contact',
  },
]

const NavLinks = () => {


  const { darkMode, navOpen } = useUI()

  return (
    <ul
      className={`${classes.navlinks} ${darkMode && classes.dark} ${
        navOpen && classes.navopen
      }`}
    >
      {links.map((link, index) => (
        <NavLink
          key={index}
          index={index}
          name={link.name}
          className={link.className}
          link={link.link}
        />
      ))}
    </ul>
  )
}

export default NavLinks
