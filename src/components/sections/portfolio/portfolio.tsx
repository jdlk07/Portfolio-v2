import React from 'react'
import { Project } from './project/project'
import { Element } from 'react-scroll'
import { data } from './data'
import { LinesWithCircles } from '../../generalComponents/backgroundLines/linesWithCircles/linesWithCircles'

const Portfolio = () => (
  <Element name='portfolio-screen'>
    <div className='portfolio-wrapper section-wrapper'>
      <div className='portfolio-container section-container'>
        <div className='header-container'>
          <h2 className='header'>Portfolio</h2>
        </div>
        <div className='projects-wrapper'>
          {data.projects.map((project, i) => (
            <Project data={project} />
          ))}
        </div>
      </div>
      {/* <LinesWithCircles /> */}
    </div>
  </Element>
)

export default React.memo(Portfolio)
