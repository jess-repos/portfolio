import React, { useState } from 'react'
import Image from 'next/image'
import classes from './Project.module.css'
import ProjectModal from './ProjectModal'
const Project = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const imgSrc = `/images/projects/${project.image}`

  return (
    <div className={classes.project}>
      <div
        className={classes.preview}
        onClick={() => setIsModalOpen(true)}
        data-description={project.description}
      >
        <img src={imgSrc} alt={project.title} />
        <div className={classes.gradient}></div>
        <h3 className={classes.title}>{project.title}</h3>
      </div>
      {isModalOpen && (
        <ProjectModal
          project={project}
          imgSrc={imgSrc}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}

export default Project
