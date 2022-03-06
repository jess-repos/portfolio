import React from 'react'
import Link from 'next/link'
import { useUI } from '../../../../contexts/UIProvider'

import classes from './NavLink.module.css'

const NavLink = ({ index, name, className, link }) => {
  const { darkMode, navActive, navActiveHandler } = useUI()

  return (
    <Link href={link}>
      <a>
        <li
          className={`${classes.navlink} ${classes[className]} ${
            darkMode && classes.dark
          } ${navActive === index && classes.active}`}
          onClick={() => navActiveHandler(index)}
        >
          {name}
        </li>
      </a>
    </Link>
  )
}

export default NavLink
