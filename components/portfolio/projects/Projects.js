import React from 'react'
import { useUI } from '../../../contexts/UIProvider'
import Title from '../../ui/Title'
import data from '../../../data/data.json'
import Project from './project/Project'

import classes from './Projects.module.css'

const Projects = () => {
  const { darkMode } = useUI()
  const { projects } = data
  return (
    <section className={classes.projects} id='projects'>
      <Title
        title={'Projects'}
        className={`${classes.title} ${darkMode && classes.dark}`}
      />
      <div className={classes.items}>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
