import React from 'react'
import { useUI } from '../../../contexts/UIProvider'
import Title from '../../ui/Title'

import classes from './Resume.module.css'

const Resume = () => {
  const { darkMode } = useUI()
  return (
    <section className={classes.resume} id='resume'>
      <Title
        title={'Resumé'}
        className={`${classes.title} ${darkMode && classes.dark}`}
      />
    </section>
  )
}

export default Resume
