import React from 'react'
import { Project } from './project/project'
import { Element } from 'react-scroll'
import { data } from './data'
import { LinesWithCircles } from '../../generalComponents/backgroundLines/linesWithCircles/linesWithCircles'
import ReactVisibilitySensor from 'react-visibility-sensor'

interface IsProps {
  setActiveSection: (section: string) => void
}

const Portfolio = ({ setActiveSection }: IsProps) => {
  const onVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setActiveSection('portfolio')
    }
  }

  return (
    <Element name='portfolio-screen'>
      <div className='portfolio-wrapper section-wrapper'>
        <div className='portfolio-container section-container'>
          <ReactVisibilitySensor
            partialVisibility
            onChange={onVisibilityChange}
          >
            <div className='header-container'>
              <h2 className='header'>Portfolio</h2>
            </div>
          </ReactVisibilitySensor>
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
}
export default React.memo(Portfolio)
