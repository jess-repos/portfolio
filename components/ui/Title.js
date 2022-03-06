import React from 'react'
import { useUI } from '../../contexts/UIProvider'

import classes from './Title.module.css';

const Title = ({ title, className }) => {
  const { darkMode } = useUI()
  return (
    <h1
      className={`${classes.title} ${className} ${
        darkMode && classes.dark
      }`}
    >
      {title}
    </h1>
  )
}

export default Title
