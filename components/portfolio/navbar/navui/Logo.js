import Link from 'next/link'
import React from 'react'
import { useUI } from '../../../../contexts/UIProvider'

import classes from './Logo.module.css'

const Logo = () => {
  const { navActiveHandler } = useUI()

  const logoSrc = '/images/logo.png'

  return (
    <Link href={'/'}>
      <a className={classes.logo}>
        <img src={logoSrc} alt='Logo' onClick={() => navActiveHandler(null)} />
      </a>
    </Link>
  )
}

export default Logo
