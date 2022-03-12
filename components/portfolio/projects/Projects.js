import React, { useState } from 'react'
import { useUI } from '../../../contexts/UIProvider'
import Title from '../../ui/Title'
import projects from '../../../data/projects.json'
import Project from './project/Project'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import classes from './Projects.module.css'
import '@splidejs/splide/dist/css/splide.min.css'

const Projects = () => {
  const [isAllShowing, setIsAllShowing] = useState(false)
  const { darkMode } = useUI()
  const featuredProjects = projects.filter((item) => item.isFeatured)
  const otherProjects = projects.filter((item) => !item.isFeatured)

  const projectsHandler = (status) => {
    setIsAllShowing(status)
  }

  return (
    <section className={classes.projects} id='projects'>
      <Title
        title={'Projects'}
        className={`${classes.title} ${darkMode && classes.dark}`}
      />
      <div className={classes.featured}>
        <div className={classes.header}>
          <h2>Featured Projects</h2>
          {!isAllShowing && (
            <p onClick={() => projectsHandler(true)}>Show More</p>
          )}
        </div>
        <Splide
          options={{
            // type: 'loop',
            perPage: 4,
            pagination: false,
            arrows: false,
            gap: '1rem',
            breakpoints: {
              1200: {
                perPage: 3,
              },
              900: {
                perPage: 2,
              },
              600: {
                perPage: 1,
              },
            },
          }}
        >
          {featuredProjects.map((project, index) => (
            <SplideSlide key={index}>
              <Project project={project} />
            </SplideSlide>
          ))}
        </Splide>
        <p className={classes.swipe}>
          <i className='fas fa-arrow-left'></i> &middot; &middot; &middot;{' '}
          <i className='fas fa-arrow-right'></i>
        </p>
      </div>
      {isAllShowing && (
        <>
          <div className={classes.header}>
            <h2>Other Projects</h2>
            {isAllShowing && <p onClick={() => projectsHandler(false)}>Hide</p>}
          </div>
          <div className={classes.items}>
            {otherProjects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default Projects
