import React from 'react'
import { createPortal } from 'react-dom'
import { useUI } from '../../../../contexts/UIProvider'
import useIsMounted from '../../../../hooks/useIsMounted'

import classes from './ProjectModal.module.css'

const ProjectModal = ({ project, onClose, imgSrc }) => {
  const isMounted = useIsMounted()
  const { darkMode } = useUI()

  if (!isMounted) return null

  return createPortal(
    <>
      <div className={classes.gradient} onClick={onClose}></div>
      <div className={classes.modal}>
        <div className={`${classes.overlay} ${darkMode && classes.dark}`}>
          <i className={`fas fa-times ${classes.close}`} onClick={onClose}></i>
          <div>
            <img src={imgSrc} alt={project.title} />
            <h2>{project.title}</h2>
            {project.tags && (
              <div className={classes.tags}>
                {project.tags.map((item, index) => (
                  <div className={classes.tag} key={index}>
                    {item}
                  </div>
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
    </>,
    document.getElementById('modal')
  )
}

export default ProjectModal
