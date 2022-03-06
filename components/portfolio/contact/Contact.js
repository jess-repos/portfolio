import React from 'react'
import { useUI } from '../../../contexts/UIProvider'
import Title from '../../ui/Title'

import classes from './Contact.module.css'

const Contact = () => {
  const { darkMode } = useUI()
  return (
    <section className={classes.contact} id='contact'>
      <Title
        title={'Contact'}
        className={`${classes.title} ${darkMode && classes.dark}`}
      />
    </section>
  )
}

export default Contact
