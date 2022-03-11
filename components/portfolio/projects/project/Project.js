import Image from 'next/image'
import React from 'react'
import { useUI } from '../../../../contexts/UIProvider'
import classes from './Project.module.css'
const Project = ({ project }) => {
  const imgSrc = `/images/projects/${project.image}`
  const { darkMode } = useUI()
  return (
    <div className={classes.project}>
      <img src={imgSrc} alt={project.title} />
      <div className={classes.gradient}></div>
      <h3 className={classes.title}>{project.title}</h3>
      <div className={`${classes.overlay} ${darkMode && classes.dark}`}>
        <div>
          <img src={imgSrc} alt={project.title} />
          <h2>{project.title}</h2>
          {project.tags && (
            <div className={classes.tags}>
              {project.tags.map((item) => (
                <div className={classes.tag}>{item}</div>
              ))}
            </div>
          )}
          <p>{project.description}</p>
        </div>
        <div className={classes.cta}>
          {project.live && (
            <a href={project.live} target='_blank' rel='noreferrer'>
              <i className='fas fa-laptop'></i> Live
            </a>
          )}
          {project.code && (
            <a href={project.code} target='_blank' rel='noreferrer'>
              <i className='fas fa-code'></i> Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
